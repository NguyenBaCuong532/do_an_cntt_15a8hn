import React from "react";
import "./quanlitaikhoan.css";
import AdminLayout from "./layout/adminlayout";

function quanlitaikhoan() {
  return (
    <AdminLayout>
      <div className="bangdiekhien">
        <h3>Danh Sách Phòng Máy</h3>
        <div className="form">
          <div className="timkiem">
            <div>
              <h4>TÌM KIẾM</h4>
            </div>
            <div>
              <button className="tim1">Tìm Kiếm</button>
              <button className="tim2">Reset</button>
            </div>
          </div>
          <form className="search-form">
            <div className="search">
              <input  className="search-input" placeholder="Mã Phòng" />
              <input className="search-input" placeholder="Tên Phòng" />
              <select name="chonphong" id="">
                <option value="">Chọn loại phòng</option>
                <option value="">Phòng cấu hình cao</option>
                <option value="">Phòng cấu hình thường</option>
              </select>
            </div>
            <div className="select-form form1">
              <div className="search1">
                <select name="chonkhuvuc" id="">
                  <option value="">Chọn khu vực</option>
                  <option value="">Khu vực 1</option>
                  <option value="">Khu vực 2</option>
                  <option value="">Khu vực 3</option>
                  <option value="">Khu vực 4</option>
                </select>
                <select name="trangthai" id="">
                  <option value="">Trạng thái hoạt động</option>
                  <option value="">Đang sử dụng</option>
                  <option value="">Chưa sử dụng</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default quanlitaikhoan;
