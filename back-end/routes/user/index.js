const express = require('express');
const database = require('../../database');
const router = express.Router();

router.get('/', function (request, response) {
  const query = request.query;
  let email = query.email || '';
  let name = query.name || '';
  database.query(
    'SELECT * FROM user WHERE email LIKE ? AND fullname LIKE ? and user.permision = 1',
    [`%${email}%`, `%${name}%`],
    function (error, results) {
      if (error) throw error;
      const result = results.map((user) => {
        return {
          id: user.id,
          email: user.email,
          name: user.fullname,
        };
      });
      return response.json(result);
    },
  );
});

module.exports = router;
