import React, { useEffect, useState } from "react";

import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ComputerIcon from "@mui/icons-material/Computer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { May } from "./may";
import axios from "axios";

const QuanLyMay = () => {
  const [mamay, setMamay] = useState('');
  const [tenmay, setTenmay] = useState('');
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/qlmay', { params: { mamay, tenmay } })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get('http://localhost:4000/qlmay')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <AdminLayout>
      <div className="qlpm-container ">
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Máy
        </p>
        <div className="table-search-m flex flex-col gap-2 mt-4">
          <h2 className="form-search font-bold text-[1.35rem] py-[1.25rem]">
            Thông Tin Phòng Máy
          </h2>
          <table>
            <tr>
              <td>
                <label>Mã Máy :</label>
              </td>
              <td>
                <label>Tên Máy :</label>
              </td>
            </tr>
            
           
          </table>
        </div>
        <div className="table-cauhinh">
          <button className="form-tao">
            <Link to="/formqlm">
              <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
              Tạo Mới
            </Link>
          </button>
          <div className="infor-tb flex flex-row gap-6 flex-wrap">
            
              {data.map((cpt, index) => {
            return <May key={index} cpt={cpt} />;
          })}
             
             
           
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default QuanLyMay;
