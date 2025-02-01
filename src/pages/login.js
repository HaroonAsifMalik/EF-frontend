import React from 'react';
import Navbar from '../components/Common/NavBar';
import Footer from '../components/Common/footers/Footer';
import LoginForm from '../components/loginform';

const Login = ({ setIsAuthenticated }) => {
  return (
    <div>
      <Navbar />
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
      <Footer />
    </div>
  );
};

export default Login;