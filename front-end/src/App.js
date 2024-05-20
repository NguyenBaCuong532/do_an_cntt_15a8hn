import React from "react";
import { Routes, Route } from "react-router-dom";
import QuanLyPhongMay from "./pages/quan-ly-phong-may";
import Login from "./pages/login";
import Admin from "./router/admin";
import Quanlytaikhoan from "./pages/quan-ly-tai-khoan";
import Quanlycauhinh from "./pages/quan-ly-cau-hinh";
import Quanlythietbi from "./pages/quan-ly-thiet-bi";
import Quanlygiaovien from "./pages/quan-ly-gv";

import Formtao from "./pages/quan-ly-cau-hinh/formtao";
import Formtaotb from "./pages/quan-ly-thiet-bi/formtaotb";
import Formtaopm from "./pages/quan-ly-phong-may/formtaopm";
import QuanLyMay from "./pages/quan-ly-may";
import Formqlm from "./pages/quan-ly-may/formqlm";
import Editpm from "./pages/quan-ly-phong-may/editpm";
import Edituser from "./pages/quan-ly-tai-khoan/edituser";
import Editthietbi from "./pages/quan-ly-thiet-bi/editthietbi";
import Themuser from "./pages/quan-ly-tai-khoan/themuser";
import Editch from "./pages/quan-ly-cau-hinh/editch";
import Editgv from "./pages/quan-ly-gv/editgv";
import Themmay from "./pages/quan-ly-may/themmay";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/quanlitaikhoan" element={<Quanlytaikhoan />} />
        <Route path="/quanlitaikhoan/:id" element={<Edituser />} />
        <Route path="/quanlitaikhoan/themuser" element={<Themuser />} />

        <Route path="/quanlimay" element={<QuanLyMay />} />
        <Route path="/quanlimay/:id" element={<Formqlm />} />
        <Route path="/quanlimay/themmay" element={<Themmay />} />


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
        <Route path="/quanligiaovien/:id" element={<Editgv />} />


        <Route path="/formtao" element={<Formtao />} />
      </Routes>
    </div>
  );
}

export default App;
