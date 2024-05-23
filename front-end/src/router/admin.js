import React, { useEffect, useState } from "react";
import AdminLayout from "../components/layout/adminlayout";
import './index.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Admin(user) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [khoa, setKhoa] = useState('');
  const [data, setData] = useState([]);
const navigate=useNavigate()
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/user', { params: { fullname, email } })
      .then((res) =>console.log(res.data))
      .catch((err) => console.log(err));
  }
useEffect(()=>{
  if(!localStorage.getItem('token')){
       navigate('/login')
  }
},[])
 
  return <AdminLayout><form onSubmit={handleSubmit} >
         <h4 className="tieude">Quản Lí Phòng Máy</h4>
         
 </form></AdminLayout>
  
  
}
export default Admin;
