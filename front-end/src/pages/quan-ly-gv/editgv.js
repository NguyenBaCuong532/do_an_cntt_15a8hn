import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './index.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function Editgv() {
  const [magv, setMagv] = useState('');
  const [tengv, setTengv] = useState('');
  const [avt, setAvt] = useState('');
  const [khoa, setKhoa] = useState('');

  const param = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/lichsutk/${param.id}`, {
        magv,
        tengv,
        avt,
        khoa,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(`http://localhost:4000/lichsutk/${param.id}`)
      .then((res) => {
        setMagv(res.data.ma_giao_vien);
        setTengv(res.data.ten_giao_vien);
        setAvt(res.data.avatar);
        setKhoa(res.data.khoa);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem] mr-20">
          Sửa Giáo Viên
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor-tb">
            <div className=" flex">
              <div className=" mr-10">
                <label htmlFor="ma-cauhinh">Mã Giáo Viên</label>
                <br />
                <input type="text" id="ma-cauhinh" disabled value={magv} />
                <br />
                <label htmlFor="ma-lm">Tên Giáo Viên</label>
                <br />
                <input
                  type="text"
                  id="ma-lm"
                  value={tengv}
                  onChange={(e) => setTengv(e.target.value)}
                />
                <br />

                <label htmlFor="ma-hdh">Avatar</label>
                <br />
                <input
                  type="text"
                  id="ma-hdh"
                  value={avt}
                  onChange={(e) => setAvt(e.target.value)}
                />
                <br /><div className="">
                <label htmlFor="ghichu">Khoa</label>
                <br />
                <input
                  type="text"
                  id="ma-hdh"
                  value={khoa}
                  onChange={(e) => setKhoa(e.target.value)}
                />
                <br />
              </div>
              
              </div>
            </div>
          </div>
          <div className="infor1">
            <h2>Xuất Dữ Liệu</h2>
            <div className=" flex justify-center">
              <button className="luu" type="submit">
                <AddTaskIcon className=" mr-1" />
                Lưu Dữ Liệu
              </button><br/>
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
}

export default Editgv;
