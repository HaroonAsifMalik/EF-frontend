import Input from "../input/Input";
import React from "react";

export function LoginForm() {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:8000/api/v1/accounts/sign-in/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed! Please check your credentials.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.access && data.refresh) {
          localStorage.setItem("accessToken", data.access);
          localStorage.setItem("refreshToken", data.refresh);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "/dashboard";
        } else {
          setErrorMessage(data.message || "Login failed!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage(error.message || "An unexpected error occurred.");
      });

    setCredentials({
      email: "",
      password: "",
    });
  }

  return (
    <div className="container mx-auto p-6 h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login To Your Account
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="E-mail"
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

          <button className="mt-4 bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
            Login
          </button>

          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-tertiary hover:text-secondary transition duration-200 underline"
            >
              <strong>Register</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
