import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ComputerIcon from '@mui/icons-material/Computer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export const May = ({ cpt }) => {
  return (
    <div>
      <button
        className="bg-gradient-to-r from-green-400 to-green-600 text-[#ffffff] 
               !w-60 !h-40 mt-6 rounded-lg 
               "
      >
        <ComputerIcon className=" !w-20 !h-20 " />
        <p className=" font-bold">{cpt.tenmay}</p>
        <button>
        
         <Link to={`/quanlimay/${cpt.id}`}>
            <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
          </Link>
        </button>
        <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1" />
        <VisibilityIcon className=" ml-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg !w-8 !h-8 py-1" />
      </button>
    </div>
  );
};
