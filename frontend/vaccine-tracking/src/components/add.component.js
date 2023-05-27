import React, { Component } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default class Add extends Component {
  render() {
    return(
    <Link className="nav-link add-button">
      <AiFillPlusCircle size={40}/>
    </Link>)
  }
}