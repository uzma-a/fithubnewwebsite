import React, { useState } from "react";
import { 
  Heart, 
  Dumbbell, 
  Leaf, 
  User, 
  Apple, 
  ArrowRight, 
  Star, 
  Clock, 
  Users,
  Target,
  Zap,
  CheckCircle
} from "lucide-react";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Cardio Training",
      description:
        "Boost your endurance, burn calories, and strengthen your heart with our specialized Cardio Training programs. Whether you're a beginner or a fitness enthusiast, we offer a variety of high-energy workouts tailored to suit your goals.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      features: ["HIIT Training", "Running Programs", "Cycling Classes", "Heart Rate Monitoring"],
      duration: "45-60 min",
      level: "All Levels",
      price: "$89/month"
    },
    {
      title: "Weight Training",
      description:
        "Build strength and muscle with our extensive range of free weights and resistance machines. Our expert trainers will guide you through proper form and progressive overload techniques.",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Dumbbell,
      color: "from-blue-500 to-cyan-600",
      features: ["Free Weights", "Resistance Machines", "Powerlifting", "Muscle Building"],
      duration: "60-90 min",
      level: "Beginner to Advanced",
      price: "$99/month"
    },
    {
      title: "Yoga & Mindfulness",
      description:
        "Enhance flexibility, balance, and mental well-being with guided yoga and mindfulness sessions. Find inner peace while strengthening your body and mind.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      features: ["Hatha Yoga", "Vinyasa Flow", "Meditation", "Breathing Techniques"],
      duration: "60-75 min",
      level: "All Levels",
      price: "$79/month"
    },
    {
      title: "Personal Training",
      description:
        "Achieve your fitness goals faster with personalized workout plans and guidance from expert trainers. One-on-one attention ensures maximum results.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: User,
      color: "from-purple-500 to-violet-600",
      features: ["Custom Workouts", "Goal Setting", "Progress Tracking", "Flexible Scheduling"],
      duration: "60 min",
      level: "Personalized",
      price: "$120/session"
    },
    {
      title: "Nutrition Guidance",
      description:
        "Fuel your fitness journey with customized meal plans and nutrition advice from our certified dietitians. Optimize your results with proper nutrition.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Apple,
      color: "from-orange-500 to-red-600",
      features: ["Meal Planning", "Nutritional Analysis", "Supplement Advice", "Lifestyle Coaching"],
      duration: "Ongoing",
      level: "All Levels",
      price: "$69/month"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8 shadow-2xl">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl sm:text-7xl mt-6 font-black text-transparent bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text mb-6">
            Our Services
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 leading-relaxed">
            Discover our comprehensive range of fitness services designed to help you achieve your health and wellness goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Service Card */}
              <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 z-10`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating Price Badge */}
                    <div className="absolute top-6 right-6 z-30">
                      <div className={`bg-gradient-to-r ${service.color} px-4 py-2 rounded-full text-white font-bold shadow-lg`}>
                        {service.price}
                      </div>
                    </div>

                    {/* Service Icon */}
                    <div className="absolute bottom-6 left-6 z-30">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-xl`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl"></div>
                    <div className="relative bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                      
                      {/* Service Header */}
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mr-4`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.title}
                        </h2>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        {service.description}
                      </p>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center space-x-3 bg-gray-800/50 rounded-xl p-3">
                          <Clock className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm text-gray-300">{service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-800/50 rounded-xl p-3">
                          <Users className="w-5 h-5 text-green-400" />
                          <span className="text-sm text-gray-300">{service.level}</span>
                        </div>
                        <div className="flex items-center space-x-3 bg-gray-800/50 rounded-xl p-3">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <span className="text-sm text-gray-300">5.0 Rating</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-lg font-semibold text-gray-200 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                          What's Included:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className={`group/btn w-full bg-gradient-to-r ${service.color} hover:shadow-2xl hover:shadow-cyan-500/25 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                        <span>Get Started</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Connector Line */}
              {index < services.length - 1 && (
                <div className="flex justify-center my-16">
                  <div className="w-1 h-16 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
            <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of members who have already started their fitness journey with us
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/25 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 text-lg">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;