import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './index.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Edituser() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');

  const param = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/user/${param.id}`, { fullname, email })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/${param.id}`)
      .then((res) => {
        setFullname(res.data.fullname);
        setEmail(res.data.email);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Edit Tài Khoản
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
            <label htmlFor="mp">Họ Tên</label>
            <br />
            <input
              type="text"
              id="mp"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <br />
            <label htmlFor="tp">Email</label>
            <br />
            <input
              className=""
              value={email}
              type="text"
              id="tp"
              onChange={(e) => setEmail(e.target.value)}
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
            
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}

export default Edituser;
