import React from 'react';
import './index.css';

import Booking from '../booking/booking';
function Datlich() {
  return (
    <Booking>
      <div className=' w-[85%] border-solid border-2 px-5 py-5'>
          <h2 className='text-[#3d40c8] font-bold text-[25px] text-center m-[20px]'>QUY TRÌNH ĐĂNG KÝ SỬ DỤNG PHÒNG MÁY TÍNH</h2>
          
          <p className='leading-9'>Trung tâm Thông tin và Quản trị mạng (TTTT&QTM) quản lý 08 phòng máy tính phục vụ thi trực tuyến của Trường <i className='text-[#bf3a3a]'>(Phòng 1: ... máy; Phòng 2:... máy; Phòng 3:... máy)</i> đặt tại tầng 5,<br/> tòa HA.09, quí Thầy/Cô có nhu cầu sử dụng các phòng máy tính vui lòng đăng ký sử dụng theo qui trình dưới đây:</p>
          <p className='leading-9 mb-6'><b>Bước 1:</b> Cán bộ có nhu cầu sử dụng các Phòng máy tính, vui lòng xem lịch phòng trống <i className='text-[#bf3a3a]'>(bên dưới)</i> hoặc liên hệ với cán bộ quản lý Phòng Máy tinh: A. Nguyễn Văn A, Điện thoại: 0975.142.481<br/> 

          <b>Bước 2:</b>  Tải và điền thông tin vào phiếu đăng ký sử dụng phòng máy tính theo mẫu: (Tải Phiếu đăng ký sử dụng phòng máy tính tại đây)<br/> 

          <b>Bước 3:</b>  Chuyển phiếu đăng ký sử dụng đến TTTT&QTM qua hệ thống Eoffice (lưu ý: TTTT&QTM chỉ nhận phiếu đăng ký qua Eoffice do Văn thư đơn vị gởi, không nhận phiếu đăng ký trực tiếp hoặc qua email).<br/> 

          <b>Bước 4:</b> TTTT-QTM sẽ xem xét, đăng ký lịch và phản hồi cho quý Thầy/Cô qua email trong vòng 02 ngày làm việc</p>
        <p><b className='text-[#ed3d3d]'>* Thứ tự ưu tiên các hoạt động được sử dụng các phòng máy tính của Trường.</b><br/>
   1. Thi trực tuyến.<br/>
   2. Học trực tuyến.<br/>
   3. Tập huấn chuyên môn của các Phòng/Ban.<br/>
   4. Phục vụ thực hành (ưu tiên các đơn vị không có phòng máy tính).</p>
     
      </div>
    </Booking>
  );
}
export default Datlich;
