# Node.js HTTP Server Premature Close

This repository demonstrates a subtle bug in a Node.js HTTP server where setting the `Content-Length` header before writing data to the response stream can cause the connection to prematurely close. The issue arises because Node.js expects the `Content-Length` to accurately reflect the amount of data written. If data is written after the header is set, it does not match the expected amount and closes the connection.

## Steps to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Try to access the server using a client (e.g., curl).
4. Observe an incomplete response or an error due to premature closure.

## Solution

The solution involves ensuring that the `Content-Length` header is set *after* the data is written or using `res.write()` and `res.end()` in the proper order to allow Node.js to manage the Content-Length header automatically.