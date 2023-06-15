const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function checkConnection() {
  const result = await client.connect();
  const db = result.db("e-commerce");
  console.log("Connected to MongoDB");
  return db;
}

module.exports = checkConnection;
