import { createServer } from 'node:http'
// define the host and port
const host = 'localhost'
const port = 3000

// create a server
const server = createServer((req, res) => {
  // Set the response header and status code
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  // Check the request url and send different responses
  if (req.url === '/') {
    res.end('Welcome to the NodeJs HTTP server')
  } else if (req.url === '/about') {
    res.end('This is the about page')
  } else {
    // Default response
    res.statusCode = 404
    res.end('404 -Page not found')
  }
})

// Start the server
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`)
})
