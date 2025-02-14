import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/'
const dbName = 'testdb'
const client = new MongoClient(url)

// Connect to database and log message for success and failed connections
try {
  await client.connect()
  console.log('Successfully connected to database!')
} catch (err) {
  console.error('Error connectiong to database:', err)
}

// Create HTTP Server
const server = createServer(async (req, res) => {
  // Select the database from the client and the collection from the database.
  const db = client.db(dbName)
  const users = db.collection('users')

  // Execute the find() method on the users collection.
  const userList = await users.find().toArray()

  // Set the status code and response header, and return the users list
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(userList))
})

// Server should listen on port 3000
const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`)
})
