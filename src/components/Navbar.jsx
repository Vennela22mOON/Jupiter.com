import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaUser, FaEye, FaChevronDown, FaFont, FaSun, FaSearch, FaBars, FaCalendarAlt, FaUserMd, FaHeart } from 'react-icons/fa';
import jupiter from '../icons/jupitericon.jpeg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEyeDropdownOpen, setIsEyeDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleEyeDropdown = () => {
    setIsEyeDropdownOpen(!isEyeDropdownOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsEyeDropdownOpen(false);
  };

  const handleMouseEnter = (item) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 300); 
    setTimeoutId(id);
  };

  return (
    <div className="bg-slate-200  h-16 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-end items-center px-4 py-2 max-w-screen-lg mx-auto space-x-4">
        <div className="relative flex items-center space-x-2 sm:flex-wrap sm:justify-center">
          <FaMapMarkerAlt size={20} className="text-blue-600" />
          <span
            className="text-blue-600 font-semibold text-sm cursor-pointer"
            onClick={toggleDropdown}
          >
            Location
          </span>
          {selectedLocation && (
            <span className="text-blue-600 ml-2 font-semibold">{selectedLocation}</span>
          )}
          <FaChevronDown size={15} className="text-black cursor-pointer" />

          {isDropdownOpen && (
            <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md w-40 p-2">
              <ul className="space-y-2">
                <li
                  className="text-blue-600 hover:text-orange-500 cursor-pointer"
                  onClick={() => handleLocationSelect('Thane')}
                >
                  Thane
                </li>
                <li
                  className="text-blue-600 hover:text-orange-500 cursor-pointer"
                  onClick={() => handleLocationSelect('Pune')}
                >
                  Pune
                </li>
                <li
                  className="text-blue-600 hover:text-orange-500 cursor-pointer"
                  onClick={() => handleLocationSelect('Indore')}
                >
                  Indore
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2 sm:flex-wrap sm:space-x-0 sm:justify-center">
  <FaPhoneAlt size={20} className="text-blue-600" />
  <span className="text-blue-600 font-extrabold text-sm hover:text-orange-500">
    <a href="tel:+912066375555">+91-20 6637 5555</a>
  </span>
</div>

        <div className="relative flex items-center space-x-4">
          <Link to='/login-page'>
          <button className="bg-blue-500 hover:bg-blue-300 text-white py-2 px-4 rounded-md flex items-center space-x-2">
            <FaUser size={20} />
            <span>LOGIN</span>
          </button>
          </Link>

          <div className="relative">
            <div
              className="bg-blue-600 p-2 rounded-full cursor-pointer"
              onClick={toggleEyeDropdown}
            >
              <FaEye size={20} className="text-white" />
            </div>
            {isEyeDropdownOpen && (
              <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md w-40 p-2">
                <ul className="space-y-2">
                  <li
                    className="text-blue-600 hover:text-orange-500 cursor-pointer"
                    onClick={() => handleOptionSelect('Font Size')}
                  >
                    <FaFont size={18} className="inline-block mr-2" />
                    Font Size
                  </li>
                  <li
                    className="text-blue-600 hover:text-orange-500 cursor-pointer"
                    onClick={() => handleOptionSelect('Brightness')}
                  >
                    <FaSun size={18} className="inline-block mr-2" />
                    Brightness
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex items-center justify-between">
         <Link to='/'>
         <img src={jupiter} alt="Jupiter Icon" className="w-24 h-24 ml-5" />
         </Link>

          <div className="flex flex-grow justify-center">
            <ul className="list-none flex space-x-8">
             <Link to='/'>
             <li className="text-black hover:text-orange-500">HOME</li>
             </Link>
             <li
  className="text-black hover:text-orange-500 relative"
  onMouseEnter={() => setHoveredItem('specialities')}
  onMouseLeave={() => setHoveredItem('specialities')}
>
  SPECIALITIES
  {hoveredItem === 'specialities' && (
    <div
      className="absolute top-8 left-0 bg-white shadow-lg rounded-md p-8 w-60 max-h-80 overflow-y-hidden overflow-x-hidden"
      onMouseEnter={() => setHoveredItem('specialities')} 
      onMouseLeave={() => setHoveredItem('specialities')} 
    >
      <ul className="space-y-2 list-disc">
        <li className="text-black hover:text-orange-500 cursor-pointer">Bariatic Surgery</li>
        <li className="text-black hover:text-orange-500 cursor-pointer">Cardiology</li>
        <li className="text-black hover:text-orange-500 cursor-pointer">Dermatology</li>
        <li className="text-black hover:text-orange-500 cursor-pointer">Gastroenterology</li>
        <li className="text-black hover:text-orange-500 cursor-pointer">Haematology and BMT</li>
        <li className="text-black hover:text-orange-500 cursor-pointer">Interventional Radiology</li>
      </ul>
    </div>
  )}
</li>

              <li
                className="text-black hover:text-orange-500 relative"
                onMouseEnter={() => setHoveredItem('appointment')}
                onMouseLeave={() => setHoveredItem('appointment')}
              >
                APPOINTMENT
                {hoveredItem === 'appointment' && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-40 p-2">
                    <ul className="space-y-2">
                      <li className="text-blue-600 hover:text-orange-500 cursor-pointer">
                        <Link to='book-appintment'>Book Appointment</Link>
                        </li>
                    
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="text-black hover:text-orange-500 relative"
                onMouseEnter={() => setHoveredItem('about')}
                onMouseLeave={() => setHoveredItem()}
              >
                ABOUT
                {hoveredItem === 'about' && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-40 p-2">
                    <ul className="space-y-2">
                      <li className="text-blue-600 hover:text-orange-500 cursor-pointer">
                        <Link to='/contact-us'>Contact Us</Link></li>
                      <li className="text-blue-600 hover:text-orange-500 cursor-pointer">About Us</li>
                    </ul>
                  </div>
                )}
              </li>
              <Link to='/finding-doctor'>
              <li>
                <FaSearch size={20} className="text-blue-500" />
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-slate-200 flex justify-center gap-2'>
        <Link to="/form">
         <div className='flex p-4'>
         <FaCalendarAlt size={25} className='text-gray-500' />
         <span className='text-gray-500 font-extrabold'>Book An Appointment</span>
         </div>
         </Link>
        <Link to="/finding-doctors">
        <div className='flex p-4'>
            <FaUserMd size={25} className='text-gray-500' />
            <span className='text-gray-500 font-extrabold'>Find a Doctor</span>
         </div>
        </Link>
        <Link to='/health-checkup'>
        <div className='flex p-4'>
           <FaHeart size={25} className='text-gray-500' />
           <span className='text-gray-500 font-extrabold'>Health Check-Up</span>
         </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
