import React from "react";
import AdminLayout from "../../components/layout/adminlayout";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "./index.css";
function Formqlm() {
    return (
        <div>
            <AdminLayout>
                <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">Quản Lý Phòng Máy</h3>
                <div className="form-cauhinh">
                    <div className="infor">
                        <label htmlFor="mp">Mã Máy</label><br />
                        <input type="text" id="mp" /><br />
                        <label htmlFor="tp">Tên Máy</label><br />
                        <input type="text" id="tp" /><br />
                        <label htmlFor="lp">Số Thứ Tự</label><br />
                        <input type="text" id="lp" /><br />
                        <label htmlFor="khuvuc">Cấu Hình</label><br />
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
                                <tr>
                                     <td>
                                    <select className='chon'>
                                        <option selected disabled >Trạng thái hoạt động</option>
                                        <option value=''>Đang sử dụng</option>
                                        <option value=''>Chưa sử dụng</option>
                                    </select>
                                </td>  </tr>
                                <tr>
                                    <td>
                                        <h3 className=" mt-9"> Ngày Nhập</h3>
                                    </td>
                                    
                              
                                </tr>
                                <tr>
                                    <td>
                                       <input type="date"></input>
                                    </td>
                                    
                              
                                </tr>
                               
                            </table>

                        </div>


                    </div>
                </div>

            </AdminLayout>
        </div>
    );
}

export default Formqlm;
