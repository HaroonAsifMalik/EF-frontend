// Login.js
import React from 'react';
import Navbar from '../components/Common/NavBar';
import Footer from '../components/Common/footers/Footer';
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
