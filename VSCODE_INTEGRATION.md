# VS Code Integration for MCP Supabase Schema Tracker

This document provides instructions for integrating the MCP Supabase Schema Tracker with VS Code, independent of any AI extensions.

## Running the MCP Server in VS Code

### Option 1: Using VS Code Tasks (Recommended)

1. **Open the Command Palette**:
   - Press `Cmd+Shift+P` (macOS) or `Ctrl+Shift+P` (Windows/Linux)
   - Type "Tasks: Run Task" and select it
   - Choose "Start MCP Supabase Schema Tracker"

This will start the MCP server in a new terminal window within VS Code. The server will run in the background, and you can see its output in the terminal.

### Option 2: Using the Terminal

1. **Open a Terminal in VS Code**:
   - Press `` Ctrl+` `` to open a terminal
   - Run the start script:
     ```bash
     ./start-mcp-server.sh
     ```

## Accessing the MCP Server

Once the server is running, it will be available at:
- URL: `http://localhost:6789/mcp`

You can test if the server is running by making a request to it:
```bash
curl -X POST http://localhost:6789/mcp -H "Content-Type: application/json" -d '{"type":"tools/list"}'
```

This should return a list of available tools, including `document_db_changes`.

## Using with AI Extensions

If you want to use this MCP server with AI extensions:

### Augment Code

Configure Augment Code to connect to the existing server:
1. Open Augment Code Settings
2. Add a new MCP server with:
   - **Name**: `Supabase Schema Tracker`
   - **URL**: `http://localhost:6789/mcp`
   - Do NOT fill in Command or Environment Variables

### Other Extensions

For other VS Code AI extensions that support MCP:
- **Roo-coder**: Set `roo.mcpServerUrl` to `http://localhost:6789/mcp`
- **Cline**: Add `http://localhost:6789/mcp` to `cline.mcpEndpoints`

## Stopping the Server

To stop the MCP server:
1. Find the terminal where it's running
2. Press `Ctrl+C` to terminate the process

## Troubleshooting

If you encounter issues:

1. **Port Already in Use**:
   - Check if something is already running on port 6789:
     ```bash
     lsof -i :6789
     ```
   - Kill the process if needed:
     ```bash
     kill $(lsof -t -i:6789)
     ```

2. **Docker Connection Issues**:
   - Make sure your Supabase Docker containers are running:
     ```bash
     docker ps | grep supabase_db
     ```

3. **Permission Issues**:
   - Ensure the scripts have execute permissions:
     ```bash
     chmod +x start-mcp-server.sh
     chmod +x docker-pg-dump.sh
     ```
