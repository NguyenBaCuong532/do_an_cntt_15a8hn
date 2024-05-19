import React from 'react';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css';
export const Phongmay = ({item,getData}) => {
 function xoaPhongmay(){
  console.log(123)
  axios.delete(`http://localhost:4000/phongmay/delete/${item.id}`)
  .then((res)=>getData())
  .catch((err)=>console.log(err))
 }
  return (
      <tr>
        <td>{item.id}</td>
        <td>{item.maphong}</td>
        <td>{item.tenphong}</td>
        <td>{item.loaiphong}</td>
        <td>{item.soluong}</td>
        <td>{item.khuvuc}</td>
        <td>{item.trangthai}</td>
        <td>
          <button>
          <Link to={ `/quanliphongmay/${item.id}`}>
                  <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
                </Link>
          </button>
          <button onClick={xoaPhongmay}>
            <DeleteForeverIcon  className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1 text-[#ffffff] " />
          </button>
        </td>
      </tr>
  );
};
