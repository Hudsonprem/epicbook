import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    
<div className="header">
      <a href="#default" className="logo">
        Epic book
      </a>
      <div className="header-right">
        <a  href="#main" onClick = {()=> props.onClick("main")}> Home </a>
        <a href="#Articles" onClick = {()=> props.onClick("articles")}>Article</a>
        <a href="#compose"  onClick = {()=> props.onClick("compose")} >Create</a>
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


