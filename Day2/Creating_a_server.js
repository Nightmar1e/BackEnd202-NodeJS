const http = require('http') 

// This `server` will receive data.
const server = http.createServer()


server.on('request', (request, response) => {
    // Do something here to handle the request
    // For example, you can send a response back to the client
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, Walid!');
  });

// We use our server object again to add a 'listen' method to it.

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})