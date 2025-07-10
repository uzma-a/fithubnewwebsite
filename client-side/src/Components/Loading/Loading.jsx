import React, { useState, useEffect } from "react";
import { Zap, Dumbbell, Target, TrendingUp, Activity } from "lucide-react";

function Loading() {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingTexts = [
    "Powering up your fitness journey...",
    "Loading muscle-building algorithms...",
    "Synchronizing with your goals...",
    "Preparing your transformation...",
    "Almost ready to crush it!"
  ];

  const motivationalQuotes = [
    "Every rep counts",
    "Push your limits",
    "Transform yourself",
    "Be unstoppable",
    "Embrace the grind"
  ];

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Change loading text
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-gray-600/20 to-slate-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-700/10 to-cyan-800/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Lightning bolts */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse opacity-20"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            >
              <Zap className="w-8 h-8 text-cyan-400 transform rotate-12" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* Logo Section */}
        <div className="mb-12 animate-bounce">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center animate-pulse">
                <Dumbbell className="w-10 h-10 text-white animate-spin" style={{animationDuration: '3s'}} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              FitHub
            </h1>
          </div>
        </div>

        {/* Central Loading Animation */}
        <div className="relative mb-8">
          {/* Rotating rings */}
          <div className="relative w-40 h-40 mb-8">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 animate-spin" style={{animationDuration: '3s'}}></div>
            
            {/* Middle ring */}
            <div className="absolute inset-3 rounded-full border-4 border-cyan-400/40 animate-spin" style={{animationDuration: '2s', animationDirection: 'reverse'}}></div>
            
            {/* Inner ring */}
            <div className="absolute inset-6 rounded-full border-4 border-cyan-300/60 animate-spin" style={{animationDuration: '1s'}}></div>
            
            {/* Progress ring */}
            <div className="absolute inset-0 rounded-full">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.2)"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                  className="transition-all duration-300"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0891b2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Center icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {[Activity, Target, TrendingUp, Zap].map((Icon, index) => (
                  <Icon
                    key={index}
                    className={`absolute w-8 h-8 text-cyan-400 transition-all duration-500 ${
                      Math.floor(progress / 25) === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-md mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-cyan-400 font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mb-8 h-12 flex items-center justify-center">
          <p className="text-lg text-gray-300 animate-pulse transition-all duration-500">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Motivational Quote */}
        <div className="text-center mb-8">
          <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            {motivationalQuotes[currentText]}
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          {[
            { value: Math.round(progress * 100), label: 'Members', suffix: '+' },
            { value: Math.round(progress * 0.5), label: 'Trainers', suffix: '+' },
            { value: Math.round(progress * 0.24), label: 'Hours', suffix: '/7' }
          ].map((stat, index) => (
            <div key={index} className="animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-xl font-bold text-cyan-400">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Muscle flex animation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-8 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating workout icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '4s'
              }}
            >
              <Dumbbell className="w-6 h-6 text-cyan-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Loading;