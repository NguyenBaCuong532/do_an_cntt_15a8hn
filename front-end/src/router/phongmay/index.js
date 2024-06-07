import React, { useState } from 'react';
import './index.css';

import {Booking} from '../booking';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
const style = {
  width:'500px',
  height:'500px',
  top: '50%',
  left: '50%',
  transform: 'translate(140%, 50%)',
  bgcolor: 'background.paper',
  border: '2px solid #ccc',
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
};

export const Datlich=()=> {
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
    <Booking>
      <div className=' w-[85%] border-solid border-2 px-5 py-5' >
          <h2 className='text-[#3d40c8] font-bold text-[25px] text-center m-[20px]'>QUY TRÌNH ĐĂNG KÝ SỬ DỤNG PHÒNG MÁY TÍNH</h2>
          
          <p className='leading-9'>Trung tâm Thông tin và Quản trị mạng (TTTT&QTM) quản lý 08 phòng máy tính phục vụ thi trực tuyến của Trường <i className='text-[#bf3a3a]'>(Phòng 1: ... máy; Phòng 2:... máy; Phòng 3:... máy)</i> đặt tại tầng 5,<br/> tòa HA.09, quí Thầy/Cô có nhu cầu sử dụng các phòng máy tính vui lòng đăng ký sử dụng theo qui trình dưới đây:</p>
          <p className='leading-9 mb-6'><b>Bước 1:</b> Cán bộ có nhu cầu sử dụng các Phòng máy tính, vui lòng xem lịch phòng trống <i className='text-[#bf3a3a]'>(bên dưới)</i><br/> 

          <b>Bước 2:</b>  Điền thông tin vào phiếu đăng ký sử dụng phòng máy tính theo mẫu: <button className='' onClick={handleOpen}>(Phiếu đăng ký sử dụng phòng máy tính tại đây)</button><br/> 


          <b>Bước 3:</b>  TTTT-QTM sẽ xem xét, đăng ký lịch và phản hồi cho quý Thầy/Cô qua email trong vòng 02 ngày làm việc</p>
        <p><b className='text-[#ed3d3d]'>* Thứ tự ưu tiên các hoạt động được sử dụng các phòng máy tính của Trường.</b><br/>
   1. Thi trực tuyến.<br/>
   2. Học trực tuyến.<br/>
   3. Tập huấn chuyên môn của các Phòng/Ban.<br/>
   4. Phục vụ thực hành (ưu tiên các đơn vị không có phòng máy tính).</p>
     
      </div>
      <form onSubmit={handleSubmit}> <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
           Thông Tin 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <table className=' ml-12 mt-[50px] font-bold text-lg' >
            <tr>
               <td>Phòng: <input className='border-[#ccc] border-[2px]'
               value={tenphong}
               required
               onChange={(e) => setTenphong(e.target.value)}
               /></td>
            </tr>
            <tr>
               <td>Ngay: <input type='date' className='border-[#ccc] border-[2px] ml-2 mt-4'
                value={ngay}
               required

                onChange={(e) => setNgay(e.target.value)}
               /></td>
            </tr>
            <tr> 
               <td>Ca : <input  className='border-[#ccc] border-[2px] ml-2 mt-4'
              placeholder='HH:mm:ss'
              required

              type="time"
              id="khuvuc"
              

              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <input  className='border-[#ccc] border-[2px] ml-2 mt-4'
              placeholder='HH:mm:ss'
              required

              type="time"
              id="khuvuc"
              

              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
               </td>
            </tr>
            <tr><button className='submit'>Đăng Ký</button></tr>
             

           </table>
          </Typography>
        </Box>
      </Modal></form>
     
    </Booking>


  );
}

