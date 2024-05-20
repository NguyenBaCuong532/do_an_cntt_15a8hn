import React, { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';

import axios from 'axios';
import { May } from './may';

const QuanLyMay = (cpt) => {
  const [maydk, setMaydk] = useState('');
  const [ngdk, setNgky] = useState('');
  


  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/qlmay', { params: { maydk, ngdk} })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);
  
  function getData(){
    axios
      .get('http://localhost:4000/qlmay')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  
  return (
    <AdminLayout>
      <form className="qlpm-container " onSubmit={handleSubmit}>
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Đăng Ký Máy
        </p>
        <div className="table-search-m flex flex-col gap-2 mt-4">
          <h2 className="form-search font-bold text-[1.35rem] py-[1.25rem]">
            Thông Tin Phòng Máy Đăng Ký
          </h2>
          <table>
            <div className="infor-tb1 flex justify-center !w-[500px] !h-[100px]">
              <button className="luu">
                <AddTaskIcon className=" mr-1" />
                Đã Đăng Ký
              </button>
              <button className="reset !w-[200px]" type="reset">
                <ClearIcon className=" mr-1" />
                Chưa Đăng Ký
              </button>
            </div>
          </table>
        </div>
        <div className="table-cauhinh">
          <button className="form-tao">
            <Link to="/quanlimay/themmay">
              <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
              Tạo Mới
            </Link>
          </button>
          <div className="infor-tb flex flex-row gap-6 flex-wrap">
            {data.map((cpt, index) => {
              return <May key={index} cpt={cpt} getData={getData}/>;
            })}
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default QuanLyMay;
