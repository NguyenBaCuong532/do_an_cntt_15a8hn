import React from "react";
import { Routes, Route } from "react-router-dom";
import QuanLyPhongMay from "./pages/quan-ly-phong-may";
import Login from "./pages/login";
import Admin from "./router/admin";
import Quanlytaikhoan from "./pages/quan-ly-tai-khoan";
import Quanlycauhinh from "./pages/quan-ly-cau-hinh";
import Quanlythietbi from "./pages/quan-ly-thiet-bi";
import Lichsusuadoi from "./pages/lich-su-sua-doi";
import Formtao from "./pages/quan-ly-cau-hinh/formtao";
import Formtaotb from "./pages/quan-ly-thiet-bi/formtaotb";
import Formtaopm from "./pages/quan-ly-phong-may/formtaopm";
import QuanLyMay from "./pages/quan-ly-may";
import Formqlm from "./pages/quan-ly-may/formqlm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/quanlitaikhoan" element={<Quanlytaikhoan />} />
        <Route path="/quanlimay" element={<QuanLyMay />} />
        <Route path="/quanlicauhinh" element={<Quanlycauhinh />} />
        <Route path="/quanlithietbi" element={<Quanlythietbi />} />
        <Route path="/quanliphongmay" element={<QuanLyPhongMay />} />
        <Route path="/lichsusuadoi" element={<Lichsusuadoi />} />
        <Route path="/formtao" element={<Formtao />} />
        <Route path="/formtaotb" element={<Formtaotb />} />
        <Route path="/formtaopm" element={<Formtaopm />} />
        <Route path="/formqlm" element={<Formqlm />} />
      </Routes>
    </div>
  );
}

export default App;
