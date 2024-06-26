import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import React, { useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
export const Formtaopm = () => {
  const [maphong, setMaphong] = useState('');
  const [tenphong, setTenphong] = useState('');
  const [loaiphong, setLoaiphong] = useState('');
  const [khuvuc, setKhuvuc] = useState('');
  const [trangthai, setTrangthai] = useState('');
  const [soluong, setSoluong] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/phongmay/create', {
        maphong,
        tenphong,
        loaiphong,
        khuvuc,
        trangthai,
        soluong,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Thêm Phòng Máy
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="mp">Mã Phòng</label>
            <br />
            <input
              type="text"
              id="mp"
              onChange={(e) => setMaphong(e.target.value)}
            />
            <br />
            <label htmlFor="tp">Tên Phòng</label>
            <br />
            <input
              type="text"
              id="tp"
              onChange={(e) => setTenphong(e.target.value)}
            />
            <br />

            <label htmlFor="sl">Số Lượng</label>
            <br />
            <input
              type="text"
              id="sl"
              onChange={(e) => setSoluong(e.target.value)}
            />
            <br />
            <div className="table-user1">
              <table>
                <tr>
                  <td>
                    <select
                      className="chon"
                      onChange={(e) => setLoaiphong(e.target.value)}
                    >
                      <option selected disabled>
                        Chọn loại phòng
                      </option>
                      <option value="Phòng cấu hình cao">
                        Phòng cấu hình cao
                      </option>
                      <option value="Phòng cấu hình thường">
                        Phòng cấu hình thường
                      </option>
                    </select>
                  </td>
                  <td>
                    {' '}
                    <select
                      className="chon"
                      onChange={(e) => setKhuvuc(e.target.value)}
                    >
                      <option selected value="Chọn khu vực">
                        Chọn khu vực
                      </option>
                      <option value="Khu vực 1">Khu vực 1</option>
                      <option value="Khu vực 2">Khu vực 2</option>
                      <option value="Khu vực 3">Khu vực 3</option>
                      <option value="Khu vực 4">Khu vực 4</option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="infor1">
            <h2>Xuất Dữ Liệu</h2>
            <div className=" flex justify-center">
              <button className="luu" type="submit">
                <AddTaskIcon className=" mr-1" />
                Lưu Dữ Liệu
              </button>
              <button className="reset" type="reset">
                <RestartAltIcon className=" mr-1" />
                Reset
              </button>
            </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
};
