import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg_Img from "../assets/GymHeroBg.jpg";
import axios from 'axios'
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login', {
        email, 
        password
      });
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }

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
        <button className="py-1 px-4 bg-cyan-800 font-bold text-lg rounded-md shadow-[-7px_7px_0px_#fff] border border-transparent hover:text-gray-300">
          Logout
        </button>
      </div>

      {/* Form Container */}
      <div className="w-full sm:w-96 md:w-[420px] bg-[rgba(53,49,110,0.16)] p-6 sm:p-8 md:p-10 mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
          Login
        </h1>
        <form onSubmit={loginUser} className="space-y-4">

          <div>

          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-300">
              Email
            </label>
            <input
               type="email"
               placeholder="enter your email..."
               className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
               value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}/>
          </div>
          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-300">
              Password
            </label>
            <input
               type="password"
               placeholder="enter your password..."
               className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
               value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
          </div>
          <button type="submit" className="w-full border-none outline-none p-4 bg-cyan-800 text-white rounded-md text-lg font-medium mt-2 cursor-pointer">Continue</button>
        </form>

      </div>
    </div>
  );
};

export default LoginSignup;
