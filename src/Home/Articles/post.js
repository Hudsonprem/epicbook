import React,{ useState, useContext} from "react";
import Comment from "./comment";
import { v4 as uuidv4 } from 'uuid';

import "./article.css";
// import $ from "jquery";
import {  ToastContainer , toast } from "react-toastify";
import {Option} from "../home";
import axios from "axios";

export const UpdateDetails = React.createContext();

export default function Post(props) {

  const baseUrl = "http://localhost:5000";

    const [previousData] = useState({
      _id: props.id,
      title: props.title,
      description: props.description,
      image:props.img
    });
    const [comment,setComment] = useState("");

    var date =  new Date(props.createdTime);

    const option = useContext(Option);
    function onClickEdit()
    {
      option("update",previousData)
    } 

    
 
  return (
    
         <div className="card main-card shadow p-3 mb-5 bg-white rounded" style={{ width: "100%" }} >
          <ToastContainer /> 
              <div className="text-left">
                <img
                  src={props.img}
                  alt="hello"
                  width="100%"
                  height="400px"
                />
                <h2>
                  <strong> {props.title}</strong>{" "}
                </h2>
        
                <h5>
                  by<strong> {props.publisher}</strong> <p className="text-muted font-weight-light">{date.toUTCString()}</p> 
                </h5>
                <p>
                {props.description}
                </p>
   
        
                  <div className=" d-flex  justify-content-between">
                  {(props.publisher === props.user[0].name ? 
                    <div>
                    <button type="button" className="btn btn-info"   onClick={e =>onClickEdit()} >Edit</button>{" "}
                    <button type="button" className="btn btn-danger" onClick={(e)=> {
                          axios.delete(baseUrl + "/post/delete/" + props.id)
                          .then(res => { toast.success(res.data)}).then(e => {window.location.reload()})
                          .catch(err =>{console.log(err)
                          });
                        }}>delete</button>
                    </div> : null)}
                    
          
                    <button type="button" className="btn btn-primary"
                      onClick={(e) => {
                        var x = document.getElementById("hello");
                        x.classList.toggle("d-none");
                      }}>
                      Replies <span className="badge badge-light">{props.comment.length}</span>
                    </button>
                  </div>  
                </div>
              <hr />
      <form className="container">
        <div className="row">
          <textarea className="col-10" placeholder="Comment" onChange={e => setComment(e.target.value)} value={comment} required/>
          <button type="button" className="btn btn-primary col-2" 
          onClick={()=> {
                      var obj= {
                      _id: props.id,
                      name:props.user[0].name,
                      comments: comment
                    }

            axios.put(baseUrl + "/post/comment",obj)
              .then(res => { toast.success(res.data)}).then(e => {window.location.reload()})
              
     }} >
            comment
          </button>
        </div>
      </form>
      <div className="d-none" id="hello">
      {
        props.comment.map( (e) => {
          return <Comment key={uuidv4()} CommentUser={e.name} date={e.date} comment={e.comments} />
        })
      }
      </div>
    </div>
  );
}
