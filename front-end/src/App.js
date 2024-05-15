import React from "react";
import { Route, Routes } from "react-router-dom";
import Lichsusuadoi from "./components/lichsusuadoi";
import Quanlicauhinh from "./components/quanlicauhinh";
import Quanlimay from "./components/quanlimay";
import Quanliphongmay from "./components/quanliphongmay";
import Quanlitaikhoan from "./components/quanlitaikhoan";
import Quanlithietbi from "./components/quanlithietbi";
import Admin from "./router/admin";
import Login from "./login";
function App() {
  return (
    <div className="App"> <Login/>
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
