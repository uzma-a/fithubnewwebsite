import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, User, MessageSquare, Calendar, Send, CheckCircle, Star } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ContactPage = () => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
    time: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, subject, message, date, time } = formData;

  if (!name || !email || !subject || !message || !date || !time) {
    toast.error("Please fill the required field!");
    return;
  }

  try {
    const response = await axios.post(
      `${backendUrl}/api/book-appointment`,
      {
        fullName: name,
        email,
        subject,
        message,
        appointmentDate: date,
        appointmentTime: time,
      }
    );

    const data = response.data;

    if (data.success) {
      toast.success("Appointment booked successfully!");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          date: '',
          time: '',
        });
      }, 3000);
    } else {
      toast.error(data.message || "Something went wrong!");
    }
  } catch (error) {
    console.error("Error booking appointment:", error);
    toast.error("Failed to book appointment.");
  }
};




    if (isSubmitted) {
      return (


        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-center max-w-md w-full border border-white/20">
            <div className="animate-bounce mb-6">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>


      );

    }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-7xl grid lg:grid-cols-3 gap-8">

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@fitnessgym.com</p>
                    <p className="text-gray-300">support@fitnessgym.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-600/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-600/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-300">123 Fitness Street</p>
                    <p className="text-gray-300">Health City, HC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Hours</h3>
                    <p className="text-gray-300">Mon-Fri: 5:00 AM - 11:00 PM</p>
                    <p className="text-gray-300">Sat-Sun: 6:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span className="text-gray-300">Expert Trainers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-300">Modern Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Flexible Scheduling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-10 border border-white/20">
              <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text mb-4">
                  Contact Us
                </h1>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Ready to transform your fitness journey? Send us a message and book your consultation today.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="group">
                    <label htmlFor="name" className="flex items-center gap-2 text-white font-semibold mb-3">
                      <User className="w-4 h-4 text-blue-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="flex items-center gap-2 text-white font-semibold mb-3">
                      <Mail className="w-4 h-4 text-slate-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label htmlFor="subject" className="flex items-center gap-2 text-white font-semibold mb-3">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="flex items-center gap-2 text-white font-semibold mb-3">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your fitness goals or ask any questions..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Appointment Booking */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    Book Your Consultation
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="group">
                      <label htmlFor="date" className="text-white font-semibold mb-3 block">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="time" className="text-white font-semibold mb-3 block">
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300"
                        value={formData.time}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-slate-600 text-white font-bold py-4 rounded-2xl hover:from-blue-700 hover:to-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Send Message & Book Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
