import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
            
            <NavLink to="/quanlitaikhoan"><PersonIcon className="!w-10 !h-10" />Quản Lý Tài Khoản </NavLink>
          </li>
          <li>
            <ComputerIcon className="!text-[#fff] !w-10 !h-10" />
            <NavLink to="/quanliphongmay">Quản Lý Phòng Máy</NavLink>
          </li>
          <li>
            <DeveloperBoardIcon className="!text-[#fff] !w-10 !h-10" />
            <Link to="/quanlithietbi">Quản Lý Thiết Bị</Link>
          </li>

          <li>
            <AdbIcon className="!text-[#fff] !w-10 !h-10" />
            <NavLink to="/quanlicauhinh">Quản Lý Cấu Hình</NavLink>
          </li>
          <li>
            <ImportantDevicesIcon className="!text-[#fff] !w-10 !h-10" />
            <NavLink to="/quanlydkypm">Quản Lý Đăng Kí Máy</NavLink>
          </li>
          <li>
            <FindReplaceIcon className="!text-[#fff] !w-10 !h-10" />
            <NavLink to="/quanligiaovien">Quản Lý Giáo Viên</NavLink>
          </li>
        </ul>
     <button className=" mt-20 ml-20"   onClick={()=>{
        localStorage.removeItem('admin')
       }}> 
        <NavLink to='/'>Logout</NavLink>
       </button> 
      </nav> 
      <main className=" pl-[350px] min-h-[100vh]">{props.children}
      
      </main>
    </div>
  );
}
export default AdminLayout;
