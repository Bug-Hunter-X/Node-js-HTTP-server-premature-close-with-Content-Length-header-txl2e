const http = require('http');

const server = http.createServer((req, res) => {
  // This is a common mistake: setting the content-length header
  // *before* writing to the response stream.
  res.setHeader('Content-Length', '10');
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});