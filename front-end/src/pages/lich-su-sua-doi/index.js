import React from 'react';

import AdminLayout from '../../components/layout/adminlayout';
import './index.css';


const Lichsusuadoi = () => {

 
  return (
    <AdminLayout>
      <div className='lssd-container '>
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">Lịch Sử Sửa Đổi</p>
        <div className='table-searchls flex flex-col gap-2'>
          <h2 className='form-searchls font-bold text-[1.35rem] py-[1.25rem]'>Tìm Kiếm</h2>
          <table>
            <tr>
              <td>
                <input className="searchls-nhap" type='text' placeholder='Nhập Từ Khóa'/>
              </td>
              <td>
                <div className=' mr-80'>

                <input className='search-check ' type="checkbox" id="pc1" name="pc1" value="Máy"/><label>Máy</label>
                <input className='search-check'  type='checkbox' placeholder='Tên Phòng'/><label>Phòng</label>
                <input className=' search-check'  type='checkbox' placeholder='Tên Phòng'/><label>Ngày</label>
                </div>

              </td>
              <td>
                <div className='select'> 
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <button className='luu'>Tìm Kiếm</button>
                  <button className='reset'>Reset</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="table-cauhinh">

          <table>
            <tr>
              <th>STT</th>
              <th>Tên Máy Hiện Tại</th>
              <th>Tên Máy Cập Nhật</th>
              <th>Cấu Hình</th>
              <th>Ngày</th>
              <th>Ghi Chú</th>          
            </tr>
            <tr>
             
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td></td>
              
            </tr>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Lichsusuadoi;
