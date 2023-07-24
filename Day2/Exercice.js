const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Define the base path of the client folder
  const clientFolderPath = path.join(__dirname, 'client');

  // Determine the requested URL and corresponding file path
  let filePath;
  if (req.url === '/') {
    filePath = path.join(clientFolderPath, 'index.html');
  } else {
    filePath = path.join(clientFolderPath, req.url, 'index.html');
  }

  // Read the HTML file and send it as the response
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If the file is not found, return a 404 Not Found response
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      // Serve the HTML content with a 200 OK response
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
