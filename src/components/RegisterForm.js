import React from "react";
import Input from "./ComponentsForComponents/Input";

export function RegisterForm() {
    return (
  
      <div className="container mx-auto p-6 h-screen flex justify-center items-center ">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
          <form className="flex flex-col gap-4">

            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />

            <button className="text-white mt-4 bg-tertiary hover:bg-secondary bg-black hover:bg-gray-700  font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
              Register
            </button>
            <p className="text-sm text-gray-600 text-center mt-4">
              Already have an account?{' '}
              <a href="/Login" className="text-tertiary hover:text-secondary transition duration-200 underline">
                <strong>Login</strong>
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
  
  export default RegisterForm;