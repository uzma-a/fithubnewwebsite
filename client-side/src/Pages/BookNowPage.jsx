import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import bg_Img from "../assets/GymHeroBg.jpg";
import logo from "../../src/assets/logo-img.jpg";
import { Link } from 'react-router-dom';

const BookNowPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planName = queryParams.get('name');

  const plans = [
    {
      name: 'Basic Plan 💪',
      price: '1499',
      features: [
        'Access to basic features',
        '1 Gym Visit per week',
        'Limited Classes',
        'Email Support',
      ],
    },
    {
      name: 'Standard Plan 🏋️‍♂️',
      price: '3499',
      features: [
        'Access to all features',
        '3 Gym Visits per week',
        'Unlimited Classes',
        'Priority Support',
      ],
    },
    {
      name: 'Premium Plan 👑',
      price: '5499',
      features: [
        'All Features Included',
        'Unlimited Gym Visits',
        'Personal Trainer Access',
        '24/7 Support',
      ],
    },
  ];

  const selectedPlan = plans.find((plan) => plan.name === planName);

  if (!selectedPlan) {
    return <div className="min-h-screen flex items-center justify-center text-white">Plan not found.</div>;
  }

  const amount = parseInt(selectedPlan.price) * 100; // Convert to paise (INR subunits)
  const currency = 'INR';
  const receiptId = "qwsaq1";

  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to control popup visibility

  const paymentHandler = async (e) => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/order`, {
      method: 'POST',
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      "key": "rzp_test_XboKxRJOOqEUOR", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits
      currency,
      "name": "FitHub Gym", // your business name
      "description": "Test Transaction",
      "image": { logo },
      "order_id": order.id, // Pass the `id` obtained in the response of Step 1
      "handler": async function (response) {
        const body = {
          ...response,
        };
        const validateRes = await fetch("https://fithub-backend.vercel.app/order/validate", {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
        
        if (jsonRes.msg === "success") {
          setIsPopupVisible(true); // Show popup if payment is successful
        }
      },
      "prefill": {
        "name": "FitHub Gym Member", // customer's name
        "email": "fithubgym@example.com",
        "contact": "909090000" // Provide customer's phone number
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed justify-center relative"
      style={{
        backgroundImage: `url(${bg_Img})`,
      }}
    >
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
          onClick={paymentHandler}
          className="w-full py-3 bg-gradient-to-r from-black to-gray-800 text-white font-bold hover:from-gray-800 hover:to-black transition-all"
        >
          Pay Now
        </button>
      </div>

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-100">
          <div className="bg-white p-6 rounded-md text-center shadow-xl max-w-sm mx-auto">
            <h2 className="text-2xl font-bold text-green-600">Congratulations!</h2>
            <p className="text-xl text-black mt-2">You are now a member of FitHub.</p>
            <Link to='/'><button
              onClick={() => setIsPopupVisible(false)}
              className="mt-4 py-2 px-6 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              OK
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNowPage;
