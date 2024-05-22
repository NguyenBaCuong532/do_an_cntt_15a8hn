import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import React, { useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
import Alert from '@mui/material/Alert';
function Themuser(user) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [khoa, setKhoa] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/user/create', {
        name,
        password,
        email,
        fullname,
        khoa,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      
      <AdminLayout>
        <h3 className="text-center text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Thêm Tài Khoản
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
              type="password"
              id="tp"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email </label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="gv">Tên Giáo Viên </label>
            <br />
            <input
              type="text"
              id="gv"
              onChange={(e) => setFullname(e.target.value)}
            />
            <br />
            <label htmlFor="k">Khoa </label>
            <br />
            <input
              type="text"
              id="k"
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
              </button><br/>
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
}

export default Themuser;
