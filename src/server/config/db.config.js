const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.URI);

let conn;
try {
  conn = client.connect();
} catch (e) {
  console.error(e);
}

let db = client.db(process.env.db);

module.exports = { db };