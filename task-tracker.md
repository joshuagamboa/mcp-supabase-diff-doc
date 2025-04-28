# MCP Supabase Schema Tracker Implementation Plan

This document outlines the step-by-step implementation plan for the MCP Supabase Schema Tracker tool based on the architecture document.

## Project Overview

The MCP Supabase Schema Tracker is a tool that:
1. Detects and records DDL (Data Definition Language) changes to a local Supabase PostgreSQL database
2. Generates a complete Markdown representation of the current database schema
3. Integrates with LLMs via the MCP protocol

## Implementation Steps

### Phase 1: Environment Setup

- [ ] **1.1. Install Prerequisites**
  - [ ] Node.js (v18+) and npm/yarn
  - [ ] Docker & Docker Compose
  - [ ] Supabase CLI (`npm install -g supabase`)
  - [ ] PostgreSQL Client Tools (`psql`, `pg_dump`)
  - [ ] Verify `diff` command-line utility is available

- [ ] **1.2. Setup Local Supabase**
  - [ ] Start local Supabase instance via Docker (`supabase start`)
  - [ ] Verify database connection details:
    - [ ] Host (usually `localhost` or `127.0.0.1`)
    - [ ] Port (default `54322` for Supabase CLI v1.163.6+)
    - [ ] Database name (usually `postgres`)
    - [ ] Username (usually `postgres`)
    - [ ] Password (check Supabase config)

### Phase 2: Project Structure Setup

- [ ] **2.1. Create Project Directory Structure**
  - [ ] Create main project directory (`mcp-schema-tracker/`)
  - [ ] Create subdirectories:
    - [ ] `mcp/` - For MCP server logic
    - [ ] `scripts/` - For core logic scripts
    - [ ] `snapshots/` - For temporary schema dumps
    - [ ] `docs/` - For output documentation files

- [ ] **2.2. Create Configuration Files**
  - [ ] Create `package.json` with required dependencies:
    - [ ] dotenv
    - [ ] express
    - [ ] mcp-server
    - [ ] shelljs
  - [ ] Create `.env.example` with template configuration
  - [ ] Create `.gitignore` to exclude node_modules, .env, and snapshots/
  - [ ] Create `.env` file with actual configuration (not committed to git)

### Phase 3: Core Script Implementation

- [ ] **3.1. Implement Database Schema Documentation Script**
  - [ ] Create `scripts/document-db-changes.js`
  - [ ] Implement helper functions:
    - [ ] `ensureDirExists()` - Create directories if they don't exist
    - [ ] `runCommand()` - Execute shell commands safely
  - [ ] Implement core functions:
    - [ ] `dumpCurrentSchema()` - Dump current database schema to SQL file
    - [ ] `generateSchemaDiff()` - Generate diff between previous and current schema
    - [ ] `updateChangelog()` - Append changes to changelog file
    - [ ] `generateStructureDoc()` - Create full schema structure documentation
    - [ ] `rotateSnapshots()` - Rotate schema snapshots for next run
    - [ ] `documentDatabaseChanges()` - Main orchestration function

- [ ] **3.2. Test Core Script Independently**
  - [ ] Run script directly with `node scripts/document-db-changes.js`
  - [ ] Verify it creates initial schema files correctly
  - [ ] Make a schema change in Supabase and run again to test diff detection

### Phase 4: MCP Server Implementation

- [ ] **4.1. Implement MCP Server**
  - [ ] Create `mcp/server.js`
  - [ ] Set up Express server
  - [ ] Configure MCP Server with tool definition
  - [ ] Implement tool call handler for `document_db_changes`
  - [ ] Connect handler to core script functionality

- [ ] **4.2. Test MCP Server**
  - [ ] Start server with `node mcp/server.js`
  - [ ] Verify server starts and listens on configured port
  - [ ] Test with a manual MCP request to the endpoint

### Phase 5: Integration and Testing

- [ ] **5.1. Full System Testing**
  - [ ] Start Supabase local instance
  - [ ] Start MCP server
  - [ ] Make schema changes in Supabase
  - [ ] Invoke tool via MCP request
  - [ ] Verify changelog and structure files are updated correctly

- [ ] **5.2. VS Code Extension Integration**
  - [ ] Configure VS Code extension(s) to use the MCP server:
    - [ ] Roo-coder: Set `roo.mcpServerUrl` to MCP endpoint
    - [ ] Cline: Add MCP endpoint to `cline.mcpEndpoints` if needed
    - [ ] Augment: Configure MCP server URL in settings
  - [ ] Test invoking the tool through the VS Code extension

### Phase 6: Documentation and Finalization

- [ ] **6.1. Create User Documentation**
  - [ ] Document setup process
  - [ ] Document usage instructions
  - [ ] Document troubleshooting steps

- [ ] **6.2. Finalize Project**
  - [ ] Review code for any improvements or optimizations
  - [ ] Ensure all files are properly committed to version control
  - [ ] Create a README.md with project overview and setup instructions

## Completion Criteria

The implementation is considered complete when:

1. The MCP server successfully starts and registers the `document_db_changes` tool
2. The tool correctly detects and documents schema changes in the Supabase database
3. The tool generates proper changelog and structure documentation files
4. The tool can be invoked via MCP protocol from LLM agents
5. All documentation is complete and accurate

## Notes

- Ensure proper error handling throughout the implementation
- Test with various types of schema changes (CREATE, ALTER, DROP)
- Consider security implications of database credentials in .env file
