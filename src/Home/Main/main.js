import React from 'react';
import LIBRARY from "./library.png";
import "./main.css";

export default function main(props) {
    return (
        <div className="main-menu">
             <div className="container1">
             <img  src={LIBRARY} alt="img" style= {{width:"100%"}}/>

            <div className="centered introword">
                  <p>Welcome to Epic book {props.data.map((e) => <strong key={e.name}> {e.name} </strong>)}</p>
                  <p >To read Articles click Articles and To post Articles click create </p>
             </div>
        </div>
        </div>
    )
}
