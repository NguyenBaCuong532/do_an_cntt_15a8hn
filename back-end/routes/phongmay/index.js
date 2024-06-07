// const express = require("express");
// const database = require("../../database");
// const router = express.Router();

// router.get("/", function (request, response) {
//   const query = request.query;
//   let maphong = query.maphong;
//   let tenphong = query.tenphong;
//   let trangthai = query.trangthai;
//   let khuvuc = query.khuvuc;
//   let loaiphong = query.loaiphong;

//   let sql = "SELECT * FROM phong_may";
//   const whereSql = [];
//   if (maphong) {
//     whereSql.push(`phong_may.ma_phong LIKE '%${maphong}%'`);
//   }
//   if (tenphong) {
//     whereSql.push(`phong_may.ten_phong LIKE '%${tenphong}%'`);
//   }
//   if (trangthai) {
//     whereSql.push(`phong_may.trang_thai LIKE '%${trangthai}%'`);
//   }
//   if (khuvuc) {
//     whereSql.push(`phong_may.khu_vuc LIKE '%${khuvuc}%'`);
//   }
//   if (loaiphong) {
//     whereSql.push(`phong_may.loai_phong LIKE '%${loaiphong}%'`);
//   }

//   if (whereSql.length > 0) {
//     sql += " WHERE " + whereSql.join(" AND ");
//   } else {
//   }

//   database.query(sql, [], function (error, results) {
//     if (error) throw error;
//     const result = results.map((phong_may) => {
//       return {
//         id: phong_may.id,
//         maphong: phong_may.ma_phong,
//         tenphong: phong_may.ten_phong,
//         loaiphong: phong_may.loai_phong,
//         khuvuc: phong_may.khu_vuc,
//         trangthai: phong_may.trang_thai,
//         soluong: phong_may.so_luong,
//       };
//     });
//     return response.json(result);
//   });
// });

// router.patch("/:id", function (request, response) {
//   const id = request.params.id;
//   let maphong = request.body.maphong;
//   let tenphong = request.body.tenphong;
//   let loaiphong = request.body.loaiphong;
//   let soluong = request.body.soluong;
//   let khuvuc = request.body.khuvuc;
//   let trangthai = request.body.trangthai;

//   database.query(
//     `UPDATE phong_may SET ma_phong = "${maphong}", ten_phong = "${tenphong}", loai_phong = "${loaiphong}", so_luong = "${soluong}", khu_vuc = "${khuvuc}", trang_thai = "${trangthai}" WHERE id =${id}`,
//     [],
//     function (error, result) {
//       if (error) throw error;
//       response.send("SUCCESS");
//       response.end();
//     }
//   );
// });
// router.get("/:id", function (request, response) {
//   const id = request.params.id;
//   database.query(
//     `select * from phong_may where id ="${id}"`,
//     [],
//     function (error, result) {
//       if (error) throw error;
//       if (result.length > 0) response.send(result[0]);
//     }
//   );
// });
// router.post("/create", function (request, response) {
//   let maphong = request.body.maphong;
//   let tenphong = request.body.tenphong;
//   let loaiphong = request.body.loaiphong;
//   let soluong = request.body.soluong;
//   let khuvuc = request.body.khuvuc;
//   let trangthai = request.body.trangthai;
//   database.query(
//     `INSERT INTO phong_may ( ma_phong, ten_phong, loai_phong, khu_vuc, trang_thai, so_luong) VALUES ("${maphong}", "${tenphong}", "${loaiphong}", "${khuvuc}", "${trangthai}", "${soluong}")`,
//     [],
//     function (error, result) {
//       if (error) throw error;
//       console.log(result);
//       response.end();
//     }
//   );
// });
// router.delete("/delete/:id", function (request, response) {
//   const id = request.params.id;
//   database.query(
//     `DELETE FROM phong_may WHERE id = ${id};`,
//     [],
//     function (error, result) {

//       if (error) throw error;
//      return response.send("SUCCESS");
//     }
//   );
// });
// module.exports = router;
