import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
export function Register() {
    return (
        <div>
        <Navbar/>
        <RegisterForm/>
        <Footer/>
       </div>
    );
  }
  
  export default Register;