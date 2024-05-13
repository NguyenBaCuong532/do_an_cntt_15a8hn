import React from "react";
import { Route, Routes } from "react-router-dom";
import Bangdieukhien from "./components/bangdieukhien";
import Quanlikhuvuc from "./components/quanlikhuvuc";
import Login from "./login";
import Admin from "./router/admin";
import Quanlicauhinh from "./components/quanlicauhinh";
import Quanligiaovien from "./components/quanligiaovien";
import Quanlimnhoc from "./components/quanlimonhoc";
import Quanliphongmay from "./components/quanliphongmay";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/bangdieukhien" element={<Bangdieukhien />} />
        <Route path="/quanlikhuvuc" element={<Quanlikhuvuc />} />
        <Route path="/quanlicauhinh" element={<Quanlicauhinh />} />
        <Route path="/quanligiaovien" element={<Quanligiaovien />} />
        <Route path="/quanliphongmay" element={<Quanliphongmay />} />
        <Route path="/quanlimonhoc" element={<Quanlimnhoc />} />

      </Routes>
    </div>
  );
}

export default App;
