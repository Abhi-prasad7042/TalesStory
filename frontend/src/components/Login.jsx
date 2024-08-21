import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Login() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="min-h-screen  bg-black">
      <nav className="bg-black text-[#387F39] sticky top-0 z-10 shadow-custom-light">
        
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {/* <img src="/logo.gif" alt="Store Logo" className="w-12 h-12" /> */}
            <div className="text-2xl font-bold text-purple-500">TalesTogether</div>
          </div>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-grow justify-center space-x-10">
          <Link to="/" className="text-white hover:text-green-400">Home</Link>
            <a href="#about" className="text-white hover:text-green-400">About</a>
            <a href="#contact" className="text-white hover:text-green-400">Contact</a>
          </div>
  
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black text-white p-4">
            <Link to="/" className="block py-2">Home</Link>
            <a href="#about" className="block py-2">About</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
      </nav>
      <div className=' flex items-center justify-center mt-6'>
        <section className="w-full sm:w-2/4 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
                <img
                src="./log.jpeg"
                alt="login"
                className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
                />
            </div>
            <div className="w-full md:w-1/2 p-6">
                <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-[#D388F8]">Welcome Back!</h2>
                <p className="text-lg text-white mt-2">Sign in to your TalesTogether account.</p>
                </div>
                <form >
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white mb-1">Email address</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-white mb-1">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                    required
                    />
                </div>
                <div className="mb-4">
                    <button
                    type="submit"
                    className="w-full bg-[#FFEF20] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#E86B00]"
                    >
                    Login
                    </button>
                </div>
                <div className="text-center text-white">
                    <a to="/forgot-password" className="text-[#D388F8] hover:underline">Forgot password?</a>
                </div>
                <div className="text-center text-white mt-4">
                    <p>Don't have an account? <a to="/register" className="text-[#D388F8] hover:underline">Register Now</a></p>
                </div>
                </form>
            </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
