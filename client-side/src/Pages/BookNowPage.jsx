import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bg_Img from "../assets/GymHeroBg.jpg";

const BookNowPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const planName = queryParams.get('name');
  const planPrice = queryParams.get('price');


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', { planName, planPrice, ...formData });
    // Add functionality to process payment or send data to backend.
  };

  const paymentHandler = async (e) => {
    e.preventDefault();
    
    const amount = Number(planPrice); // Ensure planPrice is numeric
    const currency = "INR";

    try {
        const response = await fetch("http://localhost:5000/order", {
            method: "POST",
            body: JSON.stringify({
                amount, // Correct amount in rupees
                currency,
                receipt: "receipt#1",
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const order = await response.json();
        console.log(order);

        var options = {
            key: "rzp_test_V6vIJstSiHeUVu", // Your Razorpay key
            amount: amount * 100, // Amount in paise for Razorpay
            currency,
            name: "FitHub",
            description: "Test Transaction",
            order_id: order.id,
            handler: async function (response) {
                setShowPopup(true); // Show popup on successful payment
                setFormData({ name: '', email: '', number: '' });
            },
            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.number,
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(`Error Code: ${response.error.code}`);
            alert(`Description: ${response.error.description}`);
            alert(`Source: ${response.error.source}`);
            alert(`Step: ${response.error.step}`);
            alert(`Reason: ${response.error.reason}`);
        });
        rzp1.open();
    } catch (error) {
        console.log("Payment failed:", error);
    }
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
      <div className="flex py-6 items-center justify-between mb-6 px-6 md:px-20 relative z-10">
        <Link to="/">
          <div id="logo-style" className="text-4xl sm:text-3xl font-bold text-white cursor-pointer">
            FitHub
          </div>
        </Link>
        <button className="py-1 px-4 bg-cyan-800 font-bold text-lg rounded-md shadow-[-7px_7px_0px_#fff] border border-transparent hover:text-gray-300">
          Logout
        </button>
      </div>

      <div className='flex items-center justify-center relative z-10'>
        <div className="bg-black p-8 shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-400 mb-4">
            Booking {planName}
          </h2>
          <p className="text-xl font-semibold text-gray-200 mb-6">
            Price: ₹ {planPrice}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 ">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 ">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-300 ">
                Phone Number:
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
                required
              />
            </div>
            <button
              onClick={paymentHandler}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-cyan-500 transition-all"
            >
              Pay
            </button>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful</h2>
            <p className="text-gray-700 mb-4">
              Congratulations! You became a member of FitHub.
              <br />
              Other details will be sent to your email.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNowPage;
