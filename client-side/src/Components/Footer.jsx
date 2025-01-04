import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import add from '../assets/add.svg';

const Footer = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the membership plans available?",
      answer: "We offer flexible membership plans, including monthly, quarterly, and annual options. Each plan includes access to all gym equipment and group classes."
    },
    {
      question: "Do you provide personal trainers?",
      answer: "Yes, we have certified personal trainers available to guide you based on your fitness goals. You can book sessions directly through our app or at the front desk."
    },
    {
      question: "Can I get a customized diet plan?",
      answer: "Absolutely! Our expert nutritionists can design a diet plan tailored to your fitness goals, whether it's weight loss, muscle gain, or general wellness."
    },
    {
      question: "Are there any additional charges for group fitness classes?",
      answer: "Group fitness classes are included in most membership plans. For premium classes, a small additional fee may apply."
    },
    {
      question: "Can I upgrade or downgrade my membership plan?",
      answer: "Yes, you can upgrade or downgrade your membership at any time by contacting our support team or through your member portal."
    },
    {
      question: "What are the qualifications of your trainers?",
      answer: "Our trainers are certified professionals with expertise in strength training, cardio fitness, and injury prevention. They also specialize in personalized coaching for various fitness levels."
    }
  ];
  

  return (
    <div className="faq bg-gray-800 text-white p-6 sm:p-8 md:p-10">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="max-w-[90%] sm:max-w-[60%] md:max-w-[40%] m-auto mt-6">
          <div
            className="faqbox cursor-pointer hover:bg-slate-700 rounded-sm flex justify-between bg-slate-950 p-5"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-base sm:text-lg">{faq.question}</span>
            <img src={add} alt="Toggle Answer" className="w-6 h-6" />
          </div>
          {openFAQ === index && (
            <div className="bg-slate-900 p-4 mt-2 rounded-sm">
              <p className="text-sm sm:text-base">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 mt-12">
        <Link to="/">
          <div id='logo-style' className="logo font-semibold text-white text-xl sm:text-3xl cursor-pointer ">FitHub</div>
        </Link>
        <p className="text-base sm:text-lg text-white text-center">All rights reserved. © FitHub</p>
      </div>
    </div>
  );
};

export default Footer;
