import React from "react";
import './index.css'
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import anh from '../booking/anhheader.png'
function Booking(props) {
 
  return(
    
         <div className="admin-container1 ">
          <div className="anhtruong"></div>
      <header className="side-nav1" >
        <ul>
          <li>
            
            <NavLink to="/trangchu">Trang chủ</NavLink>
          </li>
          <li>
            <NavLink to="/gioithieu">Giới thiệu</NavLink>
          </li>
          <li>
            <NavLink to="/quytrinh">Quy trình</NavLink>
          </li>

          <li>
            <NavLink to="/quydinhvaquyche">Quy định & quy chế</NavLink>
          </li>
          <li>
          
            <NavLink to="/datlich">Đặt lịch phòng máy</NavLink>
          </li>
          <li>
         
            <NavLink to="/lienhe">Liên hệ</NavLink>
          </li>
         
         
            <input className=" ml-[300px] w-[350px]" placeholder="Nhập nội dung tìm kiếm..."/><SearchIcon className=" ml-[-40px] text-[#4e545c]"/>
         
        </ul>
      </header> 
      <main className=" pl-[300px]">{props.children}
      
      </main>
      <footer>
          <div className="duoi">
            <h6>Trường Đại học Kinh tế - Kỹ thuật Công nghiệp</h6><br/>
            <div className=" text-center ">
                 <a>Địa chỉ: 353 Trần Hưng Đạo, TP.Nam Định</a><br/>
            <a>456 Minh Khai, Hai Bà Trưng, Hà Nội</a><br/>
            <a>Ngõ 218 Lĩnh Nam, Hoàng Mai, Hà Nội</a>
            </div>
         

          </div>
        </footer>
    </div>
  );
        {/* <div><header>
            <div className="header">
                <img src={logo} alt="123"/>
            </div>
        </header>

        <content>

        </content>

        
      
    </div> */}
  
  
  
}
export default Booking;