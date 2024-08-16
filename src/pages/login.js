// Login.js
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { LoginForm } from '../components/loginform';

const Login = () => {
  return (
    <div>
     <Navbar/>
     <LoginForm/>
     <Footer/>
    </div>
  );
};

export default Login;
