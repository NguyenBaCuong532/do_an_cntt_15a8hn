import React from "react";
import AdminLayout from "../../components/layout/adminlayout";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import "./index.css";
function Formtao() {
    return (
        <div>
            <AdminLayout>
                <h3 className="text-center font-bold text-[2.75rem] py-[1.25rem]">Quản Lý Cấu Hình</h3>
                <div className="form-cauhinh">
                    <div className="infor">
                        <label htmlFor="ma-cauhinh">Mã Cấu Hình</label><br />
                        <input type="text" id="ma-cauhinh" /><br />
                        <label htmlFor="ma-lm">Loại Máy</label><br />
                        <input type="text" id="ma-lm"/><br />
                        <label htmlFor="ma-hdh">Hệ Điều Hành</label><br />
                        <input type="text" id="ma-hdh"/><br />
                        <label htmlFor="ghichu">Ghi Chú</label><br />
                        <textarea className="text-tarea" id="ghichu"></textarea><br />
                    </div>
                    <div className="infor1">
                        <h2>Xuất Dữ Liệu</h2>
                        <div className=" flex justify-center">
                            <button className="luu"><AddTaskIcon className=" mr-1" />Lưu Dữ Liệu</button>
                            <button className="reset"><RestartAltIcon className=" mr-1" />Reset</button>
                        </div>
                        <div>
                            <label>CPU</label><br />
                            <input /><br />
                            <label>RAM</label><br />
                            <input /><br />
                            <label>Ổ Cứng</label><br />
                            <input /><br />
                            <label>VGA</label><br />
                            <input /><br />

                        </div>


                    </div>
                </div>

            </AdminLayout>
        </div>
    );
}

export default Formtao;
