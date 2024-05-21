import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AdbIcon from '@mui/icons-material/Adb';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
function AdminLayout(props) {
  return (
    <div className="admin-container ">
      <nav className="side-nav fixed" >
        <h2 className="text-white font-bold"><SupervisorAccountIcon className="!text-[#11f505] !w-20 !h-20 mr-4 mb-5" />ADMIN</h2>
        <ul>
          <li>
            
            <Link to="/quanlitaikhoan"><PersonIcon className="!w-10 !h-10" />Quản Lý Tài Khoản </Link>
          </li>
          <li>
            <ComputerIcon className="!text-[#fff] !w-10 !h-10" />
            <Link to="/quanliphongmay">Quản Lý Phòng Máy</Link>
          </li>
          <li>
            <DeveloperBoardIcon className="!text-[#fff] !w-10 !h-10" />
            <Link to="/quanlithietbi">Quản Lý Thiết Bị</Link>
          </li>

          <li>
            <AdbIcon className="!text-[#fff] !w-10 !h-10" />
            <Link to="/quanlicauhinh">Quản Lý Cấu Hình</Link>
          </li>
          <li>
            <ImportantDevicesIcon className="!text-[#fff] !w-10 !h-10" />
            <Link to="/quanlimay">Quản Lý Đăng Kí Máy</Link>
          </li>
          <li>
            <FindReplaceIcon className="!text-[#fff] !w-10 !h-10" />
            <Link to="/quanligiaovien">Quản Lý Giáo Viên</Link>
          </li>
        </ul>
      </nav>
      <main className=" pl-[350px] min-h-[100vh]">{props.children}</main>
    </div>
  );
}
export default AdminLayout;
