// mcp/server.js
const express = require('express');
const { McpServer } = require('./mock-mcp-server');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // Load .env from root

const documentDatabaseChanges = require('../scripts/document-db-changes'); // Import the core logic

const app = express();
const PORT = process.env.MCP_PORT || 6789; // Use port from .env or default

// Define the MCP Tool Schema
const documentDbTool = {
    name: "document_db_changes",
    description: "Detects and records database schema (DDL) changes into docs/supabase-changelog.md and snapshots the current full schema structure into docs/supabase-structure.md.",
    inputSchema: {
        // No input arguments needed for this version
        type: "object",
        properties: {},
        required: []
    },
    // Define output schema if you want to enforce structure, otherwise optional
    outputSchema: {
        type: "object",
        properties: {
            success: { type: "boolean" },
            message: { type: "string" }
        },
        required: ["success", "message"]
    }
};

// Create and configure the MCP Server
const mcpServer = new McpServer({
    logger: console, // Use console for logging
    tools: [documentDbTool], // Register our tool
});

// Middleware to handle MCP requests
app.use(express.json()); // Needed to parse JSON request bodies
app.use('/mcp', mcpServer.middleware); // Mount MCP server at /mcp path

// Implement the tool call handler
mcpServer.handle('tools/call', async ({ toolCall }) => {
    console.log(`Received tools/call for: ${toolCall.name}`);

    if (toolCall.name === 'document_db_changes') {
        try {
            // Execute the documentation script
            // This function now returns { success: boolean, message: string }
            const result = await documentDatabaseChanges();

            // Return the result according to MCP spec
            return {
                result: result, // The actual output from the tool's execution
                status: result.success ? 'success' : 'error',
            };
        } catch (error) {
            console.error(`Error executing tool ${toolCall.name}:`, error);
            return {
                result: { // Provide structured error info
                    success: false,
                    message: `Internal server error: ${error.message}`
                },
                status: 'error',
            };
        }
    } else {
        // Handle unknown tool calls
        console.warn(`Unknown tool called: ${toolCall.name}`);
        return {
            result: {
                success: false,
                message: `Tool '${toolCall.name}' not found.`
            },
            status: 'error', // MCP status for tool not found/error
        };
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`MCP Schema Tracker Server listening on http://localhost:${PORT}`);
    console.log(`MCP endpoint available at http://localhost:${PORT}/mcp`);
});
