import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import bg_Img from "../assets/GymHeroBg.jpg";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = formData;

        if (!name || !email || !password) {
            toast.error("All fields are required.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Invalid email format.");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);
        try {
            const { data } = await axios.post("http://localhost:5001/register", formData);

            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("Registration Successful!");
                navigate("/");
            }
        } catch (error) {
            toast.error("An error occurred during registration.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed justify-center relative"
            style={{ backgroundImage: `url(${bg_Img})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>

            <div className="flex items-center justify-between mb-6 px-6 md:px-20 relative z-10">
                <Link to="/">
                    <div className="text-4xl sm:text-3xl font-bold text-white cursor-pointer">
                        FitHub
                    </div>
                </Link>
            </div>

            <div className="w-full sm:w-96 md:w-[420px] bg-[rgba(53,49,110,0.16)] p-6 sm:p-8 md:p-10 mx-auto relative z-10">
                <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-white">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {["name", "email", "password"].map((field) => (
                        <div key={field}>
                            <label className="block text-xl font-medium text-gray-300 capitalize">
                                {field}
                            </label>
                            <input
                                name={field}
                                type={field === "password" ? "password" : "text"}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={`Enter ${field}...`}
                                className="w-full h-12 bg-gray-600 text-white border-none outline-none rounded-sm text-lg px-4 py-2"
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full p-4 bg-cyan-800 text-white rounded-md text-lg font-medium mt-2 cursor-pointer"
                    >
                        {loading ? "Registering..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
