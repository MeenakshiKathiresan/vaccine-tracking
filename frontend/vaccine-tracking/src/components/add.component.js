import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Add = ()=>{
    return(
    <Link className="nav-link add-button">
      <AiFillPlusCircle size={40}/>
    </Link>)
}
export default Add;