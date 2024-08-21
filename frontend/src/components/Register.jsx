import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Register() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
                alt="register"
                className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-[#D388F8]">Join Us!</h2>
                <p className="text-lg text-white mt-2">Create your TalesTogether account.</p>
              </div>
              <form >
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white mb-1">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-white mb-1">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-white mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password2" className="block text-white mb-1">Confirm Password</label>
                  <input
                    type="password"
                    id="password2"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full bg-[#FFEF20] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#E86B00]"
                  >
                    Register
                  </button>
                </div>
                <div className="text-center text-white">
                  <p>Already have an account? <Link to="/login" className="text-[#D388F8] hover:underline">Login Now</Link></p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
