import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
    
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000); // Redirect after 3 seconds

        return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-600 flex flex-col items-center justify-center text-white">
            <h1 className="text-center text-4xl md:text-5xl font-bold tracking-wide mb-6">
                Dashboard
            </h1>
            
                <h2 className="text-center text-2xl md:text-3xl bg-gradient-to-r font-semibold from-gray-200 to-sky-500 bg-clip-text text-transparent">
                    Hi, Welcome to Fithub!
                </h2>
            
        </div>
    );
}
