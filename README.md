# MCP Supabase Schema Tracker

A tool for tracking and documenting schema changes in Supabase PostgreSQL databases.

## Overview

This MCP client detects and records Data Definition Language (DDL) changes made to a local Supabase PostgreSQL database. When invoked by an LLM via an MCP `tools/call` request, it:

1. Identifies DDL changes (e.g., `CREATE TABLE`, `ALTER FUNCTION`, `DROP INDEX`) since the last invocation
2. Appends these changes with a timestamp to a persistent changelog file
3. Generates a complete, well-formatted Markdown representation of the entire current database schema

## Features

- Detailed tracking of schema changes over time
- Complete schema documentation in Markdown format
- Integration with LLMs via MCP protocol
- Efficient use of standard tools (`pg_dump`, `diff`)
- Robust error handling
- Configuration via `.env` file

## Getting Started

See the [task-tracker.md](task-tracker.md) file for a detailed implementation plan.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
