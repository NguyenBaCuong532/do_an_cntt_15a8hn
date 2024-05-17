import React from 'react';
import {Routes,Route} from 'react-router-dom';
import QuanLyPhongMay from './pages/quan-ly-phong-may';
import Login from './pages/login';
import Admin from './router/admin';
import Quanlytaikhoan from './pages/quan-ly-tai-khoan';
import Quanlycauhinh from './pages/quan-ly-cau-hinh';
import Quanlythietbi from './pages/quan-ly-thiet-bi';
import Quanlimay from './pages/quan-ly-may/quanlimay';
import Lichsusuadoi from './pages/lich-su-sua-doi';
import Formtao from './pages/quan-ly-cau-hinh/formtao';

function App() {
  return (
    <div className='App'>
      
       <Routes>
         <Route path="/" element={<Login />}/> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/quanlitaikhoan" element={<Quanlytaikhoan />} />
        <Route path="/quanlimay" element={<Quanlimay />} />
        <Route path="/quanlicauhinh" element={<Quanlycauhinh />} />
        <Route path="/quanlithietbi" element={<Quanlythietbi />} />
        <Route path="/quanliphongmay" element={<QuanLyPhongMay />} />
        <Route path="/lichsusuadoi" element={<Lichsusuadoi />} /> 
        <Route path="/formtao" element={<Formtao />} />
        
      </Routes> 
    </div>
  );
}

export default App;
