import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import moment from 'moment';
export const May = ({ dky, getData }) => {
  function xoaPhongmay() {
    axios
      .delete(`http://localhost:4000/qldkymay/delete/${dky.ID}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  }

  console.log(dky.tenGV);

  return (
    <tr>
      <td>{dky.tenGV}</td>
      <td>{dky.tenKhoa}</td>

      <td>{dky.tenMH}</td>
      <td>{dky.tenphong}</td>
      <td>{moment(dky.ngay).format('YYYY-MM-DD')}</td>
      <td>
        {dky.startTime}-{dky.endTime}
      </td>

      <td>
        <div className=" flex flex">
          <button>
            <Link to={`/quanlydkypm/${dky.ID}`}>
              <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
            </Link>
          </button>
          <button onClick={xoaPhongmay} className="">
            <DeleteForeverIcon className=" ml-[40px] bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1 text-[#ffffff] " />
          </button>
        </div>
      </td>
    </tr>
  );
};
