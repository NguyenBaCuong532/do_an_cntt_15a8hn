const express = require("express");
const database = require("../../database");
const router = express.Router();

router.get("/", function (request, response) {
  const query = request.query;
  let search = query.search;

  let sql = `SELECT * FROM ls_sua_doi`;
  if(search){
    sql +=`  where ls_sua_doi.id=${search} or ls_sua_doi.ten_may_ht LIKE "% ${search}%" or ls_sua_doi.ten_may_cn LIKE "%${search}%" or ls_sua_doi.cau_hinh LIKE "%${search}%" or ls_sua_doi.ngay LIKE '%${search}%' or ls_sua_doi.ghi_chu LIKE '%${search}%'`;
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

  module.exports = router;