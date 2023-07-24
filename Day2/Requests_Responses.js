const http = require('http') 

// The server object
const server = http.createServer()

// The event watcher
server.on("request", (req, res) => {
    console.log("A request has been submitted")
    res.end()
})

// The port listener
server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})