const express = require("express");
const database = require("../../database");
const router = express.Router();

router.get("/", function (request, response) {
  database.query('SELECT * FROM dky_phong ', [], function (error, results) {
    if (error) throw error;
    const result = results.map((dky_phong) => {
      return {
        id: dky_phong.id,
        ngdk: dky_phong.ngdky,
        maydk: dky_phong.maydky,
        tgbd: dky_phong.tg_bd,
        tgkt: dky_phong.tg_kt,
        trangthai:dky_phong.trang_thai,
        md:dky_phong.muc_dich,

      };
    });
    return response.json(result);
  });
});
router.patch("/:id", function (request, response) {
    const id = request.params.id;
    let ngdk = request.body.ngdk;
    let maydk = request.body.maydk;
    let tgbd = request.body.tgbd;
    let tgkt = request.body.tgkt;
    let md = request.body.md;
    let trangthai = request.body.trangthai;

  
    database.query(
      `UPDATE dky_phong SET ngdky = "${ngdk}", maydky = "${maydk}", tg_bd = "${tgbd}", tg_kt = "${tgkt}", muc_dich = "${md}", trang_thai = ${trangthai} WHERE id =${id}`,
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
      `select * from dky_phong where id =${id}`,
      [],
      function (error, result) {
        if (error) throw error;
        if(result.length>0)
        response.send(result[0]);
      
      }
    );
  });
  router.post("/create", function (request, response) {
    
    let ngdk = request.body.ngdk;
    let maydk = request.body.maydk;
    let tgbd = request.body.tgbd;
    let tgkt = request.body.tgkt;
    let md = request.body.md;
    let trangthai = request.body.trang_thai;
    database.query(
      `INSERT INTO dky_phong ( ngdky, maydky, tg_bd, tg_kt, muc_dich,trang_thai) VALUES ("${ngdk}", "${maydk}", "${tgbd}", "${tgkt}", "${md}", ${trangthai})`,
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
      `DELETE FROM dky_phong WHERE id = ${id};`,
      [],
      function (error, result) {
  
        if (error) throw error;
       return response.send("SUCCESS");
      }
    );
  });
module.exports = router;
