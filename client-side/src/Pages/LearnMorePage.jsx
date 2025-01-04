import React from "react";
import diet_pic1 from '../assets/diet_pic1.jpg'
import diet_pic2 from '../assets/diet_pic2.jpg'
import diet_pic3 from '../assets/diet_pic3.jpg'
import diet_pic4 from '../assets/diet_pic4.jpg'

const LearnMorePage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1  data-aos="zoom-in" data-aos-duration='1000' className="text-4xl sm:text-5xl mt-10 font-bold text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text text-center">
        Importance of Diet in Your Gym Schedule
      </h1>
      <p className="text-sm sm:text-lg text-gray-300 mt-4 text-center mb-8 sm:mb-12">
        Choose a diet plan tailored to your fitness goals. Healthy eating made easy and delicious.
      </p>

      <div className="mt-10 space-y-12 max-w-6xl mx-auto">
        {/* Section 1 */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <img
            src={diet_pic1}
            alt="Healthy meal"
            className="w-full sm:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2  data-aos="fade-left" data-aos-duration='1400' className="text-2xl font-semibold text-cyan-300 mb-4">
              Fuel Your Workouts
            </h2>
            <p data-aos="fade-right" data-aos-duration='1400' className="text-gray-300 leading-relaxed text-lg">
              Eating the right foods before and after a workout is crucial for
              optimal performance and recovery. Pre-workout meals provide the
              energy your body needs, while post-workout meals replenish
              nutrients and repair muscle tissue. Focus on including complex
              carbohydrates and lean proteins in your meals for sustained
              energy and muscle growth.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-8">
          <img
            src={diet_pic2}
            alt="Nutritional balance"
            className="w-full sm:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2  data-aos="fade-left" data-aos-duration='1400' className="text-2xl font-semibold text-cyan-300 mb-4">
              The Role of Hydration
            </h2>
            <p data-aos="fade-right" data-aos-duration='1400' className="text-gray-300 leading-relaxed text-lg">
              Proper hydration is just as important as eating the right foods.
              Water helps regulate body temperature, lubricates joints, and
              transports nutrients throughout the body. Ensure you stay
              hydrated before, during, and after your gym sessions for peak
              performance and recovery.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <img
            src={diet_pic3}
            alt="Meal planning"
            className="w-full sm:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2 data-aos="fade-left" data-aos-duration='1400' className="text-2xl font-semibold text-cyan-300 mb-4">
              Importance of Meal Timing
            </h2>
            <p data-aos="fade-right" data-aos-duration='1400' className="text-gray-300 leading-relaxed text-lg">
              When you eat can be just as important as what you eat. Consuming
              meals or snacks at the right times can optimize your energy
              levels and prevent fatigue. For instance, eating a balanced meal
              2-3 hours before a workout ensures your body has enough fuel for
              intense exercise.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-8">
          <img
            src={diet_pic4}
            alt="Protein-rich foods"
            className="w-full sm:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2  data-aos="fade-left" data-aos-duration='1400' className="text-2xl font-semibold text-cyan-300 mb-4">
              Protein and Muscle Recovery
            </h2>
            <p data-aos="fade-right" data-aos-duration='1400' className="text-gray-300 leading-relaxed text-lg">
              Proteins are the building blocks of muscles, making them
              essential for recovery and growth. Include protein-rich foods
              such as chicken, fish, eggs, and legumes in your diet to repair
              muscle tissues and promote strength after workouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;
