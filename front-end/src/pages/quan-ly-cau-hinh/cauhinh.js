import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export const Cauhinh = ({ ch, getData }) => {
  function xoaPhongmay() {
    axios
      .delete(`http://localhost:4000/cauhinh/delete/${ch.id}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  }

  return (
    <tr>
      <td>{ch.id}</td>
      <td>{ch.mach}</td>
      <td>{ch.loaimay}</td>
      <td>{ch.hdh}</td>
      <td>{ch.cpu}</td>
      <td>{ch.ram}</td>
      <td>{ch.oc}</td>
      <td>{ch.vga}</td>
      <td>
        {' '}
        <button>
          <Link to={`/quanlicauhinh/${ch.id}`}>
            <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
          </Link>
        </button>
        <button onClick={xoaPhongmay}>
          <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1 text-[#ffffff] " />
        </button>
      </td>
    </tr>
  );
};
