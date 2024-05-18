import React from "react";
import AdminLayout from "../../components/layout/adminlayout";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "./index.css";
function Formtaotb() {
    return (
        <div>
            <AdminLayout>
                <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem] mr-20">Quản Lý Thiết Bị</h3>
                <div className="form-cauhinh">
                    <div className="infor-tb">
                        <div className=" flex"> 

                        <div className=" mr-10">
                            <label htmlFor="ma-cauhinh">Mã Thiết Bị</label><br />
                        <input type="text" id="ma-cauhinh" /><br />
                        <label htmlFor="ma-lm">Tên Thiết Bị</label><br />
                        <input type="text" id="ma-lm"/><br />
                        <label htmlFor="ghichu">Loại Thiết Bị</label><br />
                        <input type="text" id="ma-hdh"/><br />
                        <label htmlFor="ma-hdh">Số Lượng</label><br />
                        <input type="text" id="ma-hdh"/><br />
                        </div>
                        <div className=" ml-10"> 
                        <label htmlFor="ghichu">Nhà Sản Xuất</label><br />
                        <input type="text" id="ma-hdh"/><br />
                        <label htmlFor="ghichu">Năm Sản Xuất</label><br />
                        <input type="text" id="ma-hdh"/><br />
                        <label htmlFor="ghichu">Thông Số</label><br />
                        <input type="text" id="ma-hdh"/><br />
                       </div>
                        </div>
                        <label htmlFor="ghichu">Ghi Chú</label><br />
                        <textarea className="text-tarea" id="ghichu"></textarea><br />
                    </div>
                    <div className="infor-tb1">
                        <h2>Xuất Dữ Liệu</h2>
                        <div className=" flex justify-center">
                            <button className="luu"><AddTaskIcon className=" mr-1" />Lưu Dữ Liệu</button>
                            <button className="reset"><RestartAltIcon className=" mr-1" />Reset</button>
                        </div>
                       


                    </div>
                </div>

            </AdminLayout>
        </div>
    );
}

export default Formtaotb;
