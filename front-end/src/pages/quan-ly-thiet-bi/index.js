import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import { Thietbi } from "./thietbi";
import AddIcon from "@mui/icons-material/Add";


function Quanlithietbi() {
    const [tentb, setTentb] = useState('');
    const [matb, setMatb] = useState('');
    const [soluong, Soluong] = useState('');
    const [nhasx, setNhasx] = useState('');
    const [namsx, setNamsx] = useState('');
    const [thongso, setThongso] = useState('');


    const [data, setData] = useState([]);
  
    function handleSubmit(event) {
      event.preventDefault();
      axios
        .get('http://localhost:4000/thietbi', { params: { tentb, matb,soluong,nhasx,namsx ,thongso} })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
      getData();
    }, []);
    
    function getData(){
      axios
        .get('http://localhost:4000/thietbi')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
      axios
        .get('http://localhost:4000/thietbi')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);

  return (
    <div>
      <AdminLayout>
        <form className="container" onSubmit={handleSubmit}>
          <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">
            Quản Lý Thiết Bị
          </h3>
          <div className="table-cauhinh">
            <button className="form-tao">
              {" "}
              <Link to="/quanlithietbi/formtaotb">
                <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
                Tạo Mới
              </Link>
            </button>
            <table>
              <tr>
                <th>STT</th>
                <th>Mã Thiết Bị</th>
                <th>Tên Thiết Bị</th>
                <th>Số Lượng</th>
                <th>Nhà Sản Xuất</th>
                <th>Năm Sản Xuất</th>
                <th>Thông Số</th>
                <th>Sửa Đổi</th>
              </tr>
             
              {data.map((thietbi, index) => {
            return <Thietbi key={index} thietbi={thietbi} getData={getData}/>;
          })}
                
               
              
            </table>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}
export default Quanlithietbi;
