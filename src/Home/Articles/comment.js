import React from "react";

export default function Comment(props) {

  var imgurl = "https://api.adorable.io/avatars/130/" + props.CommentUser + "png";
  return (
        <div  className="container">
          <hr />
          <div className=" row " >
            <div className="col-2">
              <img
                className="rounded"
                src= {imgurl}
                alt="avatar"
                style={{ width: "70px",  backgroundColor:"#bfcdea" }}
              />
            </div>
            <div className="col-10 text-left">
              <p className="badge badge-info ">
              {props.CommentUser}
               
              </p> <span className="text-muted font-italic ">
                  {props.date}
                </span>
              <p>
                {props.comment}
              </p>
              <br />
            </div>
          </div>
        </div>
  );
}
