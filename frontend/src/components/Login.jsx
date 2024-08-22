import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import axios from 'axios';

function Login() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Initialize navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Request to obtain tokens
      const response = await axios.post('http://127.0.0.1:8000/token/', {
        email,
        password,
      });

      const { access, refresh } = response.data;

      // Store tokens in localStorage or sessionStorage
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Fetch user profile using the access token
      const profileResponse = await axios.get('http://127.0.0.1:8000/api/user-profile/', {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      // Print user profile details to the console
      console.log('User Profile Details:', profileResponse.data);

      // Redirect to the homepage or dashboard
      navigate('/'); // Change this to your desired route
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-black text-[#387F39] sticky top-0 z-10 shadow-custom-light">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-purple-500">TalesTogether</div>
          </div>

          <div className="hidden md:flex flex-grow justify-center space-x-10">
            <Link to="/" className="text-white hover:text-green-400">Home</Link>
            <a href="#about" className="text-white hover:text-green-400">About</a>
            <a href="#contact" className="text-white hover:text-green-400">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black text-white p-4">
            <Link to="/" className="block py-2">Home</Link>
            <a href="#about" className="block py-2">About</a>
            <a href="#contact" className="block py-2">Contact</a>
          </div>
        )}
      </nav>
      <div className='flex items-center justify-center mt-6'>
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
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white mb-1">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full bg-[#FFEF20] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#E86B00]"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center text-white">
                  <Link to="/forgot-password" className="text-[#D388F8] hover:underline">Forgot password?</Link>
                </div>
                <div className="text-center text-white mt-4">
                  <p>Don't have an account? <Link to="/register" className="text-[#D388F8] hover:underline">Register Now</Link></p>
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
