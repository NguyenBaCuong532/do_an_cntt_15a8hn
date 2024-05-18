import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export const User=({user})=>{
    console.log(user);
    return(     
          <div>
            <button
              className="bg-gradient-to-r from-green-400 to-green-600 text-[#ffffff] 
           !w-60 !h-40 mt-6 rounded-lg 
           "
         >
              <PersonIcon className=" !w-20 !h-20 " />
              <p className=" font-bold">User 02</p>
              <button>
                {" "}
                <Link to="/formtaopm">
                  <BorderColorIcon className=" bg-gradient-to-r from-yellow-500 to-yellow-700 !w-8 !h-8 py-1 rounded-lg" />
                </Link>
              </button>
              <DeleteForeverIcon className=" ml-5 bg-gradient-to-r from-red-700 to-red-500 rounded-lg !w-8 !h-8 py-1" />
            </button>
          </div>
        
       
      
    )
}