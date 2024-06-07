// const express = require("express");
// const database = require("../../database");
// const router = express.Router();

// router.get("/", function (request, response) {
//   const query = request.query;
//   let search = query.search;

//   let sql = `SELECT * FROM giao_vien`;
//   if(search){
//     sql +=` where giao_vien.id LIKE "%${search}%" or giao_vien.ma_giao_vien LIKE "%${search}%" or giao_vien.ten_giao_vien LIKE "%${search}%" or giao_vien.avatar LIKE "%${search}%" or giao_vien.khoa LIKE "%${search}%"`;
//   }

// database.query(sql, [], function (error, results) {
//     if (error) throw error;
//     const result = results.map((giao_vien) => {
//       return {
//         id: giao_vien.id,
//         magv: giao_vien.ma_giao_vien,
//         tengv: giao_vien.ten_giao_vien,
//         avt: giao_vien.avatar,
//         khoa: giao_vien.khoa,

//       };
//     });
//     return response.json(result);
    
//   });


// });
// router.patch("/:id", function (request, response) {
//   const id = request.params.id;
//   let tengv = request.body.tengv;
//   let magv = request.body.magv;
//   let avt = request.body.avt;
//   let khoa = request.body.khoa;

//   database.query(
//     `UPDATE giao_vien SET ten_giao_vien = "${tengv}", ma_giao_vien = "${magv}", avatar="${avt}", khoa = "${khoa}" WHERE id =${id}`,
//     [],
//     function (error, result) {
//       if (error) throw error;
//       response.send("SUCCESS");
//       response.end();
//     }
//   );
// });
// router.delete("/delete/:id", function (request, response) {
//   const id = request.params.id;
//   database.query(
//     `DELETE FROM giao_vien WHERE id = ${id};`,
//     [],
//     function (error, result) {

//       if (error) throw error;
//      return response.send("SUCCESS");
//     }
//   );
// });
// router.get("/:id", function (request, response) {
//   const id = request.params.id;
//   database.query(
//     `select * from giao_vien where id =${id}`,
//     [],
//     function (error, result) {
//       if (error) throw error;
//       if(result.length>0)
//       response.send(result[0]);
    
//     }
//   );
// });
// router.post("/create", function (request, response) {
//   let tengv = request.body.tengv;
//   let magv = request.body.magv;
//   let avt = request.body.avt;
//   let khoa = request.body.khoa;
//   database.query(
//     `INSERT INTO giao_vien ( ten_giao_vien, ma_giao_vien, avatar, khoa) VALUES ("${tengv}", "${magv}", "${avt}", "${khoa}")`,
//     [],
//     function (error, result) {
//       if (error) throw error;
//       console.log(result);
//       response.end();
//     }
//   );
// });
//   module.exports = router;