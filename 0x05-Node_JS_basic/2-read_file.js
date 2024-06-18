const fs = require('fs');

function countStudents(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf-8');

    // split data by new lines to get rows
    const rows = data.split('\n').filter((row) => row.trim() !== '');
    if (rows.length === 0) {
      console.log('Number of students: 0');
    }
    // remove the header row
    const header = rows.shift().split(',');

    // Initialize a map to sore field-wise students data
    const fieldMap = {};

    // Iterate through each row
    rows.forEach((row) => {
      const student = row.split(',');
      // Iterate through each field
      student.forEach((field, index) => {
        if (header[index] === 'field') {
          if (fieldMap[field] === undefined) {
            fieldMap[field] = [];
          }
          fieldMap[field].push(student[0]);
        }
      });
    });
    // print number of students
    console.log(`Number of students: ${rows.length}`);
    // Print the number of students in each field
    for (const field in fieldMap) {
      if (Object.hasOwnProperty.call(fieldMap, field)) {
        console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
