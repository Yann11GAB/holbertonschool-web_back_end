const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // Remove header
    const header = lines[0].split(',');
    const fieldIndex = header.indexOf('field');
    const firstNameIndex = header.indexOf('firstname');

    const students = lines.slice(1)
      .map((line) => line.split(','))
      .filter((cols) => cols.length === header.length);

    const fields = {};

    for (const student of students) {
      const field = student[fieldIndex];
      const firstName = student[firstNameIndex];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
