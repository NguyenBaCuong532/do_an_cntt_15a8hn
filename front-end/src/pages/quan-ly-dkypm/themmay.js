import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/layout/adminlayout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import './index.css';
import axios from 'axios';
function Themmay() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [tenphong, setTenphong] = useState('');
  const [maphong, setMaphong] = useState('');
  const [ngay, setNgay] = useState('');
  const [tengv, setTengv] = useState('');
  const [magv, setMagv] = useState('');
  const [khoa, setKhoa] = useState('');
  const [monhoc, setMonhoc] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:4000/qldkymay/create', {
        startTime,
        tenphong,
        endTime,
        tengv,
        khoa,
        monhoc,
        maphong,
        magv,
        ngay,
      })
      .then((res) => {
        if(res.data.status ==false){
          alert(res.data.message);
        }
        else{
          alert("them Mới Thành CÔng");

        }
      })
      .catch((err) => console.log(err));
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Thêm Phòng
        </h3>
        <form className="form-cauhinh" onSubmit={handleSubmit}>
          <div className="infor">
          
            <label htmlFor="mp">Mã Giáo Viên</label>
            <br />
            <input
              type="text"
              className=" !w-[400px]"
              required
              id="mp"
              value={magv}
              onChange={(e) => setMagv(e.target.value)}
            />
            <br />
          
            <label htmlFor="md">Mã Phòng</label>
            <br />
            <input
              type="text"
              id="md"
              required

              className=" !w-[200px]"
              value={maphong}
              onChange={(e) => setMaphong(e.target.value)}
            />
            <br />
            <label htmlFor="lp">Ngày</label>
            <br />
            <input
              type="date"
              id="lp"
           

              className=' !w-[300px]'
              value={ngay}
              onChange={(e) => setNgay(e.target.value)}
            />
            <br />

            <label htmlFor="khuvuc">Ca Đặt lịch</label>
            <br />
            <input className='  !w-[150px]'
              placeholder='HH:mm:ss'

              type="time"
              id="khuvuc"
              

              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <input className='  !w-[150px]'
              placeholder='HH:mm:ss'

              type="time"
              id="khuvuc"
              

              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
            
          
            <br />
          </div>
          <div className="infor1">
            <h2>Xuất Dữ Liệu</h2>
            <div className="infor1 !w-[600px]">
           
            <div className=" flex justify-center ">
              <button className="luu">
                <AddTaskIcon className=" mr-1" />
                Sửa Dữ Liệu
              </button>
              <button className="reset">
                <RestartAltIcon className=" mr-1" />
                Reset
              </button>
            </div>
           
          </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
}

export default Themmay;
