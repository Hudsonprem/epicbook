import React,{useEffect , useState} from 'react';
import Header from "./header/header";
import Footer from "./Footer/footer";
import Main from "./Main/main";
import Compose from "./compose/compose";
import "./home.css";
import axios from "axios";
import Article from './Articles/article';
import Update from "./compose/update";


export const Option = React.createContext();
const Home = (props) => {
    const baseUrl = "http://localhost:5000";
    const [json, setJson] = useState([]);
    const [posts, setposts] = useState([]);
    const [updetails, setupdetails] = useState({});
    const [show, setShow] = useState("main");

    function showComponent(componentName) {
        setShow(componentName);
      } 

    function showUpdate(componentName,details) {
        setupdetails(details);
        setShow(componentName);
      } 

    const components = {
        "compose":     <Compose data={json} />,
        "articles":  <Article data={posts} data2={json} onClick = {() => showComponent()} />,
        "main":    <Main data={json} onClick = {() => showComponent()}/>,
        "update":  <Update previous = {updetails}/>
    }

   

    useEffect(() => {
        axios.get(baseUrl +"/user/getall",{
            headers:{"auth" : `${ JSON.parse(localStorage.getItem('auth'))}`}
        })
        .then(res => setJson(res.data))
        .catch(err =>{
            console.log(err)
        });

        axios.get(baseUrl + "/post/getall")
        .then(res => setposts(res.data))
        .catch(err =>{
            console.log(err)
        });
    },[])


    return (
        <Option.Provider value ={showUpdate}>
        <div className="home">
        <Header onClick = {(e) =>  showComponent(e)} />
        {components[show]}
        <Footer />
        </div>
        </Option.Provider>
    )
    }

export default Home
