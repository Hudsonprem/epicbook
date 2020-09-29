import React from "react";
import "./main-header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    
    <div className="header">
      <a href="#default" className="logo active"> 
        Epic book
      </a>
      <div className="header-right">

      <Link to="/login" >Login</Link>
      <Link to="/register" >Register</Link>
  

      </div>
    </div>
  );
}
