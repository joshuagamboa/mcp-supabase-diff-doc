#!/bin/bash

# Set database environment variables
export DB_HOST=localhost
export DB_PORT=54322
export DB_NAME=postgres
export DB_USER=postgres
export DB_PASSWORD=postgres
export MCP_PORT=6789

# Print environment for debugging
echo "Starting MCP Supabase Schema Tracker server..."
echo "Database connection: $DB_USER@$DB_HOST:$DB_PORT/$DB_NAME"

# Modify the document-db-changes.js script to use docker exec for pg_dump
cat > docker-pg-dump.sh << 'EOF'
#!/bin/bash
# This script is a wrapper for pg_dump that uses docker exec
# Usage: ./docker-pg-dump.sh [pg_dump arguments]

# Extract the output file from arguments
output_file=""
for arg in "$@"; do
  if [[ $arg == --file=* ]]; then
    output_file="${arg#--file=}"
    break
  fi
done

if [ -z "$output_file" ]; then
  echo "Error: No output file specified with --file"
  exit 1
fi

# Remove the quotes from the output file path if present
output_file="${output_file//\"/}"

# Get the container ID for the Supabase PostgreSQL container
container_id=$(docker ps | grep supabase_db | awk '{print $1}')

if [ -z "$container_id" ]; then
  echo "Error: Supabase PostgreSQL container not found"
  exit 1
fi

echo "Using PostgreSQL container: $container_id"
echo "Output file: $output_file"

# Execute pg_dump in the container and redirect output to the file
docker exec $container_id pg_dump "$@" > "$output_file"
exit $?
EOF

# Make the script executable
chmod +x docker-pg-dump.sh

# Modify the document-db-changes.js script to use our docker-pg-dump.sh wrapper
sed -i.bak 's|const pgDumpPath = .*/pg_dump|const pgDumpPath = "./docker-pg-dump.sh"|g' scripts/document-db-changes.js

# Run the MCP server
node mcp/server.js
