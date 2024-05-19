import React from 'react';
import './index.css';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from 'react-router-dom';
export const Thietbi = ({ thietbi }) => {
 
  return (
    <tr>
              <td>{thietbi.id}</td>        
              <td>{thietbi.matb}</td>
              <td>{thietbi.tentb}</td>
              <td>{thietbi.soluong}</td>
              <td>{thietbi.nhasx}</td>
              <td>{thietbi.namsx}</td>
              <td>{thietbi.thongso}</td>
              <td>
              <button>
          <Link to={ `/quanlithietbi/${thietbi.id}`}>
                  <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
                </Link>
          </button>
                  <button>
                    <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1 text-[#ffffff] " />
                  </button>
              </td>
           
            </tr>
  );
};
