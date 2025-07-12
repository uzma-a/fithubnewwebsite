import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import bg_Img from "../assets/GymHeroBg.jpg";
import axios from "axios";

const Register = () => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePassword = (password) =>
        password.length >= 6;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, subject, message, date, time } = formData;

        if (!name || !email || !subject || !message || !date || !time) {
            toast.error("Please fill the required field!");
            return;
        }

        try {
            const response = await axios.post(
                `${backendUrl}/api/book-appointment`,
                {
                    fullName: name,
                    email,
                    subject,
                    message,
                    appointmentDate: date,
                    appointmentTime: time,
                }
            );

            const data = response.data;

            if (data.success) {
                toast.success("Appointment booked successfully!");
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        date: '',
                        time: '',
                    });
                }, 3000);
            } else {
                toast.error(data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error booking appointment:", error);
            toast.error("Failed to book appointment.");
        }
    };



    return (
        <div
            className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed justify-center relative"
            style={{
                backgroundImage: `url(${bg_Img})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>

            <div className="flex items-center justify-between mb-6 px-6 md:px-20 relative z-10">
                <Link to="/">
                    <div
                        id="logo-style"
                        className="text-4xl sm:text-3xl font-bold text-white cursor-pointer"
                    >
                        FitHub
                    </div>
                </Link>
            </div>

            <div className="w-full sm:w-96 md:w-[420px] bg-[rgba(53,49,110,0.16)] p-6 sm:p-8 md:p-10 mx-auto relative z-10">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
                    SignUp
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-xl font-medium text-gray-300"
                        >
                            Name
                        </label>
                        <input
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="enter your name..."
                            className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xl font-medium text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="enter email..."
                            name="email"
                            className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-xl font-medium text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="enter password..."
                            name="password"
                            className="w-full h-12 bg-gray-600 text-white mb-3 border-none outline-none rounded-sm font-base text-lg px-4 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full border-none outline-none p-4 bg-cyan-800 text-white rounded-md text-lg font-medium mt-2 cursor-pointer"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Register;
