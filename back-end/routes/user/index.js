const express = require("express");
const database = require("../../database");
const router = express.Router();

router.get("/", function (request, response) {
  const query = request.query;
  let email = query.email;
  let password = query.password;
  let name = query.name;
  let fullname = query.fullname;
  let khoa = query.khoa;

  let sql = "SELECT * FROM user";
  const whereSql = [];
  if (email) {
    whereSql.push(`user.email LIKE '%${email}%'`);
  }
  if (name) {
    whereSql.push(`user.name LIKE '%${name}%'`);
  }


  if (whereSql.length > 0) {
    sql += " WHERE " + whereSql.join(" AND ") + "and user.permision = 1";
  } else {
    sql += " where user.permision = 1";
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

router.patch("/:id", function (request, response) {
  const id = request.params.id;
  let name = request.body.name;
  let email = request.body.email;
  let password = request.body.password;
  let fullname = request.body.fullname;
  let khoa = request.body.khoa;

  database.query(
    `UPDATE user SET fullname = "${fullname}",name = "${name}",password = "${password}",khoa = "${khoa}", email = "${email}" WHERE id =${id}`,
    [],
    function (error, result) {
      if (error) throw error;
      response.send("SUCCESS");
      response.end();
    }
  );
});
router.get("/:id", function (request, response) {
  const id = request.params.id;
  database.query(
    `select * from user where id =${id}`,
    [],
    function (error, result) {
      if (error) throw error;
      if(result.length>0)
      response.send(result[0]);
    
    }
  );
});
router.post("/create", function (request, response) {
    
  let name = request.body.name;
  let email = request.body.email;
  let password = request.body.password;
  let fullname = request.body.fullname;
  let khoa = request.body.khoa;
  
  database.query(
    `INSERT INTO user ( name, password, email, fullname, khoa) VALUES ("${name}", "${password}", "${email}", "${fullname}", "${khoa}")`,
    [],
    function (error, result) {
      if (error) throw error;
      console.log(result);
      response.end();
    }
  );
});
router.delete("/delete/:id", function (request, response) {
  const id = request.params.id;
  database.query(
    `DELETE FROM user WHERE id = ${id};`,
    [],
    function (error, result) {

      if (error) throw error;
     return response.send("SUCCESS");
    }
  );
});
module.exports = router;
