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
      "url": "http://localhost:6789/mcp"
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

The tool will generate documentation in the `docs/` directory of the project.
