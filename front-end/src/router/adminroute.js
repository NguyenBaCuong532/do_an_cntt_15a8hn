import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import { Edituser } from '../pages/quan-ly-tai-khoan/edituser';
import { QuanLyTaiKhoan } from '../pages/quan-ly-tai-khoan/quanlytaikhoan';
import { QuanLyDkypm } from '../pages/quan-ly-dkypm/quanlydkypm';
import { Themuser } from '../pages/quan-ly-tai-khoan';
import { Formqlm } from '../pages/quan-ly-dkypm';
import Themmay from '../pages/quan-ly-dkypm/themmay';
import { Editch, Formtao, Quanlicauhinh } from '../pages/quan-ly-cau-hinh';
import { Editthietbi, Formtaotb, Quanlithietbi } from '../pages/quan-ly-thiet-bi';
import { Editpm, Formtaopm, QuanLyPhongMay } from '../pages/quan-ly-phong-may';
import { Quanlygiaovien, ThemGv } from '../pages/quan-ly-gv';



function AdminRoutes(props) {
  const navigate = useNavigate();

  useEffect(() => {
    let session = sessionStorage.getItem('account');
    let data =JSON.parse(session||'{}')
 
    if (!session || data.permissionID != 2 ) {
    console.log(data.permissionID)

      navigate('/login');
    }
  },[]);
  return (
    <>
      <Routes>
        <Route path="/quanlitaikhoan" element={<QuanLyTaiKhoan/>} />
        <Route path="/quanlitaikhoan/:id" element={<Edituser />} />
        <Route path="/quanlitaikhoan/themuser" element={<Themuser />} />
        <Route path="/quanlydkypm" element={<QuanLyDkypm />} />
        <Route path="/quanlydkypm/:id" element={<Formqlm />} />
        <Route path="/quanlydkypm/themmay" element={<Themmay />} />
        <Route path="/quanlicauhinh" element={<Quanlicauhinh />} />
        <Route path="/quanlicauhinh/:id" element={<Editch />} />
        <Route path="/formtao" element={<Formtao />} />
        <Route path="/quanlithietbi" element={<Quanlithietbi />} />
        <Route path="//quanlithietbi/formtaotb" element={<Formtaotb />} />
        <Route path="/quanlithietbi/:id" element={<Editthietbi />} />
        <Route path="/quanliphongmay" element={<QuanLyPhongMay />} />
        <Route path="/quanliphongmay/:id" element={<Editpm />} />
        <Route path="/quanliphongmay/formtaopm" element={<Formtaopm />} />
        <Route path="/quanligiaovien" element={<Quanlygiaovien />} />
      
        <Route path="/quanligiaovien/themgv" element={<ThemGv />} />
        <Route path="*">404 Not Found</Route>
      </Routes>
    </>
  );
}
export default AdminRoutes;
