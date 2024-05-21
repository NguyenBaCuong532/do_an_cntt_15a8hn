import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './index.css';
import axios from 'axios';
function Themmay() {
    const [ngdk, setNgdk] = useState('');
    const [maydk, setMaydk] = useState('');
    const [tgbd, setTgbd] = useState('');
    const [tgkt, setTgkt] = useState('');
    const [md, setMd] = useState('');
    const [trangthai, setTrangthai] = useState(0);

  
  
  
    function handleSubmit(event) {
      event.preventDefault();
      axios
        .post('http://localhost:4000/qlmay/create', {
            ngdk,
            maydk,
            tgbd,
            tgkt,
            md,
            trang_thai:trangthai,
          
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  console.log(trangthai)
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Thêm Máy Đăng Ký
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="mp">Tên Người Đăng Ký</label>
            <br />
            <input
              type="text"
              id="mp"
              value={ngdk}
              onChange={(e) => setNgdk(e.target.value)}
            />
            <br />
            <label htmlFor="tp">Tên Máy Đăng Ký</label>
            <br />
            <input
              type="text"
              id="tp"
              value={maydk}
              onChange={(e) => setMaydk(e.target.value)}
            />
            <br />
            <label htmlFor="lp">Thời Gian Bắt Đầu</label>
            <br />
            <input type="text" id="lp"
            value={tgbd}
            onChange={(e) => setTgbd(e.target.value)} />
            <br />
            <label htmlFor="khuvuc">Thời Gian Kết Thúc</label>
            <br />
            <input type="text" id="khuvuc" 
            value={tgkt}
            onChange={(e) => setTgkt(e.target.value)}/>
            <br />
            <label htmlFor="khuvuc">Mục Đích</label>
            <br />
            <input type="text" id="khuvuc" 
            value={md}
            onChange={(e) => setMd(e.target.value)}/>
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
            <td>
            <select
                  className="chon mt-5"
                  onChange={(e) => setTrangthai(e.target.value)}
                >
                  <option>Trạng thái hoạt động</option>
                  <option value="Đang sử dụng">Đang sử dụng</option>
                  <option value="Chưa sử dụng">Chưa sử dụng</option>
                </select>
                </td>        
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}

export default Themmay;
