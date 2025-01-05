import React from "react";
import aboutGym from "../../assets/aboutGym.png";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

const AboutSection = () => {
  return (
    <section className="bg-gray-950 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 data-aos="fade-right" data-aos-duration='800' className="text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text text-center mb-12">
          About Us
        </h2>

        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          <div>
            <p className="text-lg font-medium text-gray-100 leading-relaxed">
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">Welcome to FitHub</span>, where fitness meets inspiration! We are more than just a gym —{" "}
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">we are a vibrant community dedicated to helping individuals achieve their health and wellness goals</span>. Whether you're a beginner taking the first step on your fitness journey or an athlete pushing the limits,{" "}
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">our state-of-the-art facilities</span>,{" "}
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">certified trainers</span>, and{" "}
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">supportive environment</span> are here to guide you every step of the way.
            </p>
            <p className="mt-6 text-lg font-medium text-gray-100 leading-relaxed">
              <span className="bg-gradient-to-t font-semibold from-gray-200 to-cyan-600 bg-clip-text text-transparent">At FitHub</span>, we believe in empowering our members to transform their lives. From personalized workout plans and expert-led group classes to tailored nutrition advice, we provide all the tools you need to succeed. Join us to experience a holistic approach to fitness that fuels both your body and mind. Together, let's redefine what it means to live a healthy, active lifestyle!
            </p>
          </div>
          <img data-aos="fade-left" data-aos-duration='200'
            className="h-[50vh] lg:h-[70vh] w-full lg:w-1/2 object-cover shadow-lg"
            src={aboutGym}
            alt="Gym Quote"
          />
        </div>

        {/* Vision and Why Choose Us Sections */}
        <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 mt-20 max-w-7xl mx-auto">
          {/* Vision Section */}
          <div className="p-8 bg-gray-800  shadow-md hover:shadow-xl transition-shadow">
            <h3 data-aos="fade-right" data-aos-duration='1100' className="text-4xl font-semibold bg-gradient-to-r from-gray-200 to-cyan-600 bg-clip-text text-transparent mb-6">
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Our mission is to inspire and motivate individuals to embrace a healthier lifestyle. We strive to offer top-notch facilities, experienced trainers, and personalized support to help every member unlock their full potential. With a focus on inclusivity, dedication, and innovation, we are committed to creating an environment where fitness becomes a rewarding and transformative journey for everyone.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="p-8 bg-gray-800 shadow-md hover:shadow-xl transition-shadow">
            <h3   data-aos="fade-right" data-aos-duration='1100' className="text-4xl font-semibold bg-gradient-to-r from-gray-200 to-cyan-600 bg-clip-text text-transparent mb-6">
              Why Choose Us?
            </h3>
            <ul className="text-lg text-gray-300 list-disc pl-6 space-y-4">
              <li>
                <span className="text-cyan-500 font-bold">Expert Trainers:</span>Certified professionals passionate about your success.
              </li>
              <li>
                <span className="text-cyan-500 font-bold">State-of-the-Art Equipment:</span> Top-tier, regularly maintained gym equipment.
              </li>
              <li>
                <span className="text-cyan-500 font-bold">Community Support:</span> Join a welcoming, fitness-driven family.
              </li>
              <li>
                <span className="text-cyan-500 font-bold">Flexible Plans:</span> Memberships for all fitness levels and goals.
              </li>
            </ul>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="mt-16">
          <h3 data-aos="zoom-in" data-aos-duration='1400' className="text-5xl font-bold text-center text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text mb-10">
            Transform Your Fitness Journey
          </h3>
          <div  className="grid mt-6 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <img data-aos="fade-right" data-aos-duration='1400'
              src={pic1}
              alt="Motivation"
              className="h-64 w-64 object-cover  mx-auto shadow-md hover:scale-105 transition-transform"
            />
            <img data-aos="fade-up" data-aos-duration='1400'
              src={pic2}
              alt="Life Better Gym"
              className="h-64 w-64 object-cover  mx-auto shadow-md hover:scale-105 transition-transform"
            />
            <img data-aos="fade-left" data-aos-duration='1400'
              src={pic3}
              alt="Transform"
              className="h-64 w-64 object-cover  mx-auto shadow-md hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
