import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle menu
    navigate('/login'); // Navigate to the login page
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-[#387F39] shadow-custom-light">

      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          {/* <img src="/logo.gif" alt="Store Logo" className="w-12 h-12" /> */}
          <div className="text-2xl font-bold text-purple-500">TalesTogether</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <Link to="/" className="text-white hover:text-green-400">Home</Link>
          <a href="#about" className="text-white hover:text-green-400">About</a>
          <a href="#contact" className="text-white hover:text-green-400">Contact</a>
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-[#C8A1E0] text-black py-2 px-4 rounded hover:bg-purple-500">Log in</button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
      <button onClick={handleClick} aria-label="Toggle menu">
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
          <button className="block w-full text-white py-2 mt-2">Log in</button>
        </div>
      )}
    </nav>
  );
}

export default Header;
