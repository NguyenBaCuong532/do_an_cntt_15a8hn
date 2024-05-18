import React from "react";

import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import { Link } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ComputerIcon from "@mui/icons-material/Computer";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PersonIcon from "@mui/icons-material/Person";

const QuanLyTaiKhoan = () => {
  return (
    <AdminLayout>
      <div className="qlpm-container ">
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Tài Khoản
        </p>
        <div className="table-search flex flex-col gap-2">
          <h2 className="form-search font-bold text-[1.35rem] py-[1.25rem]">
            Form Tìm Kiếm
          </h2>
          <table>
            <tr>
              <td>
                <input type="text" placeholder="Tìm Kiếm Theo Họ Tên" />
              </td>
              <td>
                <input type="text" placeholder="Tìm Kiếm Theo Email" />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <button className="luu">
                    <SearchIcon className=" mr-1" />
                    Tìm Kiếm
                  </button>
                  <button className="reset">
                    <RestartAltIcon className=" mr-1" />
                    Reset
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="table-cauhinh">
          <div className="infor-tb">
            <table>
              <tr>
                <button
                  className="bg-gradient-to-r from-green-400 to-green-600 text-[#ffffff] 
               !w-60 !h-40 mt-6 rounded-lg 
               "
             >
                  <PersonIcon className=" !w-20 !h-20 " />
                  <p className=" font-bold">User 02</p>
                  <button>
                    {" "}
                    <Link to="/formtaopm">
                      <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
                    </Link>
                  </button>
                  <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1" />
                </button>
              </tr>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default QuanLyTaiKhoan;
