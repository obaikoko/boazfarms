'use client';

import { useState } from 'react';

import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className='bg-green-700  p-2 text-white relative z-50 h-[80px]'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='text-2xl font-bold w-[150px] '>
          <img src='/images/logo-transparent.png' alt='' />
          {/* <Link href='/'>Boaz Farms</Link> */}
        </div>

        {/* Hamburger Icon */}
        <div className=' flex md:hidden'>
          <button onClick={toggleMenu} className=' ml-3 focus:outline-none'>
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span className='block w-7 h-0.5 bg-white transition-transform duration-300 ease-in-out'></span>
              <span className='block w-7 h-0.5 bg-white mt-1 transition-transform duration-300 ease-in-out'></span>
              <span className='block w-7 h-0.5 bg-white mt-1 transition-transform duration-300 ease-in-out'></span>
            </div>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`flex flex-col py-10 md:p-2 md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 bg-grad bg-green-800 md:bg-transparent w-full md:w-auto left-0 absolute md:static transition-all duration-500 ease-in-out ${
            isOpen ? 'top-16 z-40' : 'top-[-500px]'
          }`}
        >
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href='/'
            className='hover:text-yellow-200 transition duration-300'
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href='/about'
            className='hover:text-yellow-200 transition duration-300'
          >
            About
          </Link>
          <Link
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            href='/services'
            className='hover:text-yellow-200 transition duration-300'
          >
            Services
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
          background-color: yellow;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
          background-color: yellow;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
