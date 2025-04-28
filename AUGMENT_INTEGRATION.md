# Integrating with Augment Code

This document provides instructions for integrating the MCP Supabase Schema Tracker with Augment Code VS Code extension using the `augment.advanced` settings.

## Augment Code Advanced Configuration

To configure the MCP Supabase Schema Tracker in Augment Code settings:

1. Open VS Code Settings (JSON) by:
   - Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Preferences: Open Settings (JSON)" and select it

2. Add or update the `augment.advanced` section with the following configuration:

```json
"augment.advanced": {
  "mcpServers": [
    {
      "name": "Supabase Schema Tracker",
      "url": "http://localhost:6789/mcp",
      "toolInstructions": "You have access to a tool called 'document_db_changes' that can detect and document schema changes in a Supabase PostgreSQL database. This tool will analyze the database, identify any Data Definition Language (DDL) changes since the last run, update a changelog file, and generate a complete schema structure document. Use this tool when the user asks about database schema, documentation, or tracking changes to their Supabase database structure."
    }
  ]
}
```

3. Save the settings file

4. Start the MCP server manually in a terminal:
   ```bash
   cd /path/to/mcp-supabase-diff-doc
   DB_HOST=localhost DB_PORT=54322 DB_NAME=postgres DB_USER=postgres DB_PASSWORD=postgres MCP_PORT=6789 node mcp/server.js
   ```

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
