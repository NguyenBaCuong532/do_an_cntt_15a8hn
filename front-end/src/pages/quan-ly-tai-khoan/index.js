import React from 'react';

import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ComputerIcon from '@mui/icons-material/Computer';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


const QuanLyTaiKhoan = () => {

 
  return (
    <AdminLayout>
      <div className='qlpm-container '>
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">Quản Lý Tài Khoản</p>
        <div className='table-search flex flex-col gap-2'>
          <h2 className='form-search font-bold text-[1.35rem] py-[1.25rem]'>Form Tìm Kiếm</h2>
          <table>
            <tr>
              <td>
                <input type='text' placeholder='Mã Phòng'/>
              </td>
              <td>
                <input type='text' placeholder='Tên Phòng'/>
              </td>
              <td>
                <div className='select'>

                <select className='chon' >
                  <option selected disabled>Chọn loại phòng</option>
                  <option value='1'>Phòng cấu hình cao</option>
                  <option value='2'>Phòng cấu hình thường</option>
                </select>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <select className='chon'>
                  <option selected disabled>Chọn khu vực</option>
                  <option value=''>Khu vực 1</option>
                  <option value=''>Khu vực 2</option>
                  <option value=''>Khu vực 3</option>
                  <option value=''>Khu vực 4</option>
                </select>
              </td>
              <td>
                <select className='chon'>
                  <option selected disabled>Trạng thái hoạt động</option>
                  <option value=''>Đang sử dụng</option>
                  <option value=''>Chưa sử dụng</option>
                </select>
              </td>
              <td>
                <div>
                  <button className='luu'><SearchIcon className=" mr-1"/>Tìm Kiếm</button>
                  <button className='reset'><RestartAltIcon className=" mr-1" />Reset</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="table-cauhinh">
         
<div className='infor-tb'>
   <table>
            <tr>
             <button className='bg-gradient-to-r from-green-400 to-green-600 text-[#ffffff] 
               !w-60 !h-40 mt-6 rounded-lg 
               '><ComputerIcon className=' !w-20 !h-20 '/>
               <p className=' font-bold'>Máy 02</p>
               <button> <Link to="/formtaopm"><BorderColorIcon className=' bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg'/></Link></button>
               
               
               <DeleteForeverIcon className=' ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1'/>
               <AddIcon className=' ml-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg !w-8 !h-8 py-1'/>
               </button>
            </tr>
            <tr>
              
              
            </tr>
          </table>
</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default QuanLyTaiKhoan;
