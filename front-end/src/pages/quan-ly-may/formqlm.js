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
        setMaydk(res.data.maydk);
        setMaydk(res.data.td_bd);
        setMaydk(res.data.tg_kt);
        setMaydk(res.data.md);

      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Edit Máy
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
              value={setTgkt}
              onChange={(e) => setTgkt(e.target.value)}
            />
            <br />
            <label htmlFor="lp">Mục Đích</label>
            <br />
            <input
              type="text"
              id="lp"
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
