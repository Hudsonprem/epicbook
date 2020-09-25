import React,{useEffect , useState} from 'react';
// import Cards from "../Card/card";
import Header from "./header/header";
import Footer from "./Footer/footer";
import "./home.css";

import axios from "axios";

const Home = (props) => {
    const [json, setJson] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:5000/user/getall",{
            headers:{"auth" : `${ JSON.parse(localStorage.getItem('auth'))}`}
        })
        .then(res => setJson(res.data))
        .catch(err =>{
        })
    }, [])


    return (
        <div className="home">
        {console.log(json)}
        <Header />
        <div className="container1">
             <img  src="http://images.episodelife.com/backgrounds/EXT_LIBRARY_NIGHT.png" alt="img" style= {{width:"100%"}}/>

            <div className="centered">
                  <p>Welcome to Epic book {json.map((e) => <strong> {e.name} </strong>)}</p>
                  <p >To read Articles click Articles and To post Articles click create </p>
             </div>
        </div>

                        {/* <div className="home">
                            <div className="home_container">
                                    {
                                    json.map(e => 
                                            <div className="home_row">
                                                <Cards  title = {e.fname} /> 
                                                <Cards  title = {e.fname} /> 
                                            </div>)
                                    }            
                            </div>
                        </div> */}
        
        <Footer />
        </div>
    )
}

export default Home
