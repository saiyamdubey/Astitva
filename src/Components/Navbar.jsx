import React, { useState, useEffect } from 'react';
import logo from '../assets/logo1.png';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const checkLoginState = () => {
    const user = JSON.parse(localStorage.getItem('userhai'));
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.message || 'User');
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  };

  useEffect(() => {
    checkLoginState();
  }, [location]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userhai');
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="top-0 z-50 sticky w-full hello bg-teal-500 shadow-lg">
      <div className="font-bold text-neutral-800">
        <div className="flex justify-between items-center py-3 lg:px-20 px-10">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-16 w-16 rounded-full" />
            <a href="/" className="ml-5 text-xl lg:text-2xl font-semibold text-white">
              Astitva<span className="text-yellow-300">4</span>Animals
            </a>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex list-none">
            <ul className="flex text-lg gap-6">
              {['/', '/adopt', '/shelters', '/petshops', '/aboutus','/pricing'].map((path, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className="p-3 text-white hover:text-teal-700 hover:bg-white hover:rounded-lg transition-all"
                  >
                    {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* User Authentication / Dropdown */}
          <div className="hidden lg:flex gap-5 text-xl">
            <ul className="flex gap-6">
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/Joincummunity"
                      className="p-2 bg-white text-teal-500 border border-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition-all"
                    >
                      Join 
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/supportus"
                      className="p-2 bg-white text-teal-500 border border-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition-all"
                    >
                      Support
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="relative">
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center p-3 bg-white border border-teal-500 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white cursor-pointer"
                    >
                      <FaUserCircle className="h-8 w-8" />
                    </div>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                        <div className="p-3 text-xl font-semibold text-teal-500 text-center">
                          {userName || 'Guest User'}
                        </div>
                        <div className="p-3 text-sm font-semibold text-black">
                          <Link
                            to={`/dashboard/${userName}`}
                            className="block w-full text-center text-blue-500 hover:bg-gray-100 p-3"
                          >
                            Dashboard
                          </Link>
                        </div>
                        <div className="p-3 text-sm font-semibold text-black">
                          <Link
                            to="/supportus"
                            className="block w-full text-center text-blue-500 hover:bg-gray-100 p-3"
                          >
                            Support Us
                          </Link>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full p-2 text-center text-red-500 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Mobile Drawer Toggle */}
          <div className="lg:hidden block">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden bg-teal-500 p-5">
            <ul className="flex flex-col gap-4 text-white text-lg">
              {['/', '/adopt', '/shelters', '/petshops', '/aboutus' ,'/pricing'].map((path, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    onClick={() => setMobileDrawerOpen(false)}
                    className="block p-3 hover:bg-teal-700 rounded-lg transition-all"
                  >
                    {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              ))}
              {!isLoggedIn ? (
                <>
                  <li className='flex'>
                    <Link
                      to="/Joincummunity"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="p-3 bg-white text-teal-500 border border-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition-all"
                    >
                      Join Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/supportus"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="p-3 bg-white text-teal-500 border border-teal-500 rounded-lg hover:bg-teal-500 hover:text-white transition-all"
                    >
                      Support Us
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full p-3 bg-red-500 text-white rounded-lg"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

