import React from "react";
import logo from "../assets/logo.jpeg";




function Navbar() {
    

    return (
   
        <div className="flex  justify-between px-4 py-2 bg-black " >
            <div className="nil">
                <img src={logo} alt="" className="h-16"/>
            </div>
            <div className="text-white flex justify-center items-center mx-3">Welcome!SuperAdmin.</div>

        </div>
    );
}

export default Navbar;