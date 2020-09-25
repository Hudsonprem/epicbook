import React from 'react';
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Protected from "./Home/protected";
import Home from "./Home/home";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path ="/login" component ={SignIn} /> 
        <Route exact path ="/register" component ={SignUp} />
        <Protected exact path ="/" component ={Home} />
        </Switch>
    </div>
  );
}

export default App;
