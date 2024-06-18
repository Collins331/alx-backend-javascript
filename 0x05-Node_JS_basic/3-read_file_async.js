const fs = require('fs').promises;

function countStudents(filename) {
  return fs.readFile(filename, 'utf-8')
    .then((data) => {
      const rows = data.split('\n').filter((row) => row.trim() !== '');
      if (rows.length === 0) {
        console.log('Number of students: 0');
        return;
      }
      const header = rows.shift().split(',');
      const fieldMap = {};
      rows.forEach((row) => {
        const student = row.split(',');
        student.forEach((field, index) => {
          if (header[index] === 'field') {
            if (fieldMap[field] === undefined) {
              fieldMap[field] = [];
            }
            fieldMap[field].push(student[0]);
          }
        });
      });
      console.log(`Number of students: ${rows.length}`);
      for (const field in fieldMap) {
        if (Object.hasOwnProperty.call(fieldMap, field)) {
          console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${fieldMap[field].join(', ')}`);
        }
      }
    })
    .catch(() => { throw new Error('Cannot load the database'); });
}

module.exports = countStudents;
