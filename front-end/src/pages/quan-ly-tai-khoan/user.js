import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';

import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
const style = {
  width: '500px',
  height: '500px',
  top: '50%',
  left: '50%',
  transform: 'translate(140%, 50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '25px',
};

export const User = ({ user, getData }) => {
  function xoaPhongmay() {
    axios
      .delete(`http://localhost:4000/user/delete/${user.id}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative">
      <button
        className={` text-[#ffffff] 
           !w-60 !h-40 mt-6 rounded-lg bg-gradient-to-r from-green-400 to-green-600`}
      >
        <PersonIcon className=" !w-20 !h-20 " />
        <p className=" font-bold"> {user.fullname}</p>
        <button>
          <Link to={`/quanlitaikhoan/${user.id}`}>
            <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
          </Link>
        </button>
        <button onClick={xoaPhongmay}>
          <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1" />
        </button>
        <button>
          <VisibilityIcon
            className=" ml-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg !w-8 !h-8 py-1"
            onClick={handleOpen}
          />
        </button>
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
            <table className=" ml-12 mt-[50px] font-bold text-lg">
              <tr>
                <td>Họ Tên: {user.fullname}</td>
              </tr>
              <tr>
                <td>Email: {user.email}</td>
              </tr>
              <tr>
                <td>Khoa: {user.khoa}</td>
              </tr>
            </table>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
