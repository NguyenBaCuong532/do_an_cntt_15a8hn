const express = require("express");
const database = require("../../database");
const router = express.Router();

router.post("/", function (request, response) {
  let username = request.body.username;
  let password = request.body.password;

  if (username && password) {
    database.query(
      `SELECT * FROM user WHERE username = ? AND password = ?`,
      [username, password],
      function (error, results) {
        if (error) throw error;
        
        if (results.length > 0) {
          let result ={
            username:results[0].username,
            permissionID:results[0].permisionID,
            id:results[0].maGV

            
          }
          return response.json({
            status: true,
            data: result,
            massage: "Success",
          });
        } else {
          return response.json({
            status: false,
            message: "Sai Tài Khoản Hoặc Mật Khẩu",
          });
        }
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

module.exports = router;
