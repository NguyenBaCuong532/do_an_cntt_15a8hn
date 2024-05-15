import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/auth', {username, password})
      .then((res) => {
        console.log(res);
        if (res.data == 'Success') {
          navigate('/admin');
        } else {
          console.log(res);
          alert('Thông Tin Tài Khoản Hoặc Mật Khẩu Ko Chính Xác');
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className='content'>
      <h1>Quản Lí Phòng Máy Tính</h1>
      <div className='content-form'>
        <form onSubmit={handleSubmit} className='content-form1'>
          <div className='content-form-login'>
            <label htmlFor='text'>Tên Đăng Nhập</label>
            <input
              type='text'
              placeholder='username'
              className='form-control'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='content-form-login'>
            <label htmlFor='password'>Mật Khẩu</label>
            <input
              type='password'
              placeholder='password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='login'>Login</button>
          <p>
            Don't have account?<a href='#'>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;