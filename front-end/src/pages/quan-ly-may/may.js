import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ComputerIcon from '@mui/icons-material/Computer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  width:'500px',
  height:'500px',
  top: '50%',
  left: '50%',
  transform: 'translate(140%, 50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "25px",
};
export const May = ({ cpt,getData }) => {
  function xoaPhongmay() {
    axios
      .delete(`http://localhost:4000/qlmay/delete/${cpt.id}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <button
        className={` text-[#ffffff] !w-60 !h-40 mt-6 rounded-lg ${cpt.trangthai?"bg-gradient-to-r from-green-400 to-green-600":"bg-gradient-to-r from-red-400 to-red-600"}`}
               
      >
        <ComputerIcon className=" !w-20 !h-20 " />
        <p className=" font-bold mb-1">{cpt.trangthai?cpt.maydk+"(ON)":cpt.maydk+"(OFF)"}</p>
        <button>
          <Link to={`/quanlimay/${cpt.id}`}>
            <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
          </Link>
        </button>
        <button onClick={xoaPhongmay}>
          {' '}
          <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1" />
        </button>

        <VisibilityIcon onClick={handleOpen} className=" ml-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg !w-8 !h-8 py-1" />
      </button>
      <Modal
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
               <td>Người Đăng Ký: {cpt.ngdk}</td>
            </tr>
            <tr>
               <td>Máy Đăng Ký: {cpt.maydk}</td>
            </tr>
            <tr>
               <td>Thời Gian Bắt: {cpt.tgbd}</td>
               
            </tr>
            <tr>
               <td>Thời Gian Kết Thúc: {cpt.tgkt}</td>
               
            </tr>
            <tr>
               <td>Trạng Thái: {cpt.trangthai?" Đang Hoạt Động":" Chưa hoạt động"}</td>
               
            </tr><tr>
               <td>Mục Đích: {cpt.md}</td>
               
            </tr>
             

           </table>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
