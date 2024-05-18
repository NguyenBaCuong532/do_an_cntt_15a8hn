import React from "react";
import AdminLayout from "../../components/layout/adminlayout";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "./index.css";
function Formtaopm() {
    return (
        <div>
            <AdminLayout>
                <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">Quản Lý Phòng Máy</h3>
                <div className="form-cauhinh">
                    <div className="infor">
                        <label htmlFor="mp">Mã Phòng</label><br />
                        <input type="text" id="mp" /><br />
                        <label htmlFor="tp">Tên Phòng</label><br />
                        <input type="text" id="tp" /><br />
                        <label htmlFor="lp">Loại Phòng</label><br />
                        <input type="text" id="lp" /><br />
                        <label htmlFor="khuvuc">Khu Vực</label><br />
                        <input type="text" id="khuvuc" /><br />

                    </div>
                    <div className="infor1">
                        <h2>Xuất Dữ Liệu</h2>
                        <div className=" flex justify-center">
                            <button className="luu"><AddTaskIcon className=" mr-1" />Lưu Dữ Liệu</button>
                            <button className="reset"><RestartAltIcon className=" mr-1" />Reset</button>
                        </div>
                        <div>
                            <h3>Trạng Thái</h3>

                            <table>
                                <td>
                                    <select className='chon'>
                                        <option selected disabled>Trạng thái hoạt động</option>
                                        <option value=''>Đang sử dụng</option>
                                        <option value=''>Chưa sử dụng</option>
                                    </select>
                                </td>
                            </table>

                        </div>


                    </div>
                </div>

            </AdminLayout>
        </div>
    );
}

export default Formtaopm;