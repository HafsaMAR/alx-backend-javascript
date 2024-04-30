#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  // parse the csv data
  const rows = data.trim().split('\n');
  const students = rows.slice(1).map((line) => line.split(','));
  const fields = {};

  students.forEach((student) => {
    const field = student[3];
    // start the list of students in each field
    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(student[0]);

    // log the list of students of each list
  });
  // eslint-disable-next-line no-console
  console.log('Number of students:', students.length);
  Object.entries(fields).forEach(([field, fieldStudents]) => {
    // eslint-disable-next-line no-console
    console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
  });
}

module.exports = countStudents;
