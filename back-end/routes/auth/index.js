const express = require('express');
const database = require('../../database');
const router = express.Router();

router.post('/', function (request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    database.query(
      'SELECT * FROM user WHERE name = ? AND password = ?',
      [username, password],
      function (error, results) {
        if (error) throw error;
        if (results.length > 0) {
          return response.json('Success');
        } else {
          return response.json('false');
        }
      },
    );
  } else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

module.exports = router;
