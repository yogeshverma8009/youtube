import React from 'react';
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImYoutube2 } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg items-center bg-white rounded-lg">
      {/* Left section */}
      <div className='flex items-center col-span-1'>
        <GiHamburgerMenu 
          onClick={toggleMenuHandler} 
          className="h-8 w-8 text-gray-500 cursor-pointer" 
          aria-label="Toggle menu" 
        />
        <a href='/'>
          <ImYoutube2 className="h-8 w-36 text-red-600" aria-label="YouTube logo" />
        </a>
      </div>

      {/* Middle section: Search bar */}
      <div className='col-span-10 flex justify-center items-center'>
        <input 
          className='w-1/2 border-2 border-gray-300 rounded-l-full p-2 focus:outline-none focus:ring-2 focus:ring-gray-400'
          type='text' 
          placeholder='Search...' 
          aria-label="Search"
        />
        <button 
          className='px-4 py-2 bg-gray-400 text-white font-bold rounded-r-full hover:bg-gray-700 transition-all flex items-center'
          aria-label="Search button"
        >
          <FiSearch className='h-[27px] w-5' />
        </button>
      </div>

      {/* Right section: User icon */}
      <div className='col-span-1 flex justify-end'>
        <FaUser className="h-8 w-8 text-gray-500 cursor-pointer" aria-label="User icon" />
      </div>
    </div>
  );
}

export default Head;
