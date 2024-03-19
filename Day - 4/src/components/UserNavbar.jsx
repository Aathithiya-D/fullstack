import React, { useState } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const closeProfileMenu = () => {
    setShowProfileMenu(false);
  };

  return (
    <div>
      <nav className=" bg-rose-700 text-white flex flex-col md:flex-row justify-between items-center py-2 px-5 fixed w-full top-0 shadow-lg">
        <h1 className="text-2xl font-extrabold">Starry Ni8's</h1>
        
        <div className="flex items-center mt-3 md:mt-0 space-x-5 text-xl">
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-10 py-3">
            <li>
              <Link to='/user/home' className="block px-4 py-2 text-white-800 hover:text-blue-500 rounded-lg transition-all duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link to="/user/events" className="block px-4 py-2 text-white-800 hover:text-blue-500 rounded-lg transition-all duration-300 ease-in-out">
                Events
              </Link>
            </li>
            <li>
              <Link to='/user/bookings' className="block px-4 py-2 text-white-800 hover:text-blue-500 rounded-lg transition-all duration-300 ease-in-out">
                My Bookings
              </Link>
            </li>
            <li>
              <div className="relative group">
                <button
                  className="block px-4 py-2 text-white-800 hover:text-blue-500 rounded-lg transition-all duration-300 ease-in-out"
                  onClick={toggleProfileMenu}
                >
                  <AccountCircleRoundedIcon />
                </button>
                {showProfileMenu && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                    onClick={closeProfileMenu}
                  >
                    <ul className="py-2">
                      <li>
                        <Link to='/user/profile' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          Your Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => {localStorage.clear()}
                                  }
                          to='/' className="block px-4 py-2 text-gray-800 bg-white hover:text-red-500 rounded-lg transition-all duration-300 ease-in-out">
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}