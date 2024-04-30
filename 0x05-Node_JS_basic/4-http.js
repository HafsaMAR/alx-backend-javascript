#!/usr/bin/node

const http = require('http');

const hostname = 'localhost';
const port = 1245;

// create the HTTP server
const app = http.createServer((req, res) => {
  // set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  // console.log(`Server running at ${hostname}:${port}`);
});

module.exports = app;
