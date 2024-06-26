import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/auth', { username, password })
      .then((res) => {
        console.log(res);
        if (res.data.status && res.data.data) {

          sessionStorage.setItem('account', JSON.stringify(res.data.data));
          if(res.data.data.permissionID == 2){

            navigate('/quanlitaikhoan');
          }
          else{
            console.log(123)
            navigate('/adminbooking')
          }
        } else {
          console.log(res);
          alert('Thông Tin Tài Khoản Hoặc Mật Khẩu Ko Chính Xác');
        }
      })

      .catch((err) => console.log(err));
  }
  return (
    <div className="content">
      <h1 className="font-bold ">Quản Lí Phòng Máy Tính</h1>
      <div className="content-form !mt-10">
        <form onSubmit={handleSubmit} className="content-form1">
          <div className="content-form-login">
            <label htmlFor="text">Tên Đăng Nhập</label>
            <input
              type="text"
              placeholder="username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <PersonOutlineIcon className="user !text-[#fff] !w-9 !h-9 mt-1 mr-4" />
          </div>
          <div className="content-form-login">
            <label htmlFor="password">Mật Khẩu</label>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LockIcon className="user !text-[#fff] !w-7 !h-7 mt-2 mr-4" />
          </div>
          <button className="login">Login</button>
        </form>
        <p className="mt-10 text-center text-[#fff] size-.5">
          Don't have account?<a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
