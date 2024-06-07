import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
export const Editthietbi = () => {
  const [tentb, setTentb] = useState('');
  const [matb, setMatb] = useState('');
  const [soluong, setSoluong] = useState('');
  const [nhasx, setNhasx] = useState('');
  const [namsx, setNamsx] = useState('');
  const [thongso, setThongso] = useState('');

  const param = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/thietbi/${param.id}`, {
        tentb,
        matb,
        soluong,
        nhasx,
        namsx,
        thongso,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4000/thietbi/${param.id}`)
      .then((res) => {
        setMatb(res.data.ma_tb);
        setTentb(res.data.ten_tb);
        setSoluong(res.data.so_luong);
        setNhasx(res.data.nha_sx);
        setNamsx(res.data.nam_sx);
        setThongso(res.data.thong_so);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem] mr-20">
          Sửa Lại Thiết Bị
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor-tb">
            <div className="">
              <div className=" mr-10">
                <table>
                  <td>
                    <div className="w-[400px]">
                      <label htmlFor="ma-cauhinh">Mã Thiết Bị</label>
                      <br />
                      <input
                        type="text"
                        id="ma-cauhinh"
                        disabled
                        value={matb}
                      />
                      <br />
                      <label htmlFor="ma-lm">Tên Thiết Bị</label>
                      <br />
                      <input
                        type="text"
                        id="ma-lm"
                        value={tentb}
                        onChange={(e) => setTentb(e.target.value)}
                      />
                      <br />

                      <label htmlFor="ma-hdh">Số Lượng</label>
                      <br />
                      <input
                        type="text"
                        id="ma-hdh"
                        value={soluong}
                        onChange={(e) => setSoluong(e.target.value)}
                      />
                    </div>{' '}
                  </td>
                  <div className="">
                    <td>
                      <label htmlFor="ghichu">Nhà Sản Xuất</label>
                      <br />
                      <input
                        type="text"
                        id="ma-hdh"
                        value={nhasx}
                        onChange={(e) => setNhasx(e.target.value)}
                      />
                      <br />
                      <label htmlFor="ghichu">Năm Sản Xuất</label>
                      <br />
                      <input
                        type="text"
                        id="ma-hdh"
                        value={namsx}
                        onChange={(e) => setNamsx(e.target.value)}
                      />
                      <br />
                      <label htmlFor="ghichu">Thông Số</label>
                      <br />
                      <input
                        type="text"
                        id="ma-hdh"
                        value={thongso}
                        onChange={(e) => setThongso(e.target.value)}
                      />
                      <br />
                    </td>
                  </div>
                </table>
              </div>
            </div>
          </div>
          <div className="infor1">
            <h2>Xuất Dữ Liệu</h2>
            <div className=" flex justify-center">
              <button className="luu" type="submit">
                <AddTaskIcon className=" mr-1" />
                Lưu Dữ Liệu
              </button>
              <br />
              <button className="reset" type="reset">
                <RestartAltIcon className=" mr-1" />
                Reset
              </button>
            </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
};
