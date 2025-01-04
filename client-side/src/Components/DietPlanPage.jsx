import React from 'react';
import { Link } from 'react-router-dom';

const DietPlanPage = () => {
  const plans = [
    {
      title: 'Weight Loss Plan',
      description:
        'A low-calorie diet plan designed to help you shed extra pounds while maintaining energy levels.',
    },
    {
      title: 'Muscle Gain Plan',
      description:
        'High-protein and nutrient-rich meals to fuel your muscle-building journey.',
    },
    {
      title: 'General Fitness Plan',
      description:
        'Balanced meals to maintain overall fitness and health for an active lifestyle.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-4xl sm:text-6xl mt-10 font-bold text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text text-center">
        Diet Plans for Your Goals
      </h1>
      <p className="text-sm sm:text-lg text-gray-300 mt-4 text-center mb-8 sm:mb-12">
        Choose a diet plan tailored to your fitness goals. Healthy eating made easy and delicious.
      </p>

      {/* Main Section */}
      <div className="diettt flex flex-col-reverse lg:flex-row items-center lg:justify-between w-full lg:w-[82vw] mx-auto gap-8 mb-10 mt-10">
        {/* Text Section */}
        <p className="flex-grow px-4 sm:px-10 text-sm sm:text-base leading-relaxed text-center lg:text-left">

          <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent mr-1">Creating a diet plan tailored</span>
          to your goals is essential for <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">maintaining a healthy lifestyle</span>.
          A well-balanced diet should include a variety of <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent mr-1">nutrient-rich</span>
          foods such as <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">fresh fruits</span>, <span>vegetables</span>,
          <span>whole grains</span>, <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">lean proteins</span>, and
          <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent ml-1">healthy fats</span>.
          Proper hydration and portion control are equally important, ensuring your body receives the necessary energy and nutrients without
          <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent ml-1">overindulgence</span>.
          Personalize your plan based on your specific health objectives, whether it’s <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">weight loss</span>,
          <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent ml-1">muscle gain</span>, or improved overall health.
          <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent ml-1">Incorporating mindful</span> eating habits and avoiding processed
          foods can make a significant difference in achieving sustainable results. Always consult a
          <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent ml-1">nutritionist</span> or
          <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent ml-1">dietitian</span> for expert advice tailored to your individual needs.
        </p>

        {/* Image Section */}
        <img
          className="w-full lg:w-1/3 h-auto object-cover rounded-md shadow-md"
          src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2024/05/18/shutterstock_1864415527.jpg"
          alt="Healthy Diet Plan"
        />
      </div>

      <div className="text-center mb-10">
       <Link to='/learn-more-about-diet-plan'>
       <button className="py-2 px-6 bg-cyan-800 font-normal text-sm sm:text-xl text-white shadow-lg hover:bg-cyan-900 hover:underline underline-offset-2 rounded-md">
          Learn More
        </button></Link>
      </div>

      {/* Plans Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg p-6 rounded-md hover:bg-gray-700 transition"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-4">
              {plan.title}
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">{plan.description}</p>
            <button className="w-full bg-cyan-600 text-gray-900 font-bold py-2 rounded-md hover:bg-cyan-500">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlanPage;


