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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 relative overflow-hidden">
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

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto p-6">
  {plans.map((plan, index) => (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      key={index}
      className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-cyan-500/50 hover:border-cyan-400"
    >
      <div className="flex justify-center mb-6 text-cyan-400 text-5xl">
        {plan.icon || '💎'}
      </div>

      <h2 className="text-3xl font-extrabold text-white mb-4 text-center tracking-wide uppercase">
        {plan.name}
      </h2>

      <p className="text-4xl font-bold text-cyan-300 mb-6 text-center">
        ₹{plan.price} <span className="text-lg text-gray-300">/month</span>
      </p>

      <ul className="text-gray-200 mb-8 space-y-4 text-base leading-relaxed">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <span className="text-green-400 mr-3">✔</span> {feature}
          </li>
        ))}
      </ul>

      <Link to={`/plans/booking-a-plan?name=${encodeURIComponent(plan.name)}`}>
        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-md hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
          Book Now
        </button>
      </Link>

      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md animate-pulse">
        Popular
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default MembershipPlans;