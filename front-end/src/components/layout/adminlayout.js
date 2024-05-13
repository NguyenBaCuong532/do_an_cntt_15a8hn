import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function AdminLayout(props) {
  return (
    <div className="">
      <nav className="side-nav">
        <h2>ADMIN</h2>
        <ul>
          <li>
            <Link to="/bangdieukhien">Bảng điều khiển</Link>
          </li>
          <li>
            <Link to="/quanlikhuvuc">Quản lí khu vực</Link>
          </li>
          <li>
            <Link to="/quanliphongmay">Quản lí phòng máy</Link>
          </li>

          <li>
            <Link to="/quanlicauhinh">Quản lí cấu hình</Link>
          </li>
          <li>
            <Link to="/quanlimonhoc">Quản lí môn học</Link>
          </li>
          <li>
            <Link to="/quanligiaovien">Quản lí giáo viên</Link>
          </li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </div>
  );
}
export default AdminLayout;
