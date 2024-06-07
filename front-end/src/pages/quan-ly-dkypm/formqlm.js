import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
export const Formqlm = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [tenphong, setTenphong] = useState('');
  const [tengv, setTengv] = useState('');
  const [maphong, setMaphong] = useState('');
  const [khoa, setKhoa] = useState('');
  const [monhoc, setMonhoc] = useState('');
  const [id, setId] = useState('');
  const [ngay, setNgay] = useState('');

  const param = useParams();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .patch(`http://localhost:4000/qldkymay/${param.id}`, {
        startTime,
        endTime,
        tenphong,
        tengv,
        khoa,
        monhoc,
        maphong,
        id,
        ngay,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4000/qldkymay/${param.id}`)
      .then((res) => {
        setTengv(res.data.tenGV);
        setKhoa(res.data.tenKhoa);
        setTenphong(res.data.tenphong);
        setStartTime(res.data.startTime);
        setEndTime(res.data.endTime);
        setMonhoc(res.data.tenMH);
        setMaphong(res.data.maphong);
        setId(res.data.ID);
        setNgay(moment(res.data.ngay).format('YYYY-MM-DD'));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AdminLayout>
        <h3 className="text-center !text-[#fff] font-bold text-[2.75rem] py-[1.25rem]">
          Sửa Phòng Đăng Ký
        </h3>
        <form
          className="form-cauhinh !w-[800px] !ml-[450px] "
          onSubmit={handleSubmit}
        >
          <div className="infor ">
            <label htmlFor="mp">
              {' '}
              <p>Giáo Viên : {tengv}</p>
            </label>
            <br />
            <label htmlFor="tp">Khoa : {khoa}</label>
            <br />
            <br />
            <label htmlFor="tp">Bộ Môn: {monhoc}</label>
            <br /> <br />
            <label htmlFor="md">
              Đổi Phòng {tenphong} Sang :{' '}
              <input
                type="text"
                id="md "
                className=" !w-[200px]"
                value={tenphong}
                onChange={(e) => setTenphong(e.target.value)}
              />
              <br />{' '}
            </label>
            <br />
            <label htmlFor="lp">Ngày</label>
            <br />
            <input
              type="date"
              id="lp"
              className=" !w-[300px]"
              value={ngay}
              onChange={(e) => setNgay(e.target.value)}
            />
            <br />
            <label htmlFor="khuvuc">Ca Đặt lịch</label>
            <br />
            <input
              className="  !w-[150px]"
              placeholder="HH:mm:ss"
              type="time"
              id="khuvuc"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <input
              className="  !w-[150px]"
              placeholder="HH:mm:ss"
              type="time"
              id="khuvuc"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
            <br />
            <br />
            <div className="infor1 !w-[600px]">
              <div className=" flex justify-center ">
                <button className="luu">
                  <AddTaskIcon className=" mr-1" />
                  Sửa Dữ Liệu
                </button>
                <button className="reset">
                  <RestartAltIcon className=" mr-1" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </AdminLayout>
    </div>
  );
};
