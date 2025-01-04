import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import AboutSection from './Components/AboutSection/AboutSection'; // Import AboutSection
import Footer from './Components/Footer';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import TrainersPage from './Pages/TrainersPage';
import MembershipPlans from './Pages/MembershipPlans';
import BookNowPage from './Pages/BookNowPage';
import LearnMorePage from './Pages/LearnMorePage';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import Loading from './Components/Loading/Loading';
import Register from './Pages/Register';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContext, UserContextProvider } from '../context/userContext';
import Dashboard from './Pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animations run only once
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <UserContextProvider>
    <BrowserRouter>
      <div className="App">
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
        {isLoading ? (
          <Loading />
        ) : (
          
          <Routes>
            {/* Home Page with HeroSection, AboutSection, and Footer */}
           
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ServicesPage />
                  <TrainersPage />
                  <LearnMorePage />
                  <MembershipPlans />
                </>
              }
            />
            {/* Other Pages */}
            <Route path="/login" element={<LoginSignup />} />
            <Route path='/register' element={<Register />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/plans" element={<MembershipPlans />} />
            <Route path="/plans/booking-a-plan" element={<BookNowPage />} />
            <Route path="/learn-more-about-diet-plan" element={<LearnMorePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        )}
        {/* Footer for all pages, only shows after loading */}
        {!isLoading && <Footer />}
      </div>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
