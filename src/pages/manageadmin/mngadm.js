import React from "react";
import { Link } from "react-router-dom";
import Td from './tabledata';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import S from './Select.js';



 

function mngadm() {
    
    
    return (
        <div className="mngadm flex flex-row">
             <div className="links flex flex-col w-64 bg-black text-white text-center ">
                <Link to="/" className="h-36 justify-center items-center p-12 bg-gradient-to-br from-black via-black to-lime-900 "> Home </Link>
                <Link to="/manageadmin" className="h-36 justify-center items-center p-12 bg-gradient-to-br from-black via-black to-lime-900 "> Manage Admins </Link>
                <Link to="/queries" className="h-36 justify-center items-center p-12 bg-gradient-to-br from-black via-black to-lime-900 "> Queries and requests </Link>
             </div>
             <div className="rows">
                <S/>
             </div>
             </div>
       
    );
}

export default mngadm;