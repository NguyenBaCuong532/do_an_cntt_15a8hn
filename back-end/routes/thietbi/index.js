// const express = require("express");
// const database = require("../../database");
// const router = express.Router();

// router.get("/", function (request, response) {
//   const query = request.query;
//   let tentb = query.tentb;
//   let matb = query.matb;
//   let soluong = query.soluong;
//   let nhasx = query.nhasx;
//   let namsx = query.namsx;
//   let thongso = query.thongso;

// //lấy
//   let sql = "SELECT * FROM thiet_bi";
//   const whereSql = [];
//   if (tentb) {
//     whereSql.push(`thiet_bi.ten_may_ht LIKE '%${tentb}%'`);
//   }
//   if (matb) {
//     whereSql.push(`thiet_bi.ten_may_cn LIKE '%${matb}%'`);
//   }
//   if (soluong) {
//     whereSql.push(`thiet_bi.so_luong LIKE '%${soluong}%'`);
//   }
//   if (nhasx) {
//     whereSql.push(`thiet_bi.nha_sx LIKE '%${nhasx}%'`);
//   }
//   if (namsx) {
//     whereSql.push(`thiet_bi.nam_sx LIKE '%${namsx}%'`);
//   }
//   if (thongso) {
//     whereSql.push(`thiet_bi.thong_so LIKE '%${thongso}%'`);
//   }

//   if (whereSql.length > 0) {
//     sql += " WHERE " + whereSql.join(" AND ");
//   } else {
    
//   }
// database.query(sql, [], function (error, results) {
//     if (error) throw error;
//     const result = results.map((thiet_bi) => {
//       return {
//         id: thiet_bi.id,
//         tentb: thiet_bi.ten_tb,
//         matb: thiet_bi.ma_tb,
//         soluong: thiet_bi.so_luong,
//         nhasx: thiet_bi.nha_sx,
//         namsx: thiet_bi.nam_sx,
//         thongso: thiet_bi.thong_so,
//       };
//     });
//     return response.json(result);
//   });
// });
// //sưa
// router.patch("/:id", function (request, response) {
//     const id = request.params.id;
//     let tentb = request.body.tentb;
//     let matb = request.body.matb;
//     let soluong = request.body.soluong;
//     let nhasx = request.body.nhasx;
//     let namsx = request.body.namsx;
//     let thongso = request.body.thongso;
  
//     database.query(
//       `UPDATE thiet_bi SET ten_tb = "${tentb}", ma_tb = "${matb}", nha_sx = "${nhasx}", so_luong = "${soluong}", nam_sx = "${namsx}", thong_so = "${thongso}" WHERE id =${id}`,
//       [],
//       function (error, result) {
//         if (error) throw error;
//         response.send("SUCCESS");
//         response.end();
//       }
//     );
//   });
//   //lây theo id
//   router.get("/:id", function (request, response) {
//     const id = request.params.id;
//     database.query(
//       `select * from thiet_bi where id ="${id}"`,
//       [],
//       function (error, result) {
//         if (error) throw error;
//         if(result.length>0)
//         response.send(result[0]);
      
//       }
//     );
//   });
//   //them
//   router.post("/create", function (request, response) {
    
//     let tentb = request.body.tentb;
//     let matb = request.body.matb;
//     let soluong = request.body.soluong;
//     let nhasx = request.body.nhasx;
//     let namsx = request.body.namsx;
//     let thongso = request.body.thongso;
//     database.query(
//       `INSERT INTO thiet_bi ( ma_tb, ten_tb, so_luong, nha_sx, nam_sx, thong_so) VALUES ("${matb}", "${tentb}", "${soluong}", "${nhasx}", "${namsx}", "${thongso}")`,
//       [],
//       function (error, result) {
//         if (error) throw error;
//         console.log(result);
//         response.end();
//       }
//     );
//   });

//   //xoa
//   router.delete("/delete/:id", function (request, response) {
//     const id = request.params.id;
//     console.log(id)
//     database.query(
//       `DELETE FROM thiet_bi WHERE id = ${id};`,
//       [],
//       function (error, result) {
  
//         if (error) throw error;
//        return response.send("SUCCESS");
//       }
//     );
//   });
//   module.exports = router;