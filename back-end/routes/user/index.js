const express = require('express');
const database = require('../../database');
const router = express.Router();

router.get('/', function (request, response) {
  const query = request.query;
  let email = query.email;
  let name = query.name;
  let sql = 'SELECT * FROM user';
  const whereSql = [];
  if (email) {
    whereSql.push(`user.email LIKE '%${email}%'`);
  }
  if (name) {
    whereSql.push(`user.fullname LIKE '%${name}%'`);
  }

  if (whereSql.length > 0) {
    sql += ' WHERE ' + whereSql.join(' AND ') + 'and user.permision = 1';
  } else {
    sql += ' where user.permision = 1';
  }

  database.query(sql, [], function (error, results) {
    if (error) throw error;
    const result = results.map((user) => {
      return {
        id: user.id,
        email: user.email,
        name: user.fullname,
      };
    });
    return response.json(result);
  });
});

module.exports = router;
