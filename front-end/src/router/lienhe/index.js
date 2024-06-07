import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {Booking} from '../booking';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export const Lienhe =(props)=> {
  return (
    <Booking>
      <div className="lienhe w-[85%]">
        <h3 className=" text-[#1b09dccc] text-lg font-bold">Liên hệ</h3>
        <div className="lienhe1">
          <table>
            <tr>
              <td>
                <h4>Phòng công tác sinh viên</h4>
                <h2 className="text-[#ee3d3dcc]">
                  <HomeIcon className=" mr-3" />
                  Địa chỉ
                </h2>
                <p>
                  Cơ sở Hà Nội: Phòng 107 nhà H.A3 – Khu Giảng đường – Ngõ 454,
                  Phố Minh Khai, Quận Hai Bà Trưng, Hà Nội
                  <br />
                  Cơ sở Nam Định: Khu nhà Văn phòng – Số 353 Trần Hưng Đạo,
                  Thành phố Nam Định
                </p>

                <h2 className="text-[#ee3d3dcc]">
                  <LocalPhoneIcon className=" mr-3" /> Điện thoại
                </h2>
                <p>
                  0243.6339857 (cơ sở HN)
                  <br />
                  0228.3841609 (cơ sở NĐ)
                </p>
                <h2 className="text-[#ee3d3dcc]">
                  <EmailIcon className=" mr-3" /> Email
                </h2>
                <p>phongdaotao@uneti.edu.vn</p>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Phòng Đào tạo</h4>
                <h2 className="text-[#ee3d3dcc]">
                  <HomeIcon className=" mr-3" />
                  Địa chỉ
                </h2>
                <p>
                  Cơ sở Hà Nội: Phòng 505 số 456 Minh khai, Hai Bà Trưng, Hà Nội
                  Cơ sở Nam Định: Khu nhà Văn phòng – Số 353 Trần Hưng Đạo, TP
                  Nam Định
                </p>

                <h2 className="text-[#ee3d3dcc]">
                  <LocalPhoneIcon className=" mr-3" /> Điện thoại
                </h2>
                <p>
                  0243.6339857 (cơ sở HN)
                  <br />
                  0228.3841609 (cơ sở NĐ)
                </p>
                <h2 className="text-[#ee3d3dcc]">
                  <EmailIcon className=" mr-3" /> Email
                </h2>
                <p>phongdaotao@uneti.edu.vn</p>
              </td>
            </tr>
            <tr>
              <h4>Phòng Mạng Máy tính</h4>
              <h2 className="text-[#ee3d3dcc]">
                <HomeIcon className=" mr-3" />
                Địa chỉ
              </h2>
              <p>
                Cơ sở Hà Nội: Phòng 102 nhà HA8, khu giảng đường – Ngõ 218 Đường
                Lĩnh Nam, Q.Hoàng Mai, TP.Hà Nội. Cơ sở Nam Định: Khu nhà Văn
                phòng – Số 353 Trần Hưng Đạo, TP Nam Định
              </p>

              <h2 className="text-[#ee3d3dcc]">
                <LocalPhoneIcon className=" mr-3" /> Điện thoại
              </h2>
              <p>
                0243.6339857 (cơ sở HN)
                <br />
                0228.3841609 (cơ sở NĐ)
              </p>
              <h2 className="text-[#ee3d3dcc]">
                <EmailIcon className=" mr-3" /> Email
              </h2>
              <p>phongmmt@uneti.edu.vn</p>
            </tr>
          </table>
        </div>
      </div>
    </Booking>
  );
}

