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


2. Run the Log Ingestor:
  ```bash
  node log_ingestor.js

Ensure that Elasticsearch is running locally on the default port (9200).

3. Open the Log Query Interface:

Open the 'log_query_interface.html' file in a web browser.

## Configuration
Update Elasticsearch connection settings in 'log_ingestor.js' if needed.
## Tips for Development
Consider hybrid database solutions (relational + NoSQL) for a balance of structured data handling and efficient search capabilities.
Database indexing and sharding might be beneficial for scalability and speed.
Distributed systems or cloud-based solutions can ensure robust scalability.
## License
This project is licensed under the MIT License - see the LICENSE file for details.
