import { Switch } from '@mui/material';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Quanlycauhinh from './pages/quan-ly-cau-hinh';
import Editch from './pages/quan-ly-cau-hinh/editch';
import Formtao from './pages/quan-ly-cau-hinh/formtao';
import QuanLyDkypm from './pages/quan-ly-dkypm';
import Quanlygiaovien from './pages/quan-ly-gv';
import ThemGv from './pages/quan-ly-gv/themgv';
import QuanLyPhongMay from './pages/quan-ly-phong-may';
import Editpm from './pages/quan-ly-phong-may/editpm';
import Formtaopm from './pages/quan-ly-phong-may/formtaopm';
import Quanlytaikhoan from './pages/quan-ly-tai-khoan';
import Edituser from './pages/quan-ly-tai-khoan/edituser';
import Themuser from './pages/quan-ly-tai-khoan/themuser';
import Quanlythietbi from './pages/quan-ly-thiet-bi';
import Editthietbi from './pages/quan-ly-thiet-bi/editthietbi';
import Formtaotb from './pages/quan-ly-thiet-bi/formtaotb';
import Admin from './router/admin';
import Formqlm from './pages/quan-ly-dkypm/formqlm';
import Themmay from './pages/quan-ly-dkypm/themmay';
import _ from 'lodash';
import AdminLayout from './components/layout/adminlayout';
import Booking from './router/booking/booking';
import Adminbooking from './router/adminbooking'
import Lienhe from './router/lienhe';
import Trangchu from './router/trangchu';
import Gioithieu from './router/gioithieu';
import Quytrinh from './router/quytrinh';
import Quydinh from './router/quydinh';
import Datlich from './router/phongmay';
import PrivateRoutes from './router/privateroute';

function AppRoutes(props) {
  useEffect(()=>{

  },[]);
  return (
    <>
    <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
          <Route path="/adminbooking" element={<Adminbooking />} />
          <Route path="/trangchu" element={<Trangchu />} />
          <Route path="/gioithieu" element={<Gioithieu />} />
          <Route path="/quytrinh" element={<Quytrinh />} />
          <Route path="/quydinhvaquyche" element={<Quydinh />} />
          <Route path="/datlich" element={<Datlich />} />
          <Route path="/lienhe" element={<Lienhe />} /> 
        


           <Route path="/quanlitaikhoan" element={<Quanlytaikhoan />} />
          {/*<Route path="/quanlitaikhoan/:id" element={<Edituser />} />
          <Route path="/quanlitaikhoan/themuser" element={<Themuser />} />
          <Route path="/quanlydkypm" element={<QuanLyDkypm />} />
          <Route path="/quanlydkypm/:id" element={<Formqlm />} />
          <Route path="/quanlydkypm/themmay" element={<Themmay />} />
          <Route path="/quanlicauhinh" element={<Quanlycauhinh />} />
          <Route path="/quanlicauhinh/:id" element={<Editch />} />
          <Route path="/formtao" element={<Formtao />} />
          <Route path="/quanlithietbi" element={<Quanlythietbi />} />
          <Route path="//quanlithietbi/formtaotb" element={<Formtaotb />} />
          <Route path="/quanlithietbi/:id" element={<Editthietbi />} />
          <Route path="/quanliphongmay" element={<QuanLyPhongMay />} />
          <Route path="/quanliphongmay/:id" element={<Editpm />} />
          <Route path="/quanliphongmay/formtaopm" element={<Formtaopm />} />
          <Route path="/quanligiaovien" element={<Quanlygiaovien />} />
          <Route path="/quanligiaovien" element={<Quanlygiaovien />} />
          <Route path="/quanligiaovien/themgv" element={<ThemGv />} />  
          <Route path="/formtao" element={<Formtao />} /> 
          <Route path="*">404 Not Found</Route> */}
      
    </Routes>

    
 
    </>
  )
}
export default AppRoutes;
