const express = require('express');
const database = require('../../database');
const router = express.Router();

router.get('/', function (request, response) {
  const query = request.query;
  let email = query.email || '';
  let name = query.name || '';
  if (email || name) {
    database.query(
      'SELECT * FROM user WHERE email LIKE ? AND fullname LIKE ?',
      [`%${email}%`, `%${name}%`],
      function (error, results) {
        if (error) throw error;
        return response.json(results);
      },
    );
  } else {
    database.query('SELECT * FROM user where user.permision = 1', function (error, results) {
      if (error) throw error;
      results = results.map((user) => {
        delete user.password;
        return user;
      });
      return response.json(results);
    });
  }
});

module.exports = router;
