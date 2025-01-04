import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { name, email, subject, message, date, time } = formData;

    if (!name || !email || !subject || !message || !date || !time) {
      toast.error('Please fill out all fields before submitting!');
      return;
    }

    // After successful submission
    toast.success('Your message has been sent!');
    // You can also clear the form if needed
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-black flex items-center justify-center p-4 sm:p-6">
      <div className="bg-gray-700 shadow-lg rounded-lg w-full max-w-4xl p-6 sm:p-8">
        <h1 className="text-4xl sm:text-4xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-b from-gray-300 to-cyan-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-6 sm:mb-8">
          We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-gray-900 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border text-gray-200 bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-900 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-4 sm:mt-6">
            <label htmlFor="subject" className="block text-gray-900 font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4 sm:mt-6">
            <label htmlFor="message" className="block text-gray-900 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mt-4 sm:mt-6">
            <h2 className="text-lg sm:text-xl text-center  font-semibold text-gray-400 mb-4">
              Book Your Appointment
            </h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2">
              <div>
                <label htmlFor="date" className="block text-gray-900 font-bold mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="time" className="block  text-gray-900 font-bold mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full border bg-gray-200 border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={formData.time}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 sm:mt-8 w-full bg-cyan-800 text-white font-bold py-3 rounded-md hover:bg-cyan-900 transition-colors"
          >
            Send Message & Book Appointment
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
