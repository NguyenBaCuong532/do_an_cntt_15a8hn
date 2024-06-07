import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export const Lichsu = ({ gv, getData }) => {
  function xoaPhongmay() {
    axios
      .delete(`http://localhost:4000/lichsutk/delete/${gv.id}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  }
  return (
    <tr>
      <td>{gv.id}</td>
      <td>{gv.magv}</td>
      <td>{gv.tengv}</td>
      <td>{gv.avt}</td>
      <td>{gv.khoa}</td>
      <td>
        {' '}
        <button>
          <Link to={`/quanligiaovien/${gv.id}`}>
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
