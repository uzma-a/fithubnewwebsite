import React from 'react';
import { Link } from 'react-router-dom';

const MembershipPlans = () => {
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

  

  return (
    <div className="min-h-screen  bg-gray-950 text-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto text-center mb-16">
        <h1 data-aos="zoom-in" data-aos-duration='1000' className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text text-center">
          Membership Plans
        </h1>
        <p data-aos="fade-up" data-aos-duration='1000' className="text-lg  text-gray-300 mt-4 leading-relaxed">
          Our Membership Plans are designed to suit every fitness journey. Whether you're just starting out or looking to level up, we offer flexible options with exclusive benefits. Choose the plan that best fits your goals and enjoy access to top-tier facilities, expert trainers, and a motivating environment.
        </p>
        <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay='1200' className="text-xl text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text mt-6 font-semibold">
          Join us today and take the first step towards a healthier, stronger you!
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {plans.map((plan, index) => (
          <div data-aos="zoom-in" data-aos-duration='1000'
            key={index}
            className="bg-gray-800 p-8  shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              {plan.name} 
            </h2>
            <p className="text-3xl font-semibold text-gray-100 mb-6">
            Rs. {plan.price} /month
            </p>
            <ul className="text-gray-300 mb-8 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-cyan-500 mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>
            <Link to={`/plans/booking-a-plan?name=${encodeURIComponent(plan.name)}`}>
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold  hover:from-blue-500 hover:to-cyan-500 transition-all">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
