import React from "react";
import "./siginUp.css"
import Header from "../Home/header/main-header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";


function SignUp(props) {
    const baseUrl = "https://epic-book.herokuapp.com";
    const formik = useFormik({
        initialValues : {
            Name:"",
            Email:"",
            Password:"",
            confirmpassword:"",
        },
        validationSchema:yup.object({
            Name: yup.string()
            .required("Name is required")
            .strict()
            .trim()
            .min(3 ,"Minimun 3 character required")
            .max(15 ,"Maxmun 15 character only"),


            Email: yup.string()
            .email()
            .required("Email is required"),
          
            Password: yup.string()
            .required("password is required"),
            
            confirmpassword: yup.string()
            .oneOf([yup.ref("Password"), null], "confirm password and password must me same")
            .required("password is required"),


        }),
        onSubmit: (userInputData)=>{
            axios.post(baseUrl + "/user/register",userInputData)
            .then(res => {
                toast.success("successfully");
                props.history.push("/login");
            })
            .catch(err => {
                toast.error(err.response.data)    
            })
            
        }
    } )

   

  
        return (
            <div>
            <div className ="signUp-div-background"> 
            
            <form className="signUp-div" autoComplete="off" onSubmit = {formik.handleSubmit}>
                <ToastContainer />
               
                <h3 className="text-center">SIGN UP</h3>
                <div className="form-group">
                    <label >Name</label>
                    <input 
                    className="form-control"
                    type="text"  
                    name="Name"
                    onChange={formik.handleChange}
                    value={formik.values.Name}  
                    placeholder="Name" />
                </div>
                {formik.errors.Name ? (<div className="text-danger">
                        {formik.errors.Name}
                </div>): null }


                <div className="form-group">
                    <label>Email</label>
                    <input 
                    className="form-control"
                    type="text"  
                    name="Email"
                    onChange={formik.handleChange}
                    value={formik.values.Email}  
                    placeholder="email" />
                </div>
                {formik.errors.Email ? (<div className="text-danger">
                        {formik.errors.Email}
                </div>): null }

                <div className="form-group">
                    <label >Password</label>
                    <input 
                    className="form-control"
                    type="password"  
                    name="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}  
                    placeholder="Password" />
                </div>

                {formik.errors.Password ? (<div className="text-danger">
                        {formik.errors.Password}
                </div>): null }

                <div className="form-group">
                    <label >confirm Password</label>
                    <input 
                    className="form-control"
                    type="password"  
                    name="confirmpassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmpassword}  
                    placeholder="confirm Password" />
                </div>

                {formik.errors.confirmpassword ? (<div className="text-danger">
                        {formik.errors.confirmpassword}
                </div>): null }

                <button type="submit" className="btn btn-success btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered!! Click Login
                </p>
            </form>
            <Header />
            </div>
            <div className="custom-shape-divider-bottom-1600971516">
            
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
            </div>
            </div>
        );
    }


export default SignUp;