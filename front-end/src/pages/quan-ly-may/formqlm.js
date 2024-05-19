import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Formqlm() {
  const [mamay, setMamay] = useState('');
  const [tenmay, setTenmay] = useState('');

  const param = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/qlmay/${param.id}`, { mamay, tenmay })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4000/qlmay/${param.id}`)
      .then((res) => {
        setMamay(res.data.mamay);
        setTenmay(res.data.tenmay);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Quản Lý Phòng Máy
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="mp">Mã Máy</label>
            <br />
            <input
              type="text"
              id="mp"
              value={mamay}
              onChange={(e) => setMamay(e.target.value)}
            />
            <br />
            <label htmlFor="tp">Tên Máy</label>
            <br />
            <input
              type="text"
              id="tp"
              value={tenmay}
              onChange={(e) => setTenmay(e.target.value)}
            />
            <br />
            <label htmlFor="lp">Số Thứ Tự</label>
            <br />
            <input type="text" id="lp" />
            <br />
            <label htmlFor="khuvuc">Cấu Hình</label>
            <br />
            <input type="text" id="khuvuc" />
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
                <tr>
                  <td>
                    <select className="chon">
                      <option selected disabled>
                        Trạng thái hoạt động
                      </option>
                      <option value="">Đang sử dụng</option>
                      <option value="">Chưa sử dụng</option>
                    </select>
                  </td>{' '}
                </tr>
                <tr>
                  <td>
                    <h3 className=" mt-9"> Ngày Nhập</h3>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="date"></input>
                  </td>
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
