import React, { useEffect } from 'react';
import './index.css';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import { Adminbooking } from './adminbooking';
import { Quytrinh } from './quytrinh';
import { Datlich } from './phongmay';
import { Lienhe } from './lienhe';
import { Quydinh } from './quydinh';
import { Trangchu } from './trangchu';
import { Gioithieu } from '../router/gioithieu';

export const UserRoutes =(props)=> {
  const navigate = useNavigate();

  useEffect(()=>{
    let session = sessionStorage.getItem('account');
    if(!session){
      navigate('/login');
    }
  },[])
  return (
    <>
      <Routes>
      <Route path="/adminbooking" element={<Adminbooking />} />
          <Route path="/trangchu" element={<Trangchu />} />
          <Route path="/gioithieu" element={<Gioithieu />} />
          <Route path="/quytrinh" element={<Quytrinh />} />
          <Route path="/quydinhvaquyche" element={<Quydinh />} />
          <Route path="/datlich" element={<Datlich />} />
          <Route path="/lienhe" element={<Lienhe />} /> 
         
      </Routes>
    </>
  );
}

