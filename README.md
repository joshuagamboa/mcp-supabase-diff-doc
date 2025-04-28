# MCP Supabase Schema Tracker

A tool for tracking and documenting schema changes in Supabase PostgreSQL databases.

> **Project Creation**: The architecture for this project was planned by Gemini 2.5 Pro Experimental, and the entire codebase was implemented by Agent (Auto) through the Augment Code VS Code extension. The implementation was completed in a single agent session with approximately 40 tool uses, including file creation, editing, and command execution.

## Overview

This MCP client detects and records Data Definition Language (DDL) changes made to a local Supabase PostgreSQL database. When invoked by an LLM via an MCP `tools/call` request, it:

1. Identifies DDL changes (e.g., `CREATE TABLE`, `ALTER FUNCTION`, `DROP INDEX`) since the last invocation
2. Appends these changes with a timestamp to a persistent changelog file (`docs/supabase-changelog.md`)
3. Generates a complete, well-formatted Markdown representation of the entire current database schema (`docs/supabase-structure.md`)

## Features

- Detailed tracking of schema changes over time
- Complete schema documentation in Markdown format
- Integration with LLMs via MCP protocol
- Efficient use of standard tools (`pg_dump`, `diff`)
- Robust error handling
- Configuration via `.env` file

## Prerequisites

- Node.js (v18+) and npm/yarn
- Docker & Docker Compose
- Supabase CLI (`npm install -g supabase`)
- PostgreSQL Client Tools (`psql`, `pg_dump`)
- `diff` command-line utility (standard on Linux/macOS)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/joshuagamboa/mcp-supabase-diff-doc.git
   cd mcp-supabase-diff-doc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the `.env.example` template:
   ```bash
   cp .env.example .env
   ```

4. Edit the `.env` file with your Supabase database connection details:
   ```
   DB_HOST=localhost
   DB_PORT=54322
   DB_NAME=postgres
   DB_USER=postgres
   DB_PASSWORD=postgres
   MCP_PORT=6789
   ```

## Usage

### Starting the MCP Server

Start the MCP server with:

```bash
npm start
```

The server will be available at `http://localhost:6789/mcp` (or the port specified in your `.env` file).

### Invoking the Tool

The tool can be invoked via an MCP `tools/call` request:

```json
{
  "type": "tools/call",
  "id": "call_123",
  "toolCall": {
    "name": "document_db_changes",
    "arguments": {}
  }
}
```

### Output Files

The tool generates two main output files:

1. **Schema Changelog** (`docs/supabase-changelog.md`): A chronological record of all DDL changes detected.
2. **Schema Structure** (`docs/supabase-structure.md`): A complete snapshot of the current database schema.

### VS Code Extension Integration

To integrate with VS Code AI extensions:

1. **Roo-coder**: Set `roo.mcpServerUrl` to `http://localhost:6789/mcp`
2. **Cline**: Add `http://localhost:6789/mcp` to `cline.mcpEndpoints`
3. **Augment**: Configure the MCP server URL in settings

## Troubleshooting

### Common Issues

- **PostgreSQL Connection Issues**: Ensure your Supabase instance is running and the connection details in `.env` are correct.
- **Command Not Found Errors**: Make sure `pg_dump` and `diff` are in your PATH or update the script with the full path.
- **Permission Denied**: Ensure the user running the script has permission to create and modify files in the project directories.

### Logs

Check the console output for detailed logs when running the server or executing the tool directly.

## Development

To run the core script directly (without the MCP server):

```bash
node scripts/document-db-changes.js
```

To test the MCP server with a sample request:

```bash
node test-mcp-call.js
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Project Development

This project demonstrates the capabilities of AI-assisted development:

- **Architecture Planning**: The project architecture was designed by Gemini 2.5 Pro Experimental
- **Implementation**: The entire codebase was written by Agent (Auto) through the Augment Code VS Code extension
- **Development Process**: The implementation was completed in a single agent session, with the agent handling:
  - Project structure creation
  - Code writing and editing
  - Dependency management
  - Testing and debugging
  - Documentation

This approach showcases how AI agents can efficiently implement software projects from architectural specifications, handling both the technical implementation and documentation aspects.
