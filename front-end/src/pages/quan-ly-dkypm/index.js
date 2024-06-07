import React, { useEffect, useState } from 'react';

import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import { May } from './may';
import { Link } from 'react-router-dom';

const QuanLyDkypm = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [tenphong, setTenphong] = useState('');
  const [tengv, setTengv] = useState('');
  const [id, setId] = useState('');
  const [khoa, setKhoa] = useState('');
  const [monhoc, setMonhoc] = useState('');
  const [ngay, setNgay] = useState('');

  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/qldkymay', { params: {id,tenphong,tengv,khoa ,startTime,endTime,monhoc,ngay} })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);
  
  function getData(){
    axios
      .get('http://localhost:4000/qldkymay')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  
  return (
    <AdminLayout>
       <form className="container" onSubmit={handleSubmit}>
       
          <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
            Danh Sách Đăng Ký Phòng Máy
          </h3>
          <div className="table-cauhinh !mt-[20px]">
           
          <div className=' table-user1 flex flex'>
            
          
             
                <input
                  className="user-ht"
                  type="text"
                  placeholder="Tìm Kiếm Theo Phòng"
                  value={tenphong}
                  onChange={(e) => setTenphong(e.target.value)}
                />        
                <div className=' ml-[200px] mt-2'>
                  <button className="luu" type="submit">
                    <SearchIcon className=" mr-1" />
                    Tìm Kiếm
                  </button>
                  <button className="reset" type="reset">
                    <RestartAltIcon />
                    ReSet
                  </button>
                </div>                                             
          </div>
        
            <button className="form-tao">
              {' '}
              <Link to="/quanlydkypm/themmay">
                <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
                Tạo Mới
              </Link>
            </button>
            <table>
              <tr>
                          
                <th>Tên Giáo Viên</th>
                <th>Khoa</th>
                <th>Bộ Môn</th>
                <th>Phòng DK</th>
                <th>Ngày Tháng Năm</th>
                <th>Ca Sử Dụng</th>

                <th>Sửa Đổi</th>
              </tr>

              {data.map((dky, index) => {
                return (
                  <May key={index} dky={dky} getData={getData} />
                );
              })}
            </table>
          </div>
        </form>
    </AdminLayout>
  );
};

export default QuanLyDkypm;
