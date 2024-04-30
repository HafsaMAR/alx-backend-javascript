#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    data = fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
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

        resolve();
      }
    });
  });
}

module.exports = countStudents;
