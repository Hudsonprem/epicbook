import React from 'react'
import { Route, Redirect } from "react-router-dom";

const Protected = ({component, ...some}) => 
{
    let Rendercomponents = component;
    let hasToken = JSON.parse(localStorage.getItem("auth"));
    return (
    <Route
        {...some}
        render = {props => {
            return hasToken !== null  ? 
            (
                <Rendercomponents {...props}/>
            ) : (
                <Redirect 
                to ={{
                    pathname :"/login"
                }}
                />
            )
        }}
        />  
     )
}

export default Protected
