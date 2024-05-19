const express = require("express");
const database = require("../../database");
const router = express.Router();

router.get("/", function (request, response) {
  const query = request.query;
  let tenmay = query.tenmay;
  let tenmaycn = query.tenmaycn;
  let cauhinh = query.cauhinh;
  let ngay = query.ngay;
  let ghichu = query.ghichu;

  let sql = "SELECT * FROM ls_sua_doi";
  const whereSql = [];
  if (tenmay) {
    whereSql.push(`ls_sua_doi.ten_may_ht LIKE '%${tenmay}%'`);
  }
  if (tenmaycn) {
    whereSql.push(`ls_sua_doi.ten_may_cn LIKE '%${tenmaycn}%'`);
  }
  if (cauhinh) {
    whereSql.push(`ls_sua_doi.cau_hinh LIKE '%${cauhinh}%'`);
  }
  if (ngay) {
    whereSql.push(`ls_sua_doi.ngay LIKE '%${ngay}%'`);
  }
  if (ghichu) {
    whereSql.push(`ls_sua_doi.ghi_chu LIKE '%${ghichu}%'`);
  }

  if (whereSql.length > 0) {
    sql += " WHERE " + whereSql.join(" AND ");
  } else {
    
  }

database.query(sql, [], function (error, results) {
    if (error) throw error;
    const result = results.map((ls_sua_doi) => {
      return {
        id: ls_sua_doi.id,
        tenmay: ls_sua_doi.ten_may_ht,
        tenmaycn: ls_sua_doi.ten_may_cn,
        cauhinh: ls_sua_doi.cau_hinh,
        ngay: ls_sua_doi.ngay,
        ghichu: ls_sua_doi.ghi_chu,

      };
    });
    return response.json(result);
    
  });

});
router.get("/:id", function (request, response) {
    const id = request.params.id;
    database.query(
      `select * from ls_sua_doi where id =${id}`,
      [],
      function (error, result) {
        if (error) throw error;
        if(result.length>0)
        response.send(result[0]);
      
      }
    );
  });
  module.exports = router;