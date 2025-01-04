import React from "react";
import cardioImage from "../assets/cardioImage.jpg";
import weightTrainingImage from "../assets/weightTrainingImage.jpg";
import yogaImage from "../assets/yogaImage.jpg";
import personalTrainingImage from "../assets/personalTrainingImage.jpg";
import nutritionImage from "../assets/nutritionImage.jpg";

const ServicesPage = () => {
  const services = [
    {
      title: "Cardio Training",
      description:
        "Boost your endurance, burn calories, and strengthen your heart with our specialized Cardio Training programs. Whether you’re a beginner or a fitness enthusiast, we offer a variety of high-energy workouts tailored to suit your goals.",
      image: cardioImage,
    },
    {
      title: "Weight Training",
      description:
        "Build strength and muscle with our extensive range of free weights and resistance machines.",
      image: weightTrainingImage,
    },
    {
      title: "Yoga & Mindfulness",
      description:
        "Enhance flexibility, balance, and mental well-being with guided yoga and mindfulness sessions.",
      image: yogaImage,
    },
    {
      title: "Personal Training",
      description:
        "Achieve your fitness goals faster with personalized workout plans and guidance from expert trainers.",
      image: personalTrainingImage,
    },
    {
      title: "Nutrition Guidance",
      description:
        "Fuel your fitness journey with customized meal plans and nutrition advice from our dietitians.",
      image: nutritionImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 data-aos="zoom-in" data-aos-duration='1000' className="text-4xl sm:text-6xl mt-10 font-bold text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text text-center">
        Our Services
      </h1>

      <div className="mt-10 space-y-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'items-center gap-8' : 'sm:flex-row-reverse items-center gap-8'}`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full sm:w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h2 data-aos="fade-left" data-aos-duration='1400' className="text-2xl font-semibold text-cyan-300 mb-4">
                {service.title}
              </h2>
              <p data-aos="fade-right" data-aos-duration='1400' className="text-gray-300 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
