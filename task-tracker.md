# MCP Supabase Schema Tracker Implementation Plan

This document outlines the step-by-step implementation plan for the MCP Supabase Schema Tracker tool based on the architecture document.

## Project Overview

The MCP Supabase Schema Tracker is a tool that:
1. Detects and records DDL (Data Definition Language) changes to a local Supabase PostgreSQL database
2. Generates a complete Markdown representation of the current database schema
3. Integrates with LLMs via the MCP protocol

## Implementation Steps

### Phase 1: Environment Setup

- [x] **1.1. Install Prerequisites**
  - [x] Node.js (v18+) and npm/yarn
  - [x] Docker & Docker Compose
  - [x] Supabase CLI (`npm install -g supabase`)
  - [x] PostgreSQL Client Tools (`psql`, `pg_dump`)
  - [x] Verify `diff` command-line utility is available

- [x] **1.2. Setup Local Supabase**
  - [x] Start local Supabase instance via Docker (`supabase start`)
  - [x] Verify database connection details:
    - [x] Host (localhost)
    - [x] Port (54322)
    - [x] Database name (postgres)
    - [x] Username (postgres)
    - [x] Password (postgres)

### Phase 2: Project Structure Setup

- [x] **2.1. Create Project Directory Structure**
  - [x] Create main project directory (`mcp-schema-tracker/`)
  - [x] Create subdirectories:
    - [x] `mcp/` - For MCP server logic
    - [x] `scripts/` - For core logic scripts
    - [x] `snapshots/` - For temporary schema dumps
    - [x] `docs/` - For output documentation files

- [x] **2.2. Create Configuration Files**
  - [x] Create `package.json` with required dependencies:
    - [x] dotenv
    - [x] express
    - [x] shelljs
    - [x] Created mock MCP server implementation
  - [x] Create `.env.example` with template configuration
  - [x] Create `.gitignore` to exclude node_modules, .env, and snapshots/
  - [x] Create `.env` file with actual configuration (not committed to git)

### Phase 3: Core Script Implementation

- [x] **3.1. Implement Database Schema Documentation Script**
  - [x] Create `scripts/document-db-changes.js`
  - [x] Implement helper functions:
    - [x] `ensureDirExists()` - Create directories if they don't exist
    - [x] `runCommand()` - Execute shell commands safely
  - [x] Implement core functions:
    - [x] `dumpCurrentSchema()` - Dump current database schema to SQL file
    - [x] `generateSchemaDiff()` - Generate diff between previous and current schema
    - [x] `updateChangelog()` - Append changes to changelog file
    - [x] `generateStructureDoc()` - Create full schema structure documentation
    - [x] `rotateSnapshots()` - Rotate schema snapshots for next run
    - [x] `documentDatabaseChanges()` - Main orchestration function

- [x] **3.2. Test Core Script Independently**
  - [x] Run script directly with `node scripts/document-db-changes.js`
  - [x] Verify it creates initial schema files correctly
  - [x] Make a schema change in Supabase and run again to test diff detection

### Phase 4: MCP Server Implementation

- [x] **4.1. Implement MCP Server**
  - [x] Create `mcp/server.js`
  - [x] Set up Express server
  - [x] Configure MCP Server with tool definition
  - [x] Implement tool call handler for `document_db_changes`
  - [x] Connect handler to core script functionality

- [x] **4.2. Test MCP Server**
  - [x] Start server with `node mcp/server.js`
  - [x] Verify server starts and listens on configured port
  - [x] Test with a manual MCP request to the endpoint

### Phase 5: Integration and Testing

- [x] **5.1. Full System Testing**
  - [x] Start Supabase local instance
  - [x] Start MCP server
  - [x] Make schema changes in Supabase
  - [x] Invoke tool via MCP request
  - [x] Verify changelog and structure files are updated correctly

- [ ] **5.2. VS Code Extension Integration**
  - [ ] Configure VS Code extension(s) to use the MCP server:
    - [ ] Roo-coder: Set `roo.mcpServerUrl` to MCP endpoint
    - [ ] Cline: Add MCP endpoint to `cline.mcpEndpoints` if needed
    - [ ] Augment: Configure MCP server URL in settings
  - [ ] Test invoking the tool through the VS Code extension

### Phase 6: Documentation and Finalization

- [x] **6.1. Create User Documentation**
  - [x] Document setup process
  - [x] Document usage instructions
  - [x] Document troubleshooting steps

- [x] **6.2. Finalize Project**
  - [x] Review code for any improvements or optimizations
  - [x] Ensure all files are properly committed to version control
  - [x] Create a README.md with project overview and setup instructions

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
