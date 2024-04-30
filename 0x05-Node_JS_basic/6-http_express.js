#!/usr/bin/node
const express = require('express');

const app = express();

// Define a route handler for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Set up the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

// Export the app instance
module.exports = app;
