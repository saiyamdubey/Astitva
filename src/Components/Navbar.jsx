import React, { useState, useEffect } from 'react';
import logo from '../assets/logo1.png';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const checkLoginState = () => {
    const user = JSON.parse(localStorage.getItem('userhai'));
    // console.log("hello ", user.message)
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
  // alert(location.pathname)
  const handleLogout = () => {
    localStorage.removeItem('userhai');
    setIsLoggedIn(false);
    setDropdownOpen(false); // Close dropdown after logout
    navigate('/');
  };

  return (
    <nav className="top-0 z-50 sticky max-w-screen">
      <div className="font-bold text-neutral-800">
        <div className="bg-teal-500 flex justify-around items-center py-3 lg:px-20 px-10">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-16 w-16 rounded-full" />
            <a href="#" className="ml-5 text-xl lg:text-2xl">
              Astitva<span className="text-white">4</span>Animals
            </a>
          </div>
          <div className="hidden lg:flex list-none">
            <ul className="flex text-xl gap-10">
              <li>
                <Link
                  to="/"
                  className="p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/adopt"
                  className="p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl"
                >
                  Pet Adoption
                </Link>
              </li>
              <li>
                <Link
                  to="/shelters"
                  className="p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl"
                >
                  Shelters
                </Link>
              </li>
              <li>
                <Link
                  to="/petshops"
                  className="p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl"
                >
                  Pet Shops
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="p-2 border-transparent border-2 hover:border-black hover:bg-slate-200 hover:rounded-xl"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-5 text-xl">
            <ul className="flex text-xl gap-10">
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/Joincummunity"
                      className="p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white"
                    >
                      Join Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/supportus"
                      className="p-3 bg-white border border-black rounded-lg hover:scale-110 hover:bg-black hover:text-white"
                    >
                      Support Us
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="relative ">
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="flex items-center p-3 bg-white border border-black rounded-full hover:scale-110 hover:bg-black hover:text-white cursor-pointer"
                    >
                      <img
                        src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                        alt="User"
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                    {dropdownOpen && (
                      <div className="absolute  right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50 ">
                        <div className="p-3 text-2xl justify-center items-center  font-semibold text-purple ml-8">
                          {userName || 'Guest User'}
                        </div>
                        {/* <div className="p-3 text-sm font-semibold text-black">
                          <Link className='block w-full  text-center text-blue-500 hover:bg-gray-100 p-3 text-xl font-semibold ' to={`/dashboard/${userName}`}>Dashboard</Link>
                        </div> */}
                        <div className="p-3 text-sm font-semibold text-black">
                          {/* Conditional Link based on current page */}
                          <Link
                            className="block w-full text-center text-blue-500 hover:bg-gray-100 p-3 text-xl font-semibold"
                            to={location.pathname.startsWith('/dashboardshelter/') ? `/dashboardshelter/${userName}` : `/dashboard/${userName}`}
                          >
                            Dashboard
                          </Link>
                        </div>


                        <div className="p-3 text-sm font-semibold text-black">
                          <Link className='block w-full  text-center text-blue-500 hover:bg-gray-100 p-3 text-xl font-semibold' to={`/supportus`}>Support Us</Link>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="block w-full p-2 text-center text-red-500 hover:bg-gray-100"
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
          <div className="lg:hidden block right-0">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
