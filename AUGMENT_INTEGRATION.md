# Integrating with Augment Code

This document provides instructions for integrating the MCP Supabase Schema Tracker with Augment Code VS Code extension using the Augment Code Settings UI.

## Augment Code MCP Server Configuration

There are two ways to configure the MCP Supabase Schema Tracker in Augment Code settings:

### Option 1: Connect to an Existing MCP Server (Recommended)

If you already have the MCP server running (or prefer to start it manually):

1. Start the MCP server in a terminal (if not already running):
   ```bash
   cd /path/to/mcp-supabase-diff-doc
   DB_HOST=localhost DB_PORT=54322 DB_NAME=postgres DB_USER=postgres DB_PASSWORD=postgres MCP_PORT=6789 node mcp/server.js
   ```

2. Open Augment Code Settings in VS Code:
   - Click on the Augment Code icon in the VS Code sidebar
   - Click on the gear icon (⚙️) to open settings
   - Navigate to the "MCP" section
   - Click the "+" button to add a new MCP server

3. Fill in only these fields:
   - **Name**: `Supabase Schema Tracker`
   - **URL**: `http://localhost:6789/mcp`

4. **Important**: Do NOT fill in the Command or Environment Variables fields
   - When you provide a URL but no Command, Augment Code will connect to the existing server
   - When you provide a Command, Augment Code tries to start a new server

5. Click "Add" to save the configuration

### Option 2: Let Augment Code Start the MCP Server

If you want Augment Code to automatically start the MCP server:

1. Open Augment Code Settings in VS Code:
   - Click on the Augment Code icon in the VS Code sidebar
   - Click on the gear icon (⚙️) to open settings
   - Navigate to the "MCP" section
   - Click the "+" button to add a new MCP server

2. Fill in the MCP server configuration fields:
   - **Name**: `Supabase Schema Tracker`
   - **Command**: `/opt/homebrew/bin/node /Users/jpg/Coding/mcp-supabase-diff-doc/mcp/server.js`
     - Use the full path to both node and your server.js file
     - Adjust the paths based on your system

3. Add Environment Variables (click "Add" button for each):
   - `DB_HOST` = `localhost`
   - `DB_PORT` = `54322`
   - `DB_NAME` = `postgres`
   - `DB_USER` = `postgres`
   - `DB_PASSWORD` = `postgres`
   - `MCP_PORT` = `6789`

4. Click "Add" to save the MCP server configuration

## Understanding the MCP Tool

The MCP server exposes a tool with the following properties:

- **Name**: `document_db_changes`
- **Description**: Detects and records database schema (DDL) changes into docs/supabase-changelog.md and snapshots the current full schema structure into docs/supabase-structure.md.
- **Input**: No input parameters required
- **Output**: An object with `success` (boolean) and `message` (string) properties

When the LLM calls this tool, it will:
1. Connect to your local Supabase PostgreSQL database running in Docker
2. Dump the current schema structure
3. Compare it with the previous schema (if available)
4. Record any changes to the changelog file
5. Generate a complete schema structure document

## Troubleshooting

If you encounter issues with the integration:

1. **Docker Connection Issues**:
   - Make sure your Supabase Docker containers are running
   - Verify that the PostgreSQL container is accessible (check with `docker ps | grep supabase_db`)

2. **Node.js Not Found**:
   - If you get a "node: command not found" error, use the full path to Node.js in the command:
     ```
     /opt/homebrew/bin/node /Users/jpg/Coding/mcp-supabase-diff-doc/mcp/server.js
     ```

3. **Permission Issues**:
   - Ensure the script has execute permissions:
     ```bash
     chmod +x /Users/jpg/Coding/mcp-supabase-diff-doc/mcp/server.js
     ```

## Using the Tool

Once configured, you can use the following types of prompts with Augment Code:

- "Document my Supabase database schema"
- "Check for any schema changes in my Supabase database"
- "Update the schema documentation for my Supabase project"
- "Generate a changelog of my database structure"
- "Create documentation for my Supabase tables and views"

### Helping the LLM Understand the Tool

When first using the tool, it's helpful to provide some context to the LLM about what the tool does. You can do this by starting with a prompt like:

"I have a Supabase Schema Tracker MCP tool that can document database schema changes. The tool is called 'document_db_changes' and it analyzes my Supabase PostgreSQL database to detect DDL changes and generate documentation. Can you help me use this tool to document my current database schema?"

This helps the LLM understand:
1. The name of the tool (`document_db_changes`)
2. What it does (documents schema changes)
3. When to use it (for analyzing Supabase PostgreSQL databases)

The tool will generate documentation in the `docs/` directory of the project:

1. **Schema Changelog** (`docs/supabase-changelog.md`): A chronological record of all DDL changes detected.
2. **Schema Structure** (`docs/supabase-structure.md`): A complete snapshot of the current database schema.

### Example Conversation

Here's an example of how to interact with the tool through Augment Code:

**User**: "Can you document the current schema of my Supabase database?"

**Augment Code**: "I'll help you document your Supabase database schema. Let me use the document_db_changes tool to analyze your database structure."

*[Augment Code calls the document_db_changes tool]*

**Augment Code**: "I've successfully documented your Supabase database schema. The documentation has been generated in two files:

1. `docs/supabase-changelog.md` - Contains a record of schema changes
2. `docs/supabase-structure.md` - Contains the complete current schema structure

Would you like me to show you the contents of these files or explain any specific part of your database schema?"
