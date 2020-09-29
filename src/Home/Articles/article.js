import React from "react";
import Post from "./post";

import LIBRARY from "../Main/library.png"

export default function Article(props) {
  return (
    <div >
        <div className="row">
    <div className="col-sm-8">{props.data.map((e) =>  <Post key={e._id} id={e._id} img={e.img} publisher={e.publisher} title={e.title} createdTime={e.createdTime} description={e.description} user={props.data2} comment={e.comments}/>)}</div>
    <div className="col-sm-4 intro">
        <div className="card main-card shadow p-3 mb-2 bg-white rounded " style={ {marginTop:"22px"}}>
            <img src={LIBRARY} className="card-img-top rounded" alt="..." />
            <div className="card-body" style ={{padding:0, marginTop:"2rem"}}>
              <h2 className="card-text">Hello World </h2> <p className=""><strong  className="text-uppercase h4">{props.data2[0].name}</strong> <span className="h5 font-weight-light">you can add/edit/delete your page to Epic book. Start posting by clicking create </span></p>
            </div>
      </div>
    </div>
    </div>
    </div>
  )
}
