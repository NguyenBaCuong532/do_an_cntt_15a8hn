import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Formqlm() {
  const [ngdk, setNgdk] = useState('');
  const [maydk, setMaydk] = useState('');
  const [tgbd, setTgbd] = useState('');
  const [tgkt, setTgkt] = useState('');
  const [md, setMd] = useState('');
  const [trangthai, setTrangthai] = useState('');


  const param = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/qlmay/${param.id}`, {
        ngdk,
        maydk,
        tgbd,
        tgkt,
        md,
        trangthai,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4000/qlmay/${param.id}`)
      .then((res) => {
        setNgdk(res.data.ngdky);
        setMaydk(res.data.maydky);
        setTgbd(res.data.tg_bd);
        setTgkt(res.data.tg_kt);
        setMd(res.data.muc_dich);
        setTrangthai(res.data.trang_thai);


      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
         Sửa Phòng Đăng Ký
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="mp">Người Đăng Ký</label>
            <br />
            <input
              type="text"
              id="mp"
              value={ngdk}
              onChange={(e) => setNgdk(e.target.value)}
            />
            <br />
            <label htmlFor="tp">Máy Đăng Ký</label>
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
            <input
              type="text"
              id="lp"
              value={tgbd}
              onChange={(e) => setTgbd(e.target.value)}
            />
            <br />
            <label htmlFor="khuvuc">Thời Gian Kết Thúc</label>
            <br />
            <input
              type="text"
              id="khuvuc"
              value={tgkt}
              onChange={(e) => setTgkt(e.target.value)}
            />
            <br />
            <label htmlFor="md">Mục Đích</label>
            <br />
            <input
              type="text"
              id="md"
              value={md}
              onChange={(e) => setMd(e.target.value)}
            />
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
                <tr>
                  <td>
                    <select className="chon" value={trangthai}
              onChange={(e) => setTrangthai(e.target.value)}>
                      <option >
                        Trạng thái hoạt động
                      </option>
                      <option value="1">Đang sử dụng</option>
                      <option value="0">Chưa sử dụng</option>
                    </select>
                  </td>{' '}
              
                
                 
                </tr>
              </table>
            </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}

export default Formqlm;
