import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Editpm() {
  const [maphong, setMaphong] = useState('');
  const [tenphong, setTenphong] = useState('');
  const [loaiphong, setLoaiphong] = useState('');
  const [soluong, setSoluong] = useState('');
  const [khuvuc, setKhuvuc] = useState('');
  const [trangthai, setTrangthai] = useState('');
 
  const param = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/phongmay/${param.id}`, { 
          maphong,
          tenphong,
          loaiphong,
          soluong,
          khuvuc,
          trangthai,
        
      })
      .then((res) => {console.log(res);

      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4000/phongmay/${param.id}`)
      .then((res) => {
        setMaphong(res.data.ma_phong);
        setTenphong(res.data.ten_phong);
        setLoaiphong(res.data.loai_phong);
        setSoluong(res.data.so_luong);
        setKhuvuc(res.data.khu_vuc);
        setTrangthai(res.data.trang_thai);
        

      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Edit Phòng Máy
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="mp">Mã Phòng</label>
            <br />
            <input type="text" id="mp"
            disabled
             value={maphong}           
          
            />
            <br />
            <label htmlFor="tp">Tên Phòng</label>
            <br />
            <input type="text" id="tp"
             value={tenphong}           
             onChange={(e) => setTenphong(e.target.value)} />
            <br />
            <label htmlFor="lp">Loại Phòng</label>
            <br />
            <input type="text" id="lp" 
             value={loaiphong}           
             onChange={(e) => setLoaiphong(e.target.value)}/>
            <br />
            <label htmlFor="lp">Số Lượng</label>
            <br />
            <input type="text" id="lp" 
             value={soluong}           
             onChange={(e) => setSoluong(e.target.value)}/>
            <br />
            <label htmlFor="khuvuc">Khu Vực</label>
            <br />
            <input type="text" id="khuvuc" 
             value={khuvuc}           
             onChange={(e) => setKhuvuc(e.target.value)}/>
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
              <h3>Trạng Thái</h3>

              <table>
                <td>
                  <select className="chon" onChange={(e) => setTrangthai(e.target.value)}>
                    <option selected disabled>
                      Trạng thái hoạt động
                    </option>
                    <option value="Đang sử dụng">Đang sử dụng</option>
                    <option value="Chưa sử dụng">Chưa sử dụng</option>
                  </select>
                </td>
              </table>
            </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}

export default Editpm;
