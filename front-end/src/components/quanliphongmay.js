import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./layout/adminlayout";
import './quanliphongmay.css';
function Quanliphongmay() {
  const navigate= useNavigate();
  function createNew(){
    navigate("/");
  }
  return (
    <div >
      <AdminLayout>
        <div className="table-search">

      <h2 className="form-search">Form Tìm Kiếm</h2>

<table >
  
  <tr>
    <td><input /></td>
    <td><input /></td>
    <td><select className="chonphong" id="">
                <option value="">Chọn loại phòng</option>
                <option value="">Phòng cấu hình cao</option>
                <option value="">Phòng cấu hình thường</option>
              </select></td>
  </tr>
  <tr>
    <td> <select className="chonkhuvuc" id="">
                  <option value="">Chọn khu vực</option>
                  <option value="">Khu vực 1</option>
                  <option value="">Khu vực 2</option>
                  <option value="">Khu vực 3</option>
                  <option value="">Khu vực 4</option>
                </select>
               </td>
    <td> <select className="trangthai" id="">
                  <option value="">Trạng thái hoạt động</option>
                  <option value="">Đang sử dụng</option>
                  <option value="">Chưa sử dụng</option>
                </select></td>
    <td><div>
              <button className="tim1">Tìm Kiếm</button>
              <button className="tim2">Reset</button>
            </div></td>
  </tr>
</table>
        </div>
        <div className="table-search_1">
          <button onClick={createNew}>Tạo Mới</button>
      <table>
  <tr>
    <th>STT</th>
    <th>Mã Phòng</th>
    <th>Tên Phòng</th>
    <th>Loại Phòng</th>
    <th>Trạng Thái</th>
    <th>Hành Động</th>
   



  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4 </td>
    <td>5</td>
    <td>6</td>

  </tr>
</table>
      </div>
      </AdminLayout>
    </div>
  )
}

export default Quanliphongmay;