const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const { Client } = require('@elastic/elasticsearch');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// SQLite database setup
const db = new sqlite3.Database(':memory:'); // Use a file-based database in production

// Elasticsearch client setup
const elasticClient = new Client({ node: 'http://localhost:9200' }); // Assuming Elasticsearch is running locally

// Create a logs table
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS logs (id INTEGER PRIMARY KEY AUTOINCREMENT, level TEXT, message TEXT, resourceId TEXT, timestamp DATETIME, traceId TEXT, spanId TEXT, commit TEXT, parentResourceId TEXT)');
});

app.post('/logs', async (req, res) => {
  const logEntry = req.body;

  // Insert log into the SQLite database
  db.run('INSERT INTO logs (level, message, resourceId, timestamp, traceId, spanId, commit, parentResourceId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [logEntry.level, logEntry.message, logEntry.resourceId, logEntry.timestamp, logEntry.traceId, logEntry.spanId, logEntry.commit, logEntry.metadata?.parentResourceId],
    async (err) => {
      if (err) {
        console.error('Error inserting log into SQLite:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Index log into Elasticsearch for efficient search
      try {
        await elasticClient.index({
          index: 'logs',
          body: logEntry,
        });
        res.status(200).send('Log ingested successfully');
      } catch (elasticError) {
        console.error('Error indexing log into Elasticsearch:', elasticError.meta.body.error);
        res.status(500).send('Internal Server Error');
      }
    });
});

app.listen(port, () => {
  console.log(`Log Ingestor listening at http://localhost:${port}`);
});
