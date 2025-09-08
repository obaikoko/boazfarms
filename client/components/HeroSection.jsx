'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
        {/* Background Image with Parallax Effect */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-fixed'
          style={{
            backgroundImage: "url('/images/bg.jpg')",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-green-700/80' />
        
        {/* Animated Background Elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <motion.div
            className='absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl'
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl'
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className='container-custom relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='text-center lg:text-left'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className='inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-200 text-sm font-medium mb-6'
              >
                <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                Leading Organic Agriculture in Nigeria
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
              >
                Welcome to{' '}
                <span className='gradient-text bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent'>
                  Boaz Farms
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className='text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl'
              >
                Experience the best of organic farming with Boaz Farms. Fresh
                produce, sustainable practices, and a touch of nature at its
                finest. Empowering communities through agriculture.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn-primary text-lg px-8 py-4'
                >
                  Explore Our Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn-secondary text-lg px-8 py-4'
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className='grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-green-400/30'
              >
                {[
                  { number: '500+', label: 'Happy Customers' },
                  { number: '50+', label: 'Farm Products' },
                  { number: '5+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className='text-center'
                  >
                    <div className='text-2xl md:text-3xl font-bold text-green-400 mb-1'>
                      {stat.number}
                    </div>
                    <div className='text-sm text-gray-300'>{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='relative'
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className='relative z-10'
              >
                <img
                  src='/images/bg.jpg'
                  alt='Boaz Farms - Organic Agriculture and Sustainable Farming in Calabar, Nigeria'
                  className='w-full h-auto rounded-2xl shadow-2xl'
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className='absolute -top-4 -right-4 w-20 h-20 bg-green-400/20 rounded-full blur-sm'
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className='absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full blur-sm'
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1 h-3 bg-white/70 rounded-full mt-2'
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Decorative Wave */}
      <div className='relative -mt-1'>
        <svg
          className='w-full h-20 fill-white'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' />
        </svg>
      </div>
    </>
  );
};

export default HeroSection;
