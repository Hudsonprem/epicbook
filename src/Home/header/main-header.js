import React from "react";
import "./main-header.css";

export default function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo active">
        Epic book
      </a>
      <div className="header-right">
        <a href="/register" >Register</a>  
        <a href="/login" >Login</a>
      </div>
    </div>
  );
}
