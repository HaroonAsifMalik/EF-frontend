import React, { useState } from "react";
import Input from "../input/Input";

export function RegisterForm() {
  const [credentials, setCredentials] = useState({
    display_name: "",
    email: "",
    password: "",
    confirm_password: "",
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

    if (credentials.password !== credentials.confirm_password) {
      console.log("Passwords do not match!");
      return;
    }

    fetch("http://localhost:8000/api/v1/accounts/sign-up/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access && data.refresh) {
          localStorage.setItem("accessToken", data.access);
          localStorage.setItem("refreshToken", data.refresh);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "/accountlink";
        } else {
          console.log(data.message || "Something went wrong!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("An error occurred. Please try again.");
      });

    setCredentials({
      display_name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  }

  return (
    <div className="container mx-auto p-6 h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="Name"
            type="text"
            name="display_name"
            value={credentials.display_name}
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
            name="confirm_password"
            value={credentials.confirm_password}
            onChange={handleChange}
          />

          <button className="text-white mt-4 bg-tertiary hover:bg-secondary bg-black hover:bg-gray-700 font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
            Register
          </button>
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <a
              href="/Login"
              className="text-tertiary hover:text-secondary transition duration-200 underline"
            >
              <strong>Login</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
