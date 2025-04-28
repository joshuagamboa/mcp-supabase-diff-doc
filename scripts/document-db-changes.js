// scripts/document-db-changes.js
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Load .env from root

// --- Configuration ---
const SNAPSHOTS_DIR = path.resolve(__dirname, '../snapshots');
const DOCS_DIR = path.resolve(__dirname, '../docs');
const CURRENT_SCHEMA_SQL = path.join(SNAPSHOTS_DIR, 'current.sql');
const PREVIOUS_SCHEMA_SQL = path.join(SNAPSHOTS_DIR, 'previous.sql');
const CHANGELOG_MD = path.join(DOCS_DIR, 'supabase-changelog.md');
const STRUCTURE_MD = path.join(DOCS_DIR, 'supabase-structure.md');

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
const PGPASSWORD = `PGPASSWORD=${DB_PASSWORD}`; // Environment variable for pg_dump password

// --- Helper Functions ---

/**
 * Ensures a directory exists.
 * @param {string} dirPath - Path to the directory.
 */
function ensureDirExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.log(`Creating directory: ${dirPath}`);
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

/**
 * Executes a shell command using shelljs.
 * @param {string} command - The command to execute.
 * @param {boolean} silent - Whether to suppress output (default: true).
 * @returns {shell.ShellString} - The result object from shelljs.exec.
 */
function runCommand(command, silent = true) {
    console.log(`Executing: ${command.replace(DB_PASSWORD, '********')}`); // Avoid logging password
    const result = shell.exec(command, { silent: silent });
    if (result.code !== 0) {
        console.error(`Error executing command: ${command.replace(DB_PASSWORD, '********')}`);
        console.error(result.stderr);
        throw new Error(`Command failed with code ${result.code}`);
    }
    return result;
}

// --- Core Functions ---

/**
 * Dumps the current database schema to current.sql.
 */
function dumpCurrentSchema() {
    ensureDirExists(SNAPSHOTS_DIR);
    const dumpCommand = `${PGPASSWORD} pg_dump --schema-only --host=${DB_HOST} --port=${DB_PORT} --username=${DB_USER} --dbname=${DB_NAME} --file="${CURRENT_SCHEMA_SQL}" --no-owner --no-privileges`;
    runCommand(dumpCommand);
    console.log(`Schema dumped successfully to ${CURRENT_SCHEMA_SQL}`);
}

/**
 * Generates the DDL diff between previous and current schema.
 * @returns {string|null} - The diff text, or null if no previous schema exists or no changes.
 */
function generateSchemaDiff() {
    if (!fs.existsSync(PREVIOUS_SCHEMA_SQL)) {
        console.log('No previous schema found. Skipping diff generation.');
        return null; // Indicate first run or missing previous state
    }

    // Using standard diff. Consider pg-diff or similar for more SQL-aware diffing if needed.
    // The '-U 0' context makes the diff smaller, focusing only on changes.
    const diffCommand = `diff -U 0 "${PREVIOUS_SCHEMA_SQL}" "${CURRENT_SCHEMA_SQL}"`;
    console.log(`Generating diff: ${diffCommand}`);
    const result = shell.exec(diffCommand, { silent: true }); // Allow non-zero exit code for diffs

    // Filter diff output for actual changes (lines starting with + or - but not +++ or ---)
    // And ignore comments and blank lines introduced by the diff itself
    const changes = result.stdout
        .split('\n')
        .filter(line => /^[+-]/.test(line) && !/^[+-]{3}/.test(line) && !/^[+-]--/.test(line.trim()) && line.trim().length > 1)
        .map(line => line.substring(1).trim()) // Remove leading + or -
        .filter(line => line.length > 0) // Remove empty lines potentially left after trim
        .join('\n');


    if (changes.trim().length === 0 && result.code === 0) {
        console.log('No schema changes detected.');
        return null;
    }
    
    // Basic heuristic to filter out only DDL statements. This might need refinement.
    const ddlKeywords = ['CREATE', 'ALTER', 'DROP', 'COMMENT ON', 'SECURITY LABEL', 'POLICY', 'TRIGGER', 'FUNCTION', 'TYPE', 'SCHEMA', 'EXTENSION', 'SEQUENCE', 'TABLE', 'INDEX', 'VIEW'];
    const ddlChanges = changes.split('\n').filter(line => ddlKeywords.some(keyword => line.toUpperCase().startsWith(keyword))).join('\n');


    if (ddlChanges.trim().length === 0) {
         console.log('Diff found, but no apparent DDL changes after filtering.');
         return null;
    }

    console.log('Schema changes detected.');
    return ddlChanges;
}


