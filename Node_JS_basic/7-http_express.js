const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

function countStudents(pathToFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};
      students.forEach((line) => {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${students.length}`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          result += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }

      resolve(result);
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  const dbFile = process.argv[2];

  try {
    const summary = await countStudents(dbFile);
    res.send(`This is the list of our students\n${summary}`);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(PORT);

module.exports = app;
