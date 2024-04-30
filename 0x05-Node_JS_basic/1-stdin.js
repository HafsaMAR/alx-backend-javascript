#!/usr/bin/node

// read input from standard input
process.stdin.setEncoding('utf-8');

// Listen to the user input after asking question
// eslint-disable-next-line no-console
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const name = data.trim(); // trim whitespaces from input
  // eslint-disable-next-line no-console
  console.log(`Your name is: ${name}`);

  // Handle termination of the program
  process.stdin.on('end', () => {
    // eslint-disable-next-line no-console
    console.log('This important software is now closing');
  });
});
