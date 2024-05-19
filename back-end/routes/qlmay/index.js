const express = require("express");
const database = require("../../database");
const router = express.Router();

router.get("/", function (request, response) {
  const query = request.query;
  let mamay = query.mamay;
  let tenmay = query.tenmay;
  let sql = "SELECT * FROM quan_ly_may";
  const whereSql = [];
  if (mamay) {
    whereSql.push(`quan_ly_may.ma_may LIKE '%${mamay}%'`);
  }
  if (tenmay) {
    whereSql.push(`quan_ly_may.ten_may LIKE '%${tenmay}%'`);
  }

  if (whereSql.length > 0) {
    sql += " WHERE " + whereSql.join(" AND ") ;
  } else {

  }

  database.query(sql, [], function (error, results) {
    if (error) throw error;
    const result = results.map((quan_ly_may) => {
      return {
        id: quan_ly_may.id,
        mamay: quan_ly_may.ma_may,
        tenmay: quan_ly_may.ten_may,
      };
    });
    return response.json(result);
  });
});
router.patch("/:id", function (request, response) {
    const id = request.params.id;
    let mamay = request.body.mamay;
    let tenmay = request.body.tenmay;
    database.query(
      `UPDATE quan_ly_may SET ma_may = "${mamay}", ten_may = "${tenmay}" WHERE id =${id}`,
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
      `select * from quan_ly_may where id =${id}`,
      [],
      function (error, result) {
        if (error) throw error;
        if(result.length>0)
        response.send(result[0]);
      
      }
    );
  });

module.exports = router;
