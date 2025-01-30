import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import bg_Img from "../assets/GymHeroBg.jpg";

const BookNowPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planName = queryParams.get("name");

  const plans = [
    {
      name: "Basic Plan 💪",
      price: "1499",
      features: [
        "Access to basic features",
        "1 Gym Visit per week",
        "Limited Classes",
        "Email Support",
      ],
    },
    {
      name: "Standard Plan 🏋️‍♂️",
      price: "3499",
      features: [
        "Access to all features",
        "3 Gym Visits per week",
        "Unlimited Classes",
        "Priority Support",
      ],
    },
    {
      name: "Premium Plan 👑",
      price: "5499",
      features: [
        "All Features Included",
        "Unlimited Gym Visits",
        "Personal Trainer Access",
        "24/7 Support",
      ],
    },
  ];

  const selectedPlan = plans.find((plan) => plan.name === planName);

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Plan not found.
      </div>
    );
  }

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookNow = () => {
    setIsLoading(true); // Show loading effect
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      setIsPopupVisible(true); // Show success popup
    }, 2000); // 2-second delay
  };

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed justify-center relative"
      style={{ backgroundImage: `url(${bg_Img})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

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

      <div className="w-full sm:w-96 md:w-[600px] bg-[rgba(94,94,94,0.31)] p-6 sm:p-8 md:p-10 mx-auto relative z-80">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">
          <span className="font-bold text-cyan-400 text-center">Booking</span> {selectedPlan.name}
        </h1>
        <p className="text-3xl font-semibold text-gray-200 mb-6">Rs. {selectedPlan.price} /month</p>
        <ul className="text-gray-300 mb-8 space-y-3">
          {selectedPlan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-cyan-500 mr-2">✔</span> {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleBookNow}
          className="w-full py-3 bg-gradient-to-r from-black to-gray-800 text-white font-bold hover:from-gray-800 hover:to-black transition-all"
        >
          {isLoading ? "Processing..." : "Book Now"}
        </button>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-100">
          <div className="bg-white p-6 rounded-md text-center shadow-xl max-w-lg mx-auto">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-cyan-500 mx-auto"></div>
            <p className="text-lg font-semibold text-gray-700 mt-4">Processing your booking...</p>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-100">
          <div className="bg-white p-6 rounded-md text-center shadow-xl max-w-lg mx-auto">
            <h2 data-aos="zoom-in" data-aos-duration='500' className="text-3xl font-bold bg-gradient-to-t from-pink-600 to-cyan-700 bg-clip-text text-transparent">
              Congratulations! 
            </h2>
            <p className="text-xl font-bold text-cyan-800 mt-4">Your plan has been booked.</p>
            <p data-aos="fade-up" data-aos-duration='1400' data-aos-delay="500" className="text-lg mt-1 bg-gradient-to-t from-pink-600 to-cyan-800 bg-clip-text text-transparent">
              Further details will be sent to your gmail.
            </p>
            <Link to="/">
              <button
                onClick={() => setIsPopupVisible(false)}
                className="mt-4 py-2 px-6 bg-cyan-800 text-white rounded-md hover:bg-cyan-700"
              >
                OK
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNowPage;
