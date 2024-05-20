import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AdminLayout from "../../components/layout/adminlayout";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";
import "./index.css";
import { Cauhinh } from "./cauhinh";
import axios from "axios";


function Quanlicauhinh({ch}) {
    const [mach, setMach] = useState('');
    const [loaimay, setLoaimay] = useState('');
    const [hdh, setHdh] = useState('');
    const [cpu, setCpu] = useState('');
    const [ram, setRam] = useState('');
    const [oc, setOc] = useState('');
    const [vga, setVga] = useState('');
    const [ghichu, setGhichu] = useState([]);
  
    const [data, setData] = useState([]);

    function handleSubmit(event) {
      event.preventDefault();
      axios
        .get('http://localhost:4000/cauhinh', { params: { mach,
        loaimay,
        hdh,
        cpu,
        ram,
        oc,
        vga,
        ghichu,} })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
      getData();
    }, []);
    
    function getData(){
      axios
        .get('http://localhost:4000/cauhinh')
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  return (
    <div>
      <AdminLayout>
        <form className="container" onSubmit={handleSubmit}>
          <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">
            Quản Lý Cấu Hình
          </h3>
          <div className="table-cauhinh">
            <button className="form-tao">
              
              <Link to="/formtao">
                <AddIcon className="!text-[#edf0ed] !w-7 !h-7 mr-1 mb-1" />
                Tạo Mới
              </Link>
            </button>
            <table>
              <tr>
                <th>STT</th>
                <th>Mã Cấu Hình</th>
                <th>Loại Máy</th>
                <th>Hệ Điều Hành</th>
                <th>CPU</th>
                <th>RAM</th>
                <th>Ổ Cứng</th>
                <th>VGA</th>
                <th>Ghi Chú</th>
              </tr>
              {data.map((ch, index) => {
            return <Cauhinh key={index} ch={ch} />
          })}
            </table>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}

export default Quanlicauhinh;
