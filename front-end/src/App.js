import React from 'react';
import {Routes} from 'react-router-dom';
import QuanLyPhongMay from './pages/quan-ly-phong-may';
import Login from './pages/login';


function App() {
  return (
    <div className='App'>
      <Login />
      <Routes>
        {/* <Route path="/" element={<Login />}/> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/quanlitaikhoan" element={<Quanlitaikhoan />} />
        <Route path="/quanlimay" element={<Quanlimay />} />
        <Route path="/quanlicauhinh" element={<Quanlicauhinh />} />
        <Route path="/quanlithietbi" element={<Quanlithietbi />} />
        <Route path="/quanliphongmay" element={<Quanliphongmay />} />
        <Route path="/lichsusuadoi" element={<Lichsusuadoi />} />*/}
      </Routes>
    </div>
  );
}

export default App;
