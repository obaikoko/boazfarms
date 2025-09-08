'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CoreOfferings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const offerings = [
    {
      title: 'Organic Food Provider',
      description:
        'Boaz Farm is a major provider of high-quality organic food that promotes a healthy and sustainable lifestyle.',
      image: '/images/organic_food.jpg',
      icon: '🌱',
    },
    {
      title: 'Employment Opportunities',
      description:
        'Creating jobs for the African population through sustainable farming practices and agribusinesses.',
      image: '/images/employment.jpg',
      icon: '👥',
    },
    {
      title: 'Business Opportunities',
      description:
        'Supporting businesses and agripreneurs with innovative farming solutions and collaborations.',
      image: '/images/business.png',
      icon: '💼',
    },
    {
      title: 'Foreign Exchange Earnings',
      description:
        "Contributing to Africa's economy by boosting foreign exchange through agricultural exports.",
      image: '/images/exchange.jpeg',
      icon: '💰',
    },
    {
      title: 'Growing Healthy Food',
      description:
        'Focusing on producing nutritious and safe food for healthier communities and sustainable development.',
      image: '/images/healthy_food.jpg',
      icon: '🥗',
    },
    {
      title: 'Developing Agripreneurs',
      description:
        'Empowering individuals to become successful agripreneurs and drive agricultural innovation.',
      image: '/images/visit5.jpg',
      icon: '🚀',
    },
    {
      title: 'Poultry Farming Success',
      description:
        'Learn the best practices for raising healthy poultry birds and maximizing egg production.',
      image: '/images/poultry.jpg',
      icon: '🐔',
    },
    {
      title: 'Fresh Farm Eggs',
      description:
        'Providing high-quality, farm-fresh eggs packed with nutrition for a healthier lifestyle.',
      image: '/images/eggs.jpg',
      icon: '🥚',
    },
    {
      title: 'Profitable Fish Farming',
      description:
        'Discover innovative techniques to cultivate and manage fish farms for optimal yield.',
      image: '/images/fishes.jpg',
      icon: '🐟',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='section-padding bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-20 right-20 w-40 h-40 bg-green-200/30 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-20 left-20 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className='container-custom relative z-10'>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6'
          >
            <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
            Our Core Services
          </motion.div>
          
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            What We{' '}
            <span className='gradient-text bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent'>
              Offer
            </span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Boaz Farm is dedicated to empowering communities and providing
            sustainable solutions that transform agriculture and improve lives.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className='group relative'
            >
              <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100'>
                {/* Image Container */}
                <div className='relative h-48 overflow-hidden'>
                  <motion.img
                    src={offering.image}
                    alt={`${offering.title} - Boaz Farms ${offering.title.toLowerCase()} services`}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    className='absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg'
                  >
                    {offering.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className='p-6'>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                    className='text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300'
                  >
                    {offering.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                    className='text-gray-600 leading-relaxed'
                  >
                    {offering.description}
                  </motion.p>

                  {/* Learn More Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 flex items-center group'
                  >
                    Learn More
                    <motion.span
                      className='ml-2 group-hover:translate-x-1 transition-transform duration-300'
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className='text-center mt-16'
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='btn-primary text-lg px-8 py-4'
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreOfferings;