/**
 * Appends the generated diff to the changelog file.
 * @param {string} diffText - The DDL diff text.
 */
function updateChangelog(diffText) {
    ensureDirExists(DOCS_DIR);
    const timestamp = new Date().toISOString();
    const logEntry = `\n---\n\n**Changes detected at: ${timestamp}**\n\n\`\`\`sql\n${diffText.trim()}\n\`\`\`\n`;

    if (!fs.existsSync(CHANGELOG_MD)) {
        console.log(`Creating changelog file: ${CHANGELOG_MD}`);
        fs.writeFileSync(CHANGELOG_MD, `# Supabase Schema Changelog\n\nInitial schema captured or first changes recorded.\n`);
    }

    fs.appendFileSync(CHANGELOG_MD, logEntry);
    console.log(`Changelog updated: ${CHANGELOG_MD}`);
}


/**
 * Generates the full schema structure documentation.
 */
function generateStructureDoc() {
    ensureDirExists(DOCS_DIR);
    if (!fs.existsSync(CURRENT_SCHEMA_SQL)) {
        console.error("Current schema file not found. Cannot generate structure doc.");
        return; // Should have been created by dumpCurrentSchema
    }
    // Read the dumped schema SQL content
    const schemaSql = fs.readFileSync(CURRENT_SCHEMA_SQL, 'utf8');

    // Create a simple Markdown representation
    const structureContent = `# Supabase Schema Structure\n\n*Generated at: ${new Date().toISOString()}*\n\nThis document contains the complete DDL structure of the database schema.\n\n\`\`\`sql\n${schemaSql}\n\`\`\`\n`;

    fs.writeFileSync(STRUCTURE_MD, structureContent);
    console.log(`Schema structure documentation updated: ${STRUCTURE_MD}`);
}

/**
 * Rotates the schema snapshots: current.sql -> previous.sql.
 */
function rotateSnapshots() {
    if (fs.existsSync(CURRENT_SCHEMA_SQL)) {
         // Delete old previous snapshot if it exists
        if (fs.existsSync(PREVIOUS_SCHEMA_SQL)) {
            fs.unlinkSync(PREVIOUS_SCHEMA_SQL);
            console.log(`Deleted old snapshot: ${PREVIOUS_SCHEMA_SQL}`);
        }
        // Rename current to previous
        fs.renameSync(CURRENT_SCHEMA_SQL, PREVIOUS_SCHEMA_SQL);
        console.log(`Rotated snapshots: ${CURRENT_SCHEMA_SQL} -> ${PREVIOUS_SCHEMA_SQL}`);
    } else {
         console.warn(`Current schema file ${CURRENT_SCHEMA_SQL} not found during rotation.`);
    }

}

/**
 * Main function to orchestrate the documentation process.
 * @returns {Promise<{success: boolean, message: string}>} - Operation result.
 */
async function documentDatabaseChanges() {
    console.log("Starting database documentation process...");
    try {
        // 1. Dump the current schema
        dumpCurrentSchema();

        // 2. Generate diff against the previous snapshot
        const diffText = generateSchemaDiff();

        // 3. Update changelog if changes were detected
        if (diffText) {
            updateChangelog(diffText);
        } else if (!fs.existsSync(PREVIOUS_SCHEMA_SQL)) {
             // Handle first run: Create changelog if it doesn't exist, add initial entry
             ensureDirExists(DOCS_DIR);
              if (!fs.existsSync(CHANGELOG_MD)) {
                    console.log(`Creating initial changelog file: ${CHANGELOG_MD}`);
                    fs.writeFileSync(CHANGELOG_MD, `# Supabase Schema Changelog\n\n*Initial schema captured at: ${new Date().toISOString()}*\n`);
             }
        }

        // 4. Generate the full structure documentation (overwrite)
        generateStructureDoc();

        // 5. Rotate snapshots (current -> previous) for the next run
        rotateSnapshots();

        console.log("Database documentation process completed successfully.");
        return { success: true, message: "Database schema changes documented successfully." };

    } catch (error) {
        console.error("Error during database documentation process:", error);
        return { success: false, message: `Error: ${error.message}` };
    }
}

// Export the main function if this script is required as a module
// Allow direct execution if run via `node scripts/document-db-changes.js`
if (require.main === module) {
    documentDatabaseChanges().then(result => {
        console.log("Script finished:", result);
        process.exit(result.success ? 0 : 1);
    });
} else {
    module.exports = documentDatabaseChanges;
}
