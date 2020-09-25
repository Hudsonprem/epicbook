import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <div className="header">
      <a href="#default" className="logo">
        Epic book
      </a>
      <div className="header-right">
        <a  href="#home">
          Home
        </a>
        <a href="#contact">Article</a>
        <a href="#about">Create</a>
        <a 
        className="active" 
        href="#about" 
        onClick = {
                ()=> {
                    localStorage.clear();
                    
                }
            }>
        log out</a>
      </div>
    </div>
  );
}
