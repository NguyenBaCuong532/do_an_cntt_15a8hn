import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export const Lichsu = ({ lichsu }) => {
 
  return (
    <tr>
              <td>{lichsu.id}</td>        
              <td>{lichsu.tenmay}</td>
              <td>{lichsu.tenmaycn}</td>
              <td>{lichsu.cauhinh}</td>
              <td>{lichsu.ngay}</td>
              <td>{lichsu.ghichu}</td>
              
            </tr>
  );
};
