const mysql2 = require('mysql2');

module.exports = mysql2.createConnection({
  host: 'localhost',
  database: 'btl',
  user: 'root',
  password: 'root',
});
