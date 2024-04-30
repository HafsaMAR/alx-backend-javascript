#!/usr/bin/node

const http = require('http');
const { countStudents } = require('./3-read_file_async'); // Import the countStudents function

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-Type': 'test/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
      .then(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the list of our students');
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Error: ${err.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running at http://localhost:1245/');
});

module.exports = app;
