# Integrating with Augment Code

This document provides instructions for integrating the MCP Supabase Schema Tracker with Augment Code VS Code extension.

## Augment Code MCP Server Configuration

To configure the MCP Supabase Schema Tracker in Augment Code settings:

### 1. Name
- Enter: `Supabase Schema Tracker`

### 2. Command
- Enter: `node /Users/jpg/Coding/mcp-supabase-diff-doc/mcp/server.js`
  - Replace the path with the actual full path to your project

### 3. Environment Variables
- Enter the following (one per line):
  ```
  DB_HOST=localhost
  DB_PORT=54322
  DB_NAME=postgres
  DB_USER=postgres
  DB_PASSWORD=postgres
  MCP_PORT=6789
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
