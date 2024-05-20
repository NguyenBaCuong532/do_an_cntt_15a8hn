import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios';
export const User = ({ user,getData }) => {
  function xoaPhongmay(){
    axios.delete(`http://localhost:4000/user/delete/${user.id}`)
    .then((res)=>getData())
    .catch((err)=>console.log(err))
   }
  return (
    <div>
      <button
        className="bg-gradient-to-r from-green-400 to-green-600 text-[#ffffff] 
           !w-60 !h-40 mt-6 rounded-lg 
           "
      >
        <PersonIcon className=" !w-20 !h-20 " />
        <p className=" font-bold"> {user.name}</p>
        <button>
          <Link to={`/quanlitaikhoan/${user.id}`}>
            <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
          </Link>
        </button >
        <button onClick={xoaPhongmay}>
        <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1" />
      </button>
      <button><VisibilityIcon className=" ml-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg !w-8 !h-8 py-1" /></button></button>
    </div>
  );
};
