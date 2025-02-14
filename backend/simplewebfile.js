import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
// define the host and port
const host = 'localhost'
const port = 3000

// create a server
const server = createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Read the user.json file
    try {
      // Get user data
      res.statusCode = 200
      const userJSONData = await readFile('users.json', 'utf-8')
      res.setHeader('Content-Type', 'application/json')
      res.end(userJSONData)
    } catch (err) {
      console.error('Error reading file - ', err.message)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('Error reading file')
    }
  } else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome to the NodeJs HTTP server')
  }
})

// Start the server
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`)
})
