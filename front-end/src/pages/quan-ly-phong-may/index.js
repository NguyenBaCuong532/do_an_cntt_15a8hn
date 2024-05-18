import React from "react";

import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const QuanLyPhongMay = () => {
  return (
    <AdminLayout>
      <div className="qlpm-container ">
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Phòng Máy
        </p>
        <div className="table-search flex flex-col gap-2">
          <h2 className="form-search font-bold text-[1.35rem] py-[1.25rem]">
            Form Tìm Kiếm
          </h2>
          <table>
            <tr>
              <td>
                <input type="text" placeholder="Mã Phòng" />
              </td>
              <td>
                <input type="text" placeholder="Tên Phòng" />
              </td>
              <td>
                <div className="select">
                  <select className="chon">
                    <option selected disabled>
                      Chọn loại phòng
                    </option>
                    <option value="1">Phòng cấu hình cao</option>
                    <option value="2">Phòng cấu hình thường</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <select className="chon">
                  <option selected disabled>
                    Chọn khu vực
                  </option>
                  <option value="">Khu vực 1</option>
                  <option value="">Khu vực 2</option>
                  <option value="">Khu vực 3</option>
                  <option value="">Khu vực 4</option>
                </select>
              </td>
              <td>
                <select className="chon">
                  <option selected disabled>
                    Trạng thái hoạt động
                  </option>
                  <option value="">Đang sử dụng</option>
                  <option value="">Chưa sử dụng</option>
                </select>
              </td>
              <td>
                <div>
                  <button className="luu">Tìm Kiếm</button>
                  <button className="reset">Reset</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="table-cauhinh">
          <button className="form-tao">
            <Link to="/formtaopm">
              <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
              Tạo Mới
            </Link>
          </button>
          <table>
            <tr>
              <th>STT</th>
              <th>Mã Phòng</th>
              <th>Loại Phòng</th>
              <th>Số Lượng Máy</th>
              <th>Khu Vực</th>
              <th>Trạng Thái</th>
              <th>Thay Đổi</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>
                <button>
                  <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg text-[#ffffff] " />
                </button>
                <button>
                  <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1 text-[#ffffff] " />
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default QuanLyPhongMay;
