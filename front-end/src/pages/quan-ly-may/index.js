import React from "react";

import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ComputerIcon from "@mui/icons-material/Computer";
import VisibilityIcon from "@mui/icons-material/Visibility";
const QuanLyMay = () => {
  return (
    <AdminLayout>
      <div className="qlpm-container ">
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Máy
        </p>
        <div className="table-search-m flex flex-col gap-2 mt-4">
          <h2 className="form-search font-bold text-[1.35rem] py-[1.25rem]">
            Thông Tin Phòng Máy
          </h2>
          <table>
            <tr>
              <td>
                <label>Mã Phòng :</label>
              </td>
              <td>
                <label>Khu Vực :</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Tên Phòng :</label>
              </td>
              <td>
                <label>Trạng Thái :</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Loại Phòng :</label>
              </td>
              <td>
                <label>Ngày Tạo :</label>
              </td>
            </tr>
          </table>
        </div>
        <div className="table-cauhinh">
          <button className="form-tao">
            <Link to="/formqlm">
              <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
              Tạo Mới
            </Link>
          </button>
          <div className="infor-tb">
            <table>
              <tr>
                <button
                  className="bg-gradient-to-r from-green-400 to-green-600 text-[#ffffff] 
               !w-60 !h-40 mt-6 rounded-lg 
               "
                >
                  <ComputerIcon className=" !w-20 !h-20 " />
                  <p className=" font-bold">Máy 02</p>
                  <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
                  <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1" />
                  <VisibilityIcon className=" ml-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg !w-8 !h-8 py-1" />
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

export default QuanLyMay;
