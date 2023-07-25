const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const clientFolderPath = path.join(__dirname, 'client');

  let filePath;
  if (req.url === '/') {
    filePath = path.join(clientFolderPath, 'index.html');
  } else {
    const urlPath = req.url === '/' ? 'index.html' : `${req.url}.html`;
    filePath = path.join(clientFolderPath, urlPath);
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
