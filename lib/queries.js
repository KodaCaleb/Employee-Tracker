const db = require('../db/db.js');

const viewAllDepartments = () => {
  return db.promise().query('SELECT * FROM department');
};

module.exports = { viewAllDepartments };
