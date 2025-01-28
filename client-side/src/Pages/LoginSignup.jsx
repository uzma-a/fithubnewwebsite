import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg_Img from "../assets/GymHeroBg.jpg";
import axios from "axios";
import { toast } from "react-hot-toast";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    axios.post('https://fithub-backend.vercel.app/login', { email, password })

      .then((response) => {
        if (response.status === 200) {
          toast.success("Login Successfully");
          // Store the token in localStorage
          localStorage.setItem("userToken", response.data.token);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            toast.error("Incorrect password. Please try again.");
          } else if (error.response.status === 404) {
            toast.error("User not found! Please signup to login.");
          } else {
            toast.error("Something went wrong. Please try again later.");
          }
        } else {
          toast.error("Network error. Please check your connection.");
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed justify-center relative"
      style={{
        backgroundImage: `url(${bg_Img})`,
      }}
    >
      {/* Toastify Container */}
      <ToastContainer />

      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Logo and Logout Button */}
      <div className="flex items-center justify-between mb-6 px-6 md:px-20 relative z-10">
        <Link to="/">
          <div id="logo-style" className="text-4xl sm:text-3xl font-bold text-white cursor-pointer">
            FitHub
          </div>
        </Link>
        <button
          onClick={handleLogout}
          className="py-1 px-4 bg-cyan-800 font-bold text-lg rounded-md shadow-[-7px_7px_0px_#fff] border border-transparent hover:text-gray-300"
        >
          Logout
        </button>
      </div>

      {/* Form Container */}
      <div className="w-full sm:w-96 md:w-[420px] bg-[rgba(53,49,110,0.16)] p-6 sm:p-8 md:p-10 mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-300">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password..."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 bg-gray-600 text-white mb-1 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-sm text-gray-400 mt-1"
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border-none outline-none p-4 bg-cyan-800 text-white rounded-md text-lg font-medium mt-2 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-3 gap-1 flex">
          <p className="font-medium">New to FitHub?</p>
          <Link className="text-blue-700" to="/register">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
