import React from 'react';
import './index.css';
export const Cauhinh = ({ ch }) => {
 
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
              <td>{ch.ghichu}</td>

              
            </tr>
  );
};
