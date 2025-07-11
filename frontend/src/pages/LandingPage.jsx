import React, { useState } from 'react';

import {APP_FEATURES} from '../utils/data.js'
import heroImg from '../assets/hero-img.png'
import {LuSparkles} from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal.jsx'
import Login from '../pages/Auth/Login.jsx'
import SignUp from '../pages/Auth/SignUp.jsx'



const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("Login");

  const handleCTA = () => {
    // Example: navigate to signup/login or open modal
    setOpenAuthModal(true);
  };

  return (
    <>
    <div className="relative w-full min-h-screen bg-[#FFFCEF] overflow-hidden flex flex-col">
      {/* Background blur effect */}
      <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0 pointer-events-none z-0"></div>

      {/* Main content container */}
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-[200px] relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-2xl text-black font-bold tracking-wide select-none">
            Interview Prep AI
          </div>
          <button
            className="bg-gradient-to-r from-[#FF9324] to-[#EE99A4] text-sm font-semibold text-white px-8 py-3 rounded-full 
              hover:from-black hover:to-gray-800 hover:text-yellow-400 border border-transparent hover:border-yellow-400 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => setOpenAuthModal(true)}
            aria-label="Login or Sign Up"
          >
            Login / Sign Up
          </button>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <div className="inline-flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-4 py-1 rounded-full border border-amber-300 mb-4 select-none">
              <LuSparkles/>AI Powered
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-black mb-6 max-w-lg">
              Ace Interviews with<br />
              <span
                className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] 
                animate-text-shine font-extrabold"
                style={{ backgroundSize: '200% 200%' }}
              >
                AI Powered
              </span>{" "}
              Learning
            </h1>
          </div>

          {/* Right Text & CTA Section */}
          <div className="w-full md:w-1/2 max-w-lg">
            <p className="text-lg text-gray-900 mb-8 leading-relaxed">
              Get role-specific questions, expand answers when you need them,
              dive deeper into concepts, and organize everything your way.
              From preparation to mastery — your ultimate interview toolkit is here.
            </p>

            <button
              className="bg-black text-white text-sm font-semibold px-8 py-3 rounded-full 
                hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 
                transition-colors duration-300 cursor-pointer select-none"
              onClick={handleCTA}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full min-h-screen relative z-10 '>
      <div>
        <section className='flex items-center justify-center -mt-36'>
          <img src={heroImg} alt="Hero Img" className='w-[80vw] rounded-lg'/>
        </section>
      </div>
    </div>

    <div className='w-full min-h-full bg-[#FFFCEF] mt-10'>
      <div className='container mx-auto px-4 pt-10 pb-20'>
        <section className='mt-5'>
          <h2 className='text-2xl font-medium text-center mb-12'>
            Features that make you shine
          </h2>
          <div className='flex flex-col items-center gap-8'>
            {/* First 3 cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
              {APP_FEATURES.slice(0,3).map((feature)=>(
                <div
                  key={feature.id}
                  className='bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-abmer-100 transition border border-amber-100'
                >
                  <h3 className='text-base font-semibold mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Remaining 2 cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
              {APP_FEATURES.slice(3).map((feature)=>(
                <div
                  key={feature.id}
                  className='bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-abmer-100 transition border border-amber-100'
                >
                  <h3 className='text-base font-semibold mb-3'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>

    <Modal
      isOpen={openAuthModal}
      onClose={()=>{
        setOpenAuthModal(false);
        setCurrentPage("Login");
      }}
      hideHeader
    >
      <div>
        {currentPage == "Login" && (
          <Login setCurrentPage={setCurrentPage}/>
        )}
        {currentPage == "SignUp" && (
          <SignUp setCurrentPage={setCurrentPage}/>
        )}
      </div>
    </Modal>
    </>
    
  );
};

export default LandingPage;