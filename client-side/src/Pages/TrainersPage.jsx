import React from 'react';
import { Link } from 'react-router-dom';
import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jpg';
import trainer4 from '../assets/trainer4.jpg';
import trainer5 from '../assets/trainer5.jpg';
import trainer6 from '../assets/trainer6.jpg';
import services_bg from '../assets/services_bg.jpg';

const TrainersPage = () => {
    const trainers = [
        {
            id: 1,
            name: 'John Doe',
            specialty: 'Personal Trainer',
            bio: 'John is an expert in weight training and body conditioning. He has been helping clients achieve their fitness goals for over 5 years.',
            image: trainer1,
        },
        {
            id: 2,
            name: 'Jane Smith',
            specialty: 'Yoga Instructor',
            bio: 'Jane has been practicing yoga for 8 years and specializes in mindfulness and flexibility training. She helps clients improve mental and physical balance.',
            image: trainer2,
        },
        {
            id: 3,
            name: 'Mark Lee',
            specialty: 'Cardio Specialist',
            bio: 'Mark is passionate about cardiovascular health and loves motivating clients to push their limits in cardio training.',
            image: trainer3,
        },
        {
            id: 4,
            name: 'Emily White',
            specialty: 'Pilates Instructor',
            bio: 'Emily has a deep understanding of Pilates and core strengthening exercises. She works with clients to build better posture and flexibility.',
            image: trainer4,
        },
        {
            id: 5,
            name: 'Chris Johnson',
            specialty: 'Strength Coach',
            bio: 'Chris specializes in strength coaching and powerlifting, guiding clients to build strength while focusing on proper technique.',
            image: trainer5,
        },
        {
            id: 6,
            name: 'Sophia Brown',
            specialty: 'Health & Wellness Coach',
            bio: 'Sophia is a certified health coach who helps clients with personalized nutrition plans, lifestyle changes, and overall wellness.',
            image: trainer6,
        },
    ];

    return (
        <div className="bg-gray-950 min-h-screen bg-cover bg-center bg-no-repeat bg-fixed">

            <header className=" py-5 relative z-10">
                <h1 data-aos="zoom-in" data-aos-duration='1000' className="text-6xl mt-10 font-bold text-transparent bg-gradient-to-b from-gray-200 to-cyan-600 bg-clip-text text-center">Meet Our Trainers</h1>
                <p className="text-center text-lg text-gray-300 mt-4">
                    Our team of experienced trainers is here to guide you on your fitness journey.
                </p>
            </header>

            <main className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {trainers.map((trainer) => (
                    <div
                        key={trainer.id}
                        className="shadow-md bg-gray-100 p-6 hover:shadow-2xl transition-shadow"
                    >
                        <div className="relative">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="w-full h-80 object-cover "
                            />
                            {/* Adding overlay with opacity */}
                            <div className=""></div> {/* Adjust opacity */}
                        </div>
                        <h2 className="text-xl text-gray-500 font-semibold mt-4">{trainer.name}</h2>
                        <p  data-aos="fade-right" data-aos-duration='1000' className="text-gray-700 font-bold">{trainer.specialty}</p>
                        <p data-aos="fade-up" data-aos-duration='1000' className="text-gray-500 mt-2">{trainer.bio}</p>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default TrainersPage;
