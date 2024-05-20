const express = require("express");
const database = require("../../database");
const router = express.Router();

router.get("/", function (request, response) {
  const query = request.query;
  let mach = query.mach;
  let loaimay = query.loaimay;
  let hdh = query.hdh;
  let cpu = query.cpu;
  let ram = query.ram;
  let oc = query.oc;
  let vga = query.vga;
  let ghichu = query.ghichu;
  let sql = "SELECT * FROM cau_hinh";
  const whereSql = [];
  if (mach) {
    whereSql.push(`cau_hinh.ma_ch LIKE '%${mach}%'`);
  }
  if (loaimay) {
    whereSql.push(`cau_hinh.loai_may LIKE '%${loaimay}%'`);
  }
  if (hdh) {
    whereSql.push(`cau_hinh.he_dieu_hanh LIKE '%${hdh}%'`);
  }
  if (cpu) {
    whereSql.push(`cau_hinh.cpu LIKE '%${cpu}%'`);
  }
  if (ram) {
    whereSql.push(`cau_hinh.ram LIKE '%${ram}%'`);
  }
  if (oc) {
    whereSql.push(`cau_hinh.o_cung LIKE '%${oc}%'`);
  }
  if (vga) {
    whereSql.push(`cau_hinh.vga LIKE '%${vga}%'`);
  }
  if (ghichu) {
    whereSql.push(`cau_hinh.ghi_chu LIKE '%${ghichu}%'`);
  }
  if (whereSql.length > 0) {
    sql += " WHERE " + whereSql.join(" AND ");
  } else {   
  }
database.query(sql, [], function (error, results) {
    if (error) throw error;
    const result = results.map((cau_hinh) => {
      return {
        id:cau_hinh.id,
        mach: cau_hinh.ma_ch,
        loaimay: cau_hinh.loai_may,
        hdh: cau_hinh.he_dieu_hanh,
        cpu: cau_hinh.cpu,
        ram: cau_hinh.ram,
        oc: cau_hinh.o_cung,
        vga: cau_hinh.vga,
        ghichu: cau_hinh.ghi_chu,


      };
    });
    return response.json(result);
    
  });
});
router.post("/create", function (request, response) {
    
  let mach = request.body.mach;
  let loaimay = request.body.loaimay;
  let hdh = request.body.hdh;
  let cpu = request.body.cpu;
  let ram = request.body.ram;
  let oc = request.body.oc;
  let vga = request.body.vga;
  let ghichu = request.body.ghichu;

  database.query(
    `INSERT INTO cau_hinh ( ma_ch, loai_may, he_dieu_hanh, cpu, ram, o_cung,vga,ghi_chu) VALUES ("${mach}", "${loaimay}", "${hdh}", "${cpu}", "${ram}", "${oc}", "${vga}", "${ghichu}")`,
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
    `DELETE FROM cau_hinh WHERE id = ${id};`,
    [],
    function (error, result) {

      if (error) throw error;
     return response.send("SUCCESS");
    }
  );
});
router.patch("/:id", function (request, response) {
  const id = request.params.id;
  let mach = request.body.mach;
  let loaimay = request.body.loaimay;
  let hdh = request.body.hdh;
  let cpu = request.body.cpu;
  let ram = request.body.ram;
  let oc = request.body.oc;
  let vga = request.body.vga;

  database.query(
    `UPDATE cau_hinh SET ma_ch = "${mach}", loai_may = "${loaimay}", he_dieu_hanh = "${hdh}", cpu = "${cpu}", ram = "${ram}", o_cung = "${oc}", vga = "${vga}" WHERE id =${id}`,
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
    `select * from cau_hinh where id =${id}`,
    [],
    function (error, result) {
      if (error) throw error;
      if(result.length>0)
      response.send(result[0]);
    
    }
  );
});
  module.exports = router;