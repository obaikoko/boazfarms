'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100'
          : 'bg-green-700'
      }`}
    >
      <div className='container-custom'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex-shrink-0'
          >
            <Link href='/' className='flex items-center space-x-3'>
              <img
                src='/images/logo-transparent.png'
                alt='Boaz Farms Logo - Organic Agriculture and Agribusiness'
                className='h-12 w-auto'
              />
              <span
                className={`hidden sm:block text-xl font-bold ${
                  scrolled ? 'text-green-700' : 'text-white'
                }`}
              >
                Boaz Farms
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`relative font-medium transition-colors duration-300 hover:text-green-600 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className='absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600'
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='btn-primary ml-4'
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-green-600'
            }`}
            aria-label='Toggle menu'
          >
            <div className='w-6 h-6 flex flex-col justify-center space-y-1'>
              <motion.span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? 'bg-gray-700' : 'bg-white'
                }`}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6 : 0,
                }}
              />
              <motion.span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? 'bg-gray-700' : 'bg-white'
                }`}
                animate={{
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <motion.span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? 'bg-gray-700' : 'bg-white'
                }`}
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden bg-white border-t border-gray-200 shadow-lg'
            >
              <div className='px-4 py-6 space-y-4'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className='block text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-300'
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className='btn-primary w-full mt-4'
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
