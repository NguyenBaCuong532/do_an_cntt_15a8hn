import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import React, { useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
import { User } from './user';

const QuanLyTaiKhoan = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/user', { params: { name, email } })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <AdminLayout>
      <div className="qlpm-container ">
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Tài Khoản
        </p>
        <form
          className="table-search flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <h2 className="form-search font-bold text-[1.35rem] py-[1.25rem]">
            Form Tìm Kiếm
          </h2>
          <table>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Tìm Kiếm Theo Họ Tên"
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Tìm Kiếm Theo Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <button className="luu">
                    <SearchIcon className=" mr-1" />
                    Tìm Kiếm
                  </button>
                  <input type="reset" className="reset"></input>
                </div>
              </td>
            </tr>
          </table>
        </form>
        <div className="table-cauhinh flex flex-row gap-6 flex-wrap" >
          {/* <User />
          <User /> */}
          {data.map((user,index)=>{
              return <User key={index} user={user}/>
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default QuanLyTaiKhoan;
