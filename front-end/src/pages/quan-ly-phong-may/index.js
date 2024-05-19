import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './index.css';
import { Phongmay } from './phongmay';

const QuanLyPhongMay = () => {
  const [maphong, setMaphong] = useState('');
  const [tenphong, setTenphong] = useState('');
  const [loaiphong, setLoaiphong] = useState('');
  const [khuvuc, setKhuvuc] = useState('');
  const [trangthai, setTrangthai] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/phongmay', {
        params: {
          maphong,
          tenphong,
          loaiphong,
          khuvuc,
          trangthai,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get('http://localhost:4000/phongmay')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <AdminLayout>
      <form className="qlpm-container " onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  placeholder="Mã Phòng"
                  onChange={(e) => setMaphong(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Tên Phòng"
                  onChange={(e) => setTenphong(e.target.value)}
                />
              </td>
              <td>
                <div className="select" 
               
                >
                  <select className="chon"  onChange={(e) => setLoaiphong(e.target.value)}>
                    <option selected disabled>
                      Chọn loại phòng
                    </option>
                    <option value="Phòng cấu hình cao"  >Phòng cấu hình cao</option>
                    <option value="Phòng cấu hình thường" >Phòng cấu hình thường</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <select className="chon"  onChange={(e) => setKhuvuc(e.target.value)}>
                  <option selected disabled>
                    Chọn khu vực
                  </option>
                  <option value="Khu vực 1">Khu vực 1</option>
                  <option value="Khu vực 2">Khu vực 2</option>
                  <option value="Khu vực 3">Khu vực 3</option>
                  <option value="Khu vực 4">Khu vực 4</option>
                </select>
              </td>
              <td>
                <select className="chon"  onChange={(e) => setTrangthai(e.target.value)}>
                  <option selected disabled>
                    Trạng thái hoạt động
                  </option>
                  <option value="Đang sử dụng">Đang sử dụng</option>
                  <option value="Chưa sử dụng">Chưa sử dụng</option>
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
        <div>
          <div className="table-cauhinh">
            <button className="form-tao">
              <Link to='/formtaopm'>
                <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
                Tạo Mới
              </Link>
            </button>
            <table>
              <tr>
                <th>STT</th>
                <th>Tên Phòng</th>
                <th>Mã Phòng</th>
                <th>Loại Phòng</th>
                <th>Số Lượng Máy</th>
                <th>Khu Vực</th>
                <th>Trạng Thái</th>
                <th>Thay Đổi</th>
              </tr>
              {data.map((phong, index) => {
                return <Phongmay key={index} item={phong} />;
              })}
            </table>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default QuanLyPhongMay;
