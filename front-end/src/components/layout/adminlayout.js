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
            <Link to="/quanlitaikhoan">Quản Lí Tài Khoản</Link>
          </li>
          <li>
           <Link to="/quanliphongmay">Quản Lí Phòng Máy</Link>
          </li>
          <li>
             <Link to="/quanlithietbi">Quản Lí Thiết Bị</Link>
          </li>

          <li>
            <Link to="/quanlicauhinh">Quản Lí Cấu Hình</Link>
          </li>
          <li>
            <Link to="/quanlimay">Quản Lí Máy</Link>
          </li>
          <li>
            <Link to="/lichsusuadoi">Lịch Sử Sửa Đổi</Link>
          </li>
        </ul>
      </nav>
      <main>{props.children}</main>
    </div>
  );
}
export default AdminLayout;
