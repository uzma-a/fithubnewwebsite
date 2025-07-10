import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Users, Trophy, Heart, Dumbbell, Target, Award, Zap } from "lucide-react";

const AboutSection = () => {

  let navigate = useNavigate();
  
  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Heading with Icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 shadow-xl">
            <Dumbbell className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text mb-4">
            About Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Intro Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto mb-20">
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <p className="text-xl font-medium text-gray-100 leading-relaxed">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold text-2xl">Welcome to FitHub</span>, where fitness meets inspiration! We are more than just a gym —{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">we are a vibrant community dedicated to helping individuals achieve their health and wellness goals</span>. Whether you're a beginner taking the first step on your fitness journey or an athlete pushing the limits,{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">our state-of-the-art facilities</span>,{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">certified trainers</span>, and{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">supportive environment</span> are here to guide you every step of the way.
              </p>
            </div>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              <p className="text-xl font-medium text-gray-100 leading-relaxed">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">At FitHub</span>, we believe in empowering our members to transform their lives. From personalized workout plans and expert-led group classes to tailored nutrition advice, we provide all the tools you need to succeed. Join us to experience a holistic approach to fitness that fuels both your body and mind. Together, let's redefine what it means to live a healthy, active lifestyle!
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent z-10"></div>
              <img
                className="h-[60vh] lg:h-[70vh] w-full object-cover"
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Gym Equipment"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
          {[
            { icon: Users, number: "5000+", label: "Happy Members" },
            { icon: Trophy, number: "15+", label: "Years Experience" },
            { icon: Award, number: "50+", label: "Expert Trainers" },
            { icon: Star, number: "4.9", label: "Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Vision and Why Choose Us Sections */}
        <div className="grid gap-12 lg:grid-cols-2 mb-20 max-w-7xl mx-auto">
          {/* Vision Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-300">
                Our mission is to inspire and motivate individuals to embrace a healthier lifestyle. We strive to offer top-notch facilities, experienced trainers, and personalized support to help every member unlock their full potential. With a focus on inclusivity, dedication, and innovation, we are committed to creating an environment where fitness becomes a rewarding and transformative journey for everyone.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-10 border border-gray-700/50 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Why Choose Us?
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Expert Trainers", desc: "Certified professionals passionate about your success." },
                  { icon: Dumbbell, title: "State-of-the-Art Equipment", desc: "Top-tier, regularly maintained gym equipment." },
                  { icon: Users, title: "Community Support", desc: "Join a welcoming, fitness-driven family." },
                  { icon: Star, title: "Flexible Plans", desc: "Memberships for all fitness levels and goals." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-cyan-400 font-bold text-lg">{item.title}: </span>
                      <span className="text-gray-300">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Image Grid Section */}
        <div className="text-center">
          <h3 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text mb-4">
            Transform Your Fitness Journey
          </h3>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Discover the power of transformation through our comprehensive fitness programs and world-class facilities
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                title: "Modern Equipment",
                desc: "State-of-the-art facilities"
              },
              {
                src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                title: "Group Classes",
                desc: "Expert-led fitness programs"
              },
              {
                src: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                title: "Personal Training",
                desc: "One-on-one guidance"
              }
            ].map((image, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-80 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h4 className="text-2xl font-bold text-white mb-2">{image.title}</h4>
                    <p className="text-gray-300">{image.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;