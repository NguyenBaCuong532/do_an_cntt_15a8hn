import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddIcon from '@mui/icons-material/Add';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
import { User } from './user';
import { Link } from 'react-router-dom';

const QuanLyTaiKhoan = (user) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [khoa, setKhoa] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/user', { params: { fullname, email ,khoa} })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get('http://localhost:4000/user')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
 
  return (


   
    <AdminLayout>
      <div className="qlpm-container">
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Tài Khoản
        </h3>
        <form
          className="table-user flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <h2 className="form-search font-bold text-[1.35rem] py-[1.25rem]">
            Form Tìm Kiếm
          </h2>
          <table>
            <tr>
              <td>
                <input
                  className="user-ht"
                  type="text"
                  placeholder="Tìm Kiếm Theo Họ Tên"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </td>
              <td>
                <input
                  className="user-ht mr-[9px]"
                  type="text"
                  placeholder="Tìm Kiếm Theo Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <button className="luu" type="submit">
                    <SearchIcon className=" mr-1" />
                    Tìm Kiếm
                  </button>
                  <button className="reset" type="reset">
                    <RestartAltIcon />
                    ReSet
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </form>
        <button className="form-tao !ml-[60px]">
          <Link to={`/quanlitaikhoan/themuser`}>
            <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
            Tạo Mới
          </Link>
        </button>
        <div className="table-cauhinh flex flex-row gap-6 flex-wrap">
          {data.map((user, index) => {
            return <User key={index} user={user} getData={getData} />;
          })}
        </div>
      </div>
    
    </AdminLayout>
   
  );
};

export default QuanLyTaiKhoan;
