# Log-Ingestor-and-Query-Interface

This application provides a Log Ingestor and Query Interface for efficiently handling log data. It allows you to ingest logs over HTTP and offers a simple interface for querying log data using full-text search or specific field filters.

## Features

### Log Ingestor:

- Mechanism to ingest logs in the provided format.
- Scalability to handle high volumes of logs efficiently.
- Mitigation of potential bottlenecks such as I/O operations, database write speeds, etc.
- Logs are ingested via an HTTP server, running on port `3000` by default.

### Query Interface:

- User interface (Web UI or CLI) for full-text search across logs.
- Filters based on:
  - level
  - message
  - resourceId
  - timestamp
  - traceId
  - spanId
  - commit
  - metadata.parentResourceId
- Efficient and quick search results.

## Advanced Features (Bonus):

- Search within specific date ranges.
- Utilize regular expressions for search.
- Allow combining multiple filters.
- Provide real-time log ingestion and searching capabilities.
- Implement role-based access to the query interface.

## Sample Queries

The following are some sample queries that can be executed for validation:

- Find all logs with the level set to "error".
- Search for logs with the message containing the term "Failed to connect".
- Retrieve all logs related to resourceId "server-1234".
- Filter logs between the timestamp "2023-09-10T00:00:00Z" and "2023-09-15T23:59:59Z". (Bonus)

## Usage

1. Install dependencies:

   ```bash
   npm install
