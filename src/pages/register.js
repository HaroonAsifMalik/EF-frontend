import React from "react";
import Navbar from "../components/Common/NavBar";
import Footer from "../components/Common/footers/Footer";
import RegisterForm from "../components/forms/RegisterForm";
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