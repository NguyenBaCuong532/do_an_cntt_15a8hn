const express = require("express");
const database = require("../../database");
const router = express.Router();

// router.get("/", function (request, response) {
//   database.query('SELECT * from user ', [], function (error, results) {
//     if (error) throw error;
//     const result = results.map((user) => {
//       return {
//         email: user.email,
//         magv: user.maGV,
//         tengv: user.tenGV,

//       };
//     });
//     return response.json(result);
//   });
// });

router.get("/", function (request, response) {
  let tenphong = request.query.tenphong;
  console.log(request.query.tenphong);
  //lấy
  let sql =
    "SELECT booking.ID ,booking.startTime,booking.ngay,booking.endTime,room.tenphong,room.maphong, user.tenGV, khoa.tenKhoa, monhoc.tenMH FROM booking   LEFT JOIN user ON user.maGV = booking.maGV  LEFT JOIN room ON booking.maphong = room.maphong  LEFT JOIN lop ON booking.maGV = lop.maGV LEFT JOIN khoa ON lop.maKhoa = khoa.maKhoa LEFT Join monhoc on monhoc.maMH =lop.maMH WHERE permisionID is not Null AND booking.startTime >=current_date()";
  const whereSql = [];
  if (tenphong) {
    whereSql.push(`room.tenphong LIKE '%${tenphong}%'`);
  }
  if (whereSql.length > 0) {
    sql += "AND " + whereSql.join(" AND ");
  } else {
  }
  database.query(sql, [], function (error, results) {
    if (error) throw error;
    const result = results.map((booking) => {
      return {
        // id: booking.id,
        // tengv: booking.tenGV,
        // tengv: booking.tenGV,
        // tenphong: booking.tenphong,
        // khoa: booking.tenKhoa,
        ...booking,
      };
     
    });

    return response.json(result);
  });

});
router.patch("/:id", function (request, response) {
  const id = request.params.id;
  let maphong = request.body.maphong;
  let khoa = request.body.khoa;
  let monhoc = request.body.monhoc;
  let tenphong = request.body.tenphong;
  let startTime = request.body.startTime;
  let endTime = request.body.endTime;
  let ngay = request.body.ngay;

  console.log(ngay);
  console.log(endTime);
  // database.query(
  //   `SET SQL_SAFE_UPDATES = 0`,
  //   [],
  //   function (error, result) {
  //     if (error) throw error;
  //     response.send("SUCCESS");
  //     response.end();
  //   }
  // );
  database.query(
    ` UPDATE booking INNER JOIN room ON booking.maphong = room.maphong SET booking.startTime =' ${startTime}',  booking.endTime = ' ${endTime}', room.tenphong = '${tenphong}', booking.ngay = '${ngay}' WHERE booking.maphong = "${maphong}";`,
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
    `SELECT booking.ID ,booking.startTime,booking.ngay,booking.endTime,room.tenphong,room.maphong, user.tenGV, khoa.tenKhoa, monhoc.tenMH FROM booking    LEFT JOIN user ON user.maGV = booking.maGV    LEFT JOIN room ON booking.maphong = room.maphong   LEFT JOIN lop ON booking.maGV = lop.maGV  LEFT JOIN khoa ON lop.maKhoa = khoa.maKhoa  LEFT Join monhoc on monhoc.maMH =lop.maMH WHERE booking.ID=${id} AND booking.startTime >=current_date() `,
    [],
    function (error, result) {
      if (error) throw error;
      if (result.length > 0) response.send(result[0]);
    }
  );
});
router.post("/create", function (request, response) {
  let magv = request.body.magv;
  let ngay = request.body.ngay;
  let tengv = request.body.tengv;
  let khoa = request.body.khoa;
  let monhoc = request.body.monhoc;
  let maphong = request.body.maphong;
  let tenphong = request.body.tenphong;
  let startTime = request.body.startTime;
  let endTime = request.body.endTime;
  console.log(startTime);
  // INSERT INTO booking ( maGV,maphong,startTime, endTime)  VALUES ( '${magv}','${maphong}','${startTime}', '${endTime}')
  database.query(
    `select * from booking where booking.startTime <= '${startTime}' and booking.endTime >= '${startTime}'`,
    [],
    function (error, result) {
      if (error) throw error;
      if (result.length > 0) {
        response.send({ status: false, message: "Có Đa Ta" });
      } else {
        database.query(
          ` INSERT INTO booking ( maGV,maphong,startTime, endTime,ngay)  VALUES ( '${magv}','${maphong}','${startTime}', '${endTime}', '${ngay}')`,
          [],
          function (error, result) {
            if (error) throw error;
            response.send("SUCCESS");
            response.end();
          }
        );
      }
      response.end();
    }
  );
});

//   router.delete("/delete/:id", function (request, response) {
//     const id = request.params.id;
//     database.query(
//       `DELETE FROM dky_phong WHERE id = ${id};`,
//       [],
//       function (error, result) {

//         if (error) throw error;
//        return response.send("SUCCESS");
//       }
//     );
//   });
module.exports = router;
