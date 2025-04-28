// A simple script to test the MCP server
const http = require('http');
require('dotenv').config();

const PORT = process.env.MCP_PORT || 6789;

// Create a simple MCP tools/call request
const mcpRequest = {
    type: 'tools/call',
    id: 'call_' + Date.now(),
    toolCall: {
        name: 'document_db_changes',
        arguments: {}
    }
};

// Options for the HTTP request
const options = {
    hostname: 'localhost',
    port: PORT,
    path: '/mcp',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(mcpRequest))
    }
};

// Make the request
const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        console.log('Response body:', JSON.parse(data));
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

// Write the request body
req.write(JSON.stringify(mcpRequest));
req.end();

console.log('Sent MCP request:', mcpRequest);
