const http = require('http');

const server = http.createServer((req, res) => {
  // Correct implementation: Writing the data to response before setting the Content-Length
  res.end('Hello, world!');
  //This line is no longer needed as res.end() now automatically sets Content-Length
  //res.setHeader('Content-Length', '12');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});