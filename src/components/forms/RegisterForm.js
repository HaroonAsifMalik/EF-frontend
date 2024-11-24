import React, { useState } from "react";
import Input from "../input/Input";

export function RegisterForm() {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    setCredentials({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="container mx-auto p-6 h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Name"
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            value={credentials.confirmPassword}
            onChange={handleChange}
          />

          <button className="text-white mt-4 bg-tertiary hover:bg-secondary bg-black hover:bg-gray-700 font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
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