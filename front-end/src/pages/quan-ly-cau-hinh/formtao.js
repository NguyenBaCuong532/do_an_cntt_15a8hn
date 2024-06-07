import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import React, { useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
export const Formtao = () => {
  const [mach, setMach] = useState('');
  const [loaimay, setLoaimay] = useState('');
  const [hdh, setHdh] = useState('');
  const [cpu, setCpu] = useState('');
  const [ram, setRam] = useState('');
  const [oc, setOc] = useState('');
  const [vga, setVga] = useState('');
  const [ghichu, setGhichu] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/cauhinh/create', {
        mach,
        loaimay,
        hdh,
        cpu,
        ram,
        oc,
        vga,
        ghichu,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Thêm Cấu Hình
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="ma-cauhinh">Mã Cấu Hình</label>
            <br />
            <input
              type="text"
              id="ma-cauhinh"
              onChange={(e) => setMach(e.target.value)}
            />
            <br />
            <label htmlFor="ma-lm">Loại Máy</label>
            <br />
            <input
              type="text"
              id="ma-lm"
              onChange={(e) => setLoaimay(e.target.value)}
            />
            <br />
            <label htmlFor="ma-hdh">Hệ Điều Hành</label>
            <br />
            <input
              type="text"
              id="ma-hdh"
              onChange={(e) => setHdh(e.target.value)}
            />
            <br />
          </div>
          <div className="infor1">
            <h2>Xuất Dữ Liệu</h2>
            <div className=" flex justify-center">
              <button className="luu">
                <AddTaskIcon className=" mr-1" />
                Lưu Dữ Liệu
              </button>
              <button className="reset">
                <RestartAltIcon className=" mr-1" />
                Reset
              </button>
            </div>
            <div>
              <label>CPU</label>
              <br />
              <input onChange={(e) => setCpu(e.target.value)} />
              <br />
              <label>RAM</label>
              <br />
              <input onChange={(e) => setRam(e.target.value)} />
              <br />
              <label>Ổ Cứng</label>
              <br />
              <input onChange={(e) => setOc(e.target.value)} />
              <br />
              <label>VGA</label>
              <br />
              <input onChange={(e) => setVga(e.target.value)} />
              <br />
            </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
};
