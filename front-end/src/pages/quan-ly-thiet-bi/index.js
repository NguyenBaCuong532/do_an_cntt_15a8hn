import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Quanlithietbi() {
  return (
    <div>
      <AdminLayout>
        <div className="container">
        <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">Quản Lý Thiết Bị</h3>
        <div className="table-cauhinh">
          <button className="form-tao">
            {" "}
            <Link to="/formtaotb"><AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1"/>Tạo Mới</Link>
          </button>
          <table>
            <tr>
              <th>STT</th>
              <th>Tên Thiêt Bị</th>
              <th>Số Lượng</th>
              <th>Nhà Sản Xuất</th>
              <th>Năm Sản Xuất</th>
              <th>Thông Số</th>
              <th>Sửa Đổi</th>
              
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              
              <td><button><BorderColorIcon className="!bg-[#0606ed] text-[#ffffff] !w-10 !h-9 mr-9 mt-1 py-1 rounded-lg"/></button>
              <button><DeleteForeverIcon className="!bg-[#ed0606] !text-[#ffffff] !w-10 !h-9 mt-1 mr-1 py-1 rounded-lg"/></button></td>
            </tr>
          </table>
        </div>
        </div>
      </AdminLayout>
    </div>
  )
}

export default Quanlithietbi;