import React, { useState, useEffect, useRef } from 'react';
import './HeroSection';
import bg from '../../assets/bg.jpg';
import menu from '../../assets/menu.svg';
import facebook from '../../assets/facebook_icon.svg';
import twitter from '../../assets/twitter_icon.svg';
import instagram from '../../assets/instagram_icon.svg';
import youtube from '../../assets/youtube_icon.svg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Reference to the menu element
  const menuRef = useRef(null);

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="main-container h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${bg})`, // Apply the background image
      }}
    >
      {/* Dimmed overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dim effect */}

      {/* Navbar Section */}
      <div className="nav flex items-center justify-between py-4 sm:py-6 px-6 sm:px-10 lg:px-20 relative z-10">
        <Link to="/">
          <p className="text-3xl sm:text-3xl font-bold text-white">FitHub</p>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className=" text-3xl">
            <img src={menu} alt="menu icon" /> {/* Hamburger Icon */}
          </button>
        </div>

        {/* Desktop and Tablet Menu */}
        <div className="options hidden lg:flex items-center">
          <ul  data-aos="zoom-out" className="list-none flex items-center justify-center gap-5 sm:gap-10 text-sm sm:text-lg py-2 mt-2 px-2 sm:px-10 rounded-full">
            <Link to="/service">
              <li className="cursor-pointer hover:underline underline-offset-4 decoration-2 text-gray-100 hover:text-gray-300">
                Services
              </li>
            </Link>
            <Link to="/trainers">
              <li className="hover:underline underline-offset-4 decoration-2 text-gray-100 hover:text-gray-300 cursor-pointer">
                Trainers
              </li>
            </Link>
            <Link to="/plans">
              <li className="hover:underline underline-offset-4 decoration-2 text-gray-100 hover:text-gray-300 cursor-pointer">
                Membership Plans
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:underline underline-offset-4 decoration-2 text-gray-100 hover:text-gray-300 cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:block">
          <Link to="/register">
            <button className="py-1 sm:py-2 text-white px-6 sm:px-6 bg-cyan-800 font-normal text-sm sm:text-xl rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff] hover:bg-cyan-900">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      {menuOpen && (
        <div
          ref={menuRef} // Assign ref to the menu container
          className="lg:hidden fixed top-0 right-0 bottom-0 bg-black bg-opacity-80 z-20 w-2/3 transition-all ease-in-out duration-300"
        >
          <div className="w-full h-full flex flex-col  items-center justify-center">
            <ul className="list-none text-white flex flex-col items-center justify-center gap-10 text-center space-y-4">
              <Link to="/service">
                <li className="cursor-pointer hover:underline">Services</li>
              </Link>
              <Link to="/trainers">
                <li className="hover:underline underline-offset-4 decoration-2 hover:text-gray-300 cursor-pointer">
                  Trainers
                </li>
              </Link>
              <Link to="/plans">
                <li className="cursor-pointer hover:underline">Membership Plans</li>
              </Link>
              <Link to="/contact">
                <li className="cursor-pointer hover:underline">Contact Us</li>
              </Link>
              <li>
                <Link to="/register">
                  <button className="py-2 sm:py-2 text-white px-6 sm:px-8 bg-cyan-800 font-medium text-sm sm:text-xl rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff] hover:bg-cyan-900">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero-sec flex flex-col sm:flex-row justify-center items-center gap-12 w-[94%] sm:w-[80%] mx-auto mt-10 sm:mt-20 lg:mt-16 relative z-10">
        {/* Text Section */}
        <div className="first-sec flex flex-col text-center sm:text-left">
          <h1  data-aos="fade-right" data-aos-duration='600' className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mt-14 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            YOUR FITNESS JOURNEY STARTS HERE
          </h1>
          <p data-aos="zoom-in-left" data-aos-duration='500' data-aos-delay="200" className="text-base mt-8 sm:text-lg md:text-lg font-extrabold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Welcome to{' '}
            <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
              FitHub
            </span>
            , your ultimate{' '}
            <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
              fitness hub
            </span>
            . Achieve your goals with{' '}
            <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
              expert trainers
            </span>{' '}
            and{' '}
            <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
              flexible plans
            </span>
            .{' '}
            <span className="text-lg sm:text-xl bg-gradient-to-t from-gray-200 to-cyan-600 bg-clip-text text-transparent">
              Start your transformation
            </span>{' '}
            today!
          </p>
          <Link to="/plans">
            <button data-aos="fade-right" data-aos-duration='600' data-aos-delay="200" className="py-2 sm:py-2 mt-6 sm:mt-12 text-white px-12 sm:px-14 bg-cyan-800 text-xl sm:text-2xl font-semibold rounded-md border-solid border-black shadow-[-7px_7px_0px_#fff] hover:bg-cyan-900">
              Get Started
            </button>
          </Link>
        </div>

        {/* Social Media Section */}
        <div className="box w-[80px] sm:w-[100px] lg:w-[120px] shadow-md">
          <ul data-aos="slide-up" data-aos-duration='1000' className="flex flex-col items-center gap-14">
            <img
              className="w-8 sm:w-10 lg:w-12 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
              src={facebook}
              alt="facebook"
            />
            <img
              className="w-8 sm:w-10 lg:w-12 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
              src={twitter}
              alt="twitter"
            />
            <img
              className="w-8 sm:w-10 lg:w-12 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
              src={instagram}
              alt="instagram"
            />
            <img className="w-8 sm:w-10 lg:w-12 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
              src={youtube}
              alt="youtube"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
