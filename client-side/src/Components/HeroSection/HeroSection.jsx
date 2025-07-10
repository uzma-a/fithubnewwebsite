import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Facebook, Twitter, Instagram, Youtube, Play, Zap, Target, Users } from 'lucide-react';

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef(null);

  // Toggle hamburger menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let navigate = useNavigate();

  // Navigation handler function
  const handleNavigation = (item) => {
    // Replace this with your actual navigation logic
    const routeMap = {
      
      'Trainers': '/trainers',
      'Membership Plans': '/plans',
      'Contact Us': '/contact'
    };
    
    // Using React Router navigate
    navigate(routeMap[item]);
    
    // For demonstration purposes, showing alert
    // console.log(`Navigating to: ${routeMap[item]}`);
    // alert(`Navigating to: ${routeMap[item]}`);
    
    // Close mobile menu after navigation
    setMenuOpen(false);
  };

  // Close the menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Target, text: "Personalized Goals" },
    { icon: Users, text: "Expert Trainers" },
    { icon: Zap, text: "Quick Results" }
  ];

  const navigationItems = [
    
    { label: 'Trainers', route: '/trainers' },
    { label: 'Membership Plans', route: '/plans' },
    { label: 'Contact Us', route: '/contact' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-600/20 to-slate-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-700/10 to-cyan-800/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="relative z-50 flex items-center justify-between py-6 px-6 sm:px-10 lg:px-20">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            FitHub
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.label)}
                className="px-4 rounded-xl py-2  text-slate-200 transition-all duration-300 hover:bg-cyan-600 hover:text-slate-200 hover:rounded-[10px_20px_30px_40px]"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
        
          <button onClick={() =>{navigate('/register')}} className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
            Register
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden fixed top-0 right-0 bottom-0 bg-black/90 backdrop-blur-md z-40 w-2/3 transition-all ease-in-out duration-300"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.label)}
                className="text-white text-lg hover:text-cyan-300 transition-colors bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent">
                YOUR FITNESS
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-gray-300 bg-clip-text text-transparent">
                JOURNEY STARTS
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                HERE
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to <span className="text-cyan-400 font-semibold">FitHub</span>, your ultimate fitness destination. 
              Transform your body and mind with our <span className="text-cyan-400 font-semibold">expert trainers</span> and cutting-edge facilities.
            </p>
          </div>

          {/* Feature Pills */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <feature.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-cyan-800 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2">
                <span>Get Started</span>
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
              </button>
              <button className="group px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/10 transition-all duration-200 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: '10K+', label: 'Happy Members' },
                { number: '50+', label: 'Expert Trainers' },
                { number: '24/7', label: 'Access' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="flex flex-col space-y-4">
            {[
              { Icon: Facebook, color: 'hover:text-blue-500' },
              { Icon: Twitter, color: 'hover:text-sky-400' },
              { Icon: Instagram, color: 'hover:text-pink-500' },
              { Icon: Youtube, color: 'hover:text-red-500' }
            ].map(({ Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg text-gray-300 ${color} transition-all duration-200 hover:bg-white/20 hover:scale-110 hover:rotate-6`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;