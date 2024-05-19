import React from 'react';
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
