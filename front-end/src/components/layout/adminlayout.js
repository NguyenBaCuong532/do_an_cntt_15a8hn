import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import PersonIcon from '@mui/icons-material/Person';

function AdminLayout(props) {
  return (
    <div className="admin-container">
      <nav className="side-nav bg-[#0E131F]" >
        <h2 className="text-white font-bold">ADMIN</h2>
        <ul>
          <li>
            <PersonIcon className="!text-[#fff] !w-10 !h-10"/>
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
