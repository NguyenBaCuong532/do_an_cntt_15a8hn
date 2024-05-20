import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import React, { useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
function Themuser() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [khoa, setKhoa] = useState('');

  const [trangthai, setTrangthai] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/user/create', {
        name,
        password,
        email,
        fullname,
        khoa
        
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <AdminLayout>
        <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Thêm Phòng Máy
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="mp">Tên Tài Khoản </label>
            <br />
            <input
              type="text"
              id="mp"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="tp">Mật Khẩu</label>
            <br />
            <input
              type="text"
              id="tp"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email </label>
            <br />
            <input
              type="email" id="email" name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><label htmlFor="mp">Tên Giáo Viên </label>
            <br />
            <input
              type="text"
              id="mp"
              onChange={(e) => setFullname(e.target.value)}
            />
            <br /><label htmlFor="mp">Khoa </label>
            <br />
            <input
              type="text"
              id="mp"
              onChange={(e) => setKhoa(e.target.value)}
            />
            <br />
            <div className="table-search !border-none !bg-none"></div>
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
            <div>
              <h3>Trạng Thái</h3>

              <table>
                <td>
             
                  <select className="chon" onChange={(e) => setTrangthai(e.target.value)} >
                    <option selected value=" Trạng thái hoạt động">
                      Trạng thái hoạt động
                    </option>
                    <option value="Đang sử dụng">Đang sử dụng</option>
                    <option value="Chưa sử dụng">Chưa sử dụng</option>
                  </select>
                </td>
              </table>
            </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}

export default Themuser;
