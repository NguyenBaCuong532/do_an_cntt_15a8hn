const mysql2 = require('mysql2');

module.exports = mysql2.createConnection({
  host: 'localhost',
  database: 'do_an',
  user: 'root',
  password: 'Toan@2508',
});
