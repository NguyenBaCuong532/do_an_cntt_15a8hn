const express = require('express');
const database = require('../../database');
const router = express.Router();

router.post('/', function (request, response) {
  let username = request.body.username;
  let password = request.body.password;
  let permissionID ;
  if(username != 'admin'){
    permissionID=1
  }
  else permissionID=2
console.log(permissionID)

  if (username && password) {
    database.query(
      `SELECT * FROM user WHERE username = ? AND password = ? AND permisionID =?`,
      [username, password,permissionID],
      function (error, results) {console.log(results)
        if (error) throw error;
        if (results.length > 0) {
          if(results.permisionID === permissionID)
          return response.json('Admin');
        else 
        return response.json('User');

         
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
