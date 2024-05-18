import React from "react";
import { Link } from "react-router-dom";

import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
function Quanlicauhinh() {
  return (
    <div>
      <AdminLayout>
        <div className="container">
          <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">
            Quản Lý Cấu Hình
          </h3>
          <div className="table-cauhinh">
            <button className="form-tao">
              {" "}
              <Link to="/formtao">
                <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
                Tạo Mới
              </Link>
            </button>
            <table>
              <tr>
                <th>STT</th>
                <th>Mã Cấu Hình</th>
                <th>Loại Máy</th>
                <th>Hệ Điều Hành</th>
                <th>CPU</th>
                <th>RAM</th>
                <th>Ổ Cứng</th>
                <th>VGA</th>
                <th>Ghi Chú</th>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </table>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}

export default Quanlicauhinh;
