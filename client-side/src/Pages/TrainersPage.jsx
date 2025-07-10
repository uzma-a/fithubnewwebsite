import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Award, Users, Calendar, Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const TrainersPage = () => {
    const [hoveredTrainer, setHoveredTrainer] = useState(null);

    let navigate = useNavigate();

    const trainers = [
        {
            id: 1,
            name: 'John Doe',
            specialty: 'Personal Trainer',
            bio: 'John is an expert in weight training and body conditioning. He has been helping clients achieve their fitness goals for over 5 years.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.9,
            clients: 150,
            experience: '5+ Years',
            achievements: ['Certified Personal Trainer', 'Nutrition Specialist', 'Strength Coach'],
            socialMedia: { instagram: '@johndoe_fit', twitter: '@johndoe_trainer' }
        },
        {
            id: 2,
            name: 'Jane Smith',
            specialty: 'Yoga Instructor',
            bio: 'Jane has been practicing yoga for 8 years and specializes in mindfulness and flexibility training. She helps clients improve mental and physical balance.',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.8,
            clients: 120,
            experience: '8+ Years',
            achievements: ['RYT-500 Certified', 'Mindfulness Coach', 'Meditation Expert'],
            socialMedia: { instagram: '@janesmith_yoga', facebook: 'Jane Smith Yoga' }
        },
        {
            id: 3,
            name: 'Mark Lee',
            specialty: 'Cardio Specialist',
            bio: 'Mark is passionate about cardiovascular health and loves motivating clients to push their limits in cardio training.',
            image: 'https://images.unsplash.com/photo-1567013127542-490d757e51cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.7,
            clients: 100,
            experience: '6+ Years',
            achievements: ['HIIT Specialist', 'Marathon Runner', 'Cardio Rehabilitation'],
            socialMedia: { instagram: '@marklee_cardio', twitter: '@marklee_fit' }
        },
        {
            id: 4,
            name: 'Emily White',
            specialty: 'Pilates Instructor',
            bio: 'Emily has a deep understanding of Pilates and core strengthening exercises. She works with clients to build better posture and flexibility.',
            image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.9,
            clients: 90,
            experience: '4+ Years',
            achievements: ['Pilates Certified', 'Posture Specialist', 'Rehabilitation Expert'],
            socialMedia: { instagram: '@emily_pilates', facebook: 'Emily White Pilates' }
        },
        {
            id: 5,
            name: 'Chris Johnson',
            specialty: 'Strength Coach',
            bio: 'Chris specializes in strength coaching and powerlifting, guiding clients to build strength while focusing on proper technique.',
            image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.8,
            clients: 180,
            experience: '7+ Years',
            achievements: ['Powerlifting Champion', 'Strength & Conditioning', 'Olympic Lifting'],
            socialMedia: { instagram: '@chris_strength', twitter: '@chrisjohnson_lift' }
        },
        {
            id: 6,
            name: 'Sophia Brown',
            specialty: 'Health & Wellness Coach',
            bio: 'Sophia is a certified health coach who helps clients with personalized nutrition plans, lifestyle changes, and overall wellness.',
            image: 'https://images.unsplash.com/photo-1559455800-61913dd6ac6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            rating: 4.9,
            clients: 130,
            experience: '5+ Years',
            achievements: ['Certified Health Coach', 'Nutrition Expert', 'Wellness Specialist'],
            socialMedia: { instagram: '@sophia_wellness', facebook: 'Sophia Brown Wellness' }
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-gray-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
            </div>

            {/* Header Section */}
            <header className="relative z-10 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-slate-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
                        <Award className="w-4 h-4" />
                        World-Class Trainers
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black text-transparent bg-gradient-to-r from-blue-400 via-slate-400 to-gray-400 bg-clip-text mb-6 tracking-tight">
                        Meet Our
                        <span className="block bg-gradient-to-r from-gray-400 to-blue-400 bg-clip-text">
                            Elite Team
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Transform your fitness journey with our exceptional team of certified trainers,
                        each bringing years of expertise and passion to help you achieve your goals.
                    </p>
                </div>
            </header>

            {/* Stats Section */}
            <div className="relative z-10 py-12 px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
                        <div className="text-gray-300">Expert Trainers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-slate-400 mb-2">850+</div>
                        <div className="text-gray-300">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-gray-400 mb-2">15+</div>
                        <div className="text-gray-300">Years Combined Experience</div>
                    </div>
                </div>
            </div>

            {/* Trainers Grid */}
            <main className="relative z-10 py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trainers.map((trainer) => (
                        <div
                            key={trainer.id}
                            className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:bg-white/20 border border-white/20"
                            onMouseEnter={() => setHoveredTrainer(trainer.id)}
                            onMouseLeave={() => setHoveredTrainer(null)}
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Profile Image */}
                            <div className="relative mb-6 overflow-hidden rounded-2xl">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Floating Rating */}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-white text-sm font-semibold">{trainer.rating}</span>
                                </div>

                                {/* Social Media Icons */}
                                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {trainer.socialMedia.instagram && (
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors cursor-pointer">
                                            <Instagram className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                    {trainer.socialMedia.twitter && (
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors cursor-pointer">
                                            <Twitter className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                    {trainer.socialMedia.facebook && (
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors cursor-pointer">
                                            <Facebook className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Trainer Info */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                                    <p className="text-transparent bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text font-semibold text-lg">
                                        {trainer.specialty}
                                    </p>
                                </div>

                                <p className="text-gray-300 leading-relaxed">{trainer.bio}</p>

                                {/* Stats */}
                                <div className="flex justify-between items-center py-4 border-t border-white/20">
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm text-gray-300">{trainer.clients} Clients</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm text-gray-300">{trainer.experience}</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-2">
                                    <h4 className="text-sm  font-semibold text-white">Certifications:</h4>
                                    <div className="flex  flex-wrap gap-2">
                                        {trainer.achievements.map((achievement, index) => (
                                            <span
                                                key={index}
                                                className="bg-gradient-to-r from-blue-800 to-slate-700/30 text-white text-xs px-3 py-1 rounded-full border border-white/20"
                                            >
                                                {achievement}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Book Session Button */}
                                <button className="w-full bg-gradient-to-r from-blue-600 to-slate-600 text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:from-blue-700 hover:to-slate-700 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                                    <Heart className="w-4 h-4" />
                                    Book Session
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Call to Action */}
            <section className="relative z-10 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your
                        <span className="block text-transparent bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text">
                            Transformation?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Choose your perfect trainer and begin your journey to a healthier, stronger you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => {
                            navigate('/contact');
                        }} className="bg-gradient-to-r from-blue-600 to-slate-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">

                            Schedule Free Consultation

                        </button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrainersPage;