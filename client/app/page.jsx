'use client';

import { motion } from 'framer-motion';
import Contact from '@/components/Contact';
import CoreOfferings from '@/components/CoreOfferings';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Testimonial from '@/components/Testimonial';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoreOfferings />
      
      {/* Commissioner Visit Section */}
      <section className='section-padding bg-white relative overflow-hidden'>
        <div className='container-custom'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className='relative overflow-hidden rounded-3xl shadow-2xl'
              >
                <img
                  src='/images/visit5.jpg'
                  alt='Commissioner of Agriculture Cross River State visiting Boaz Farm - Sustainable agriculture partnership'
                  className='w-full h-auto object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent' />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className='absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg'
              >
                <span className='text-sm font-semibold'>Official Visit</span>
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className='inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium'
              >
                <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                Government Partnership
              </motion.div>

              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight'>
                A Landmark Visit to{' '}
                <span className='gradient-text bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent'>
                  Boaz Farm
                </span>
              </h2>

              <div className='space-y-4 text-lg text-gray-700 leading-relaxed'>
                <p>
                  Boaz Farm had the honor of hosting{' '}
                  <span className='font-semibold text-green-700'>Hon. Idi Mukhtar Maiha</span>, the{' '}
                  <span className='font-semibold text-green-700'>
                    Commissioner of Agriculture, Cross River State
                  </span>
                  , alongside the{' '}
                  <span className='font-semibold text-green-700'>
                    State Coordinator for Livestock Farming
                  </span>
                  .
                </p>
                
                <p>
                  Their visit underscored the state's commitment to advancing{' '}
                  <span className='text-green-700 font-medium'>
                    sustainable agriculture
                  </span>{' '}
                  and{' '}
                  <span className='text-green-700 font-medium'>
                    livestock development
                  </span>
                  . Discussions focused on modern farming techniques, innovative
                  livestock management, and strategic partnerships to boost food
                  security.
                </p>
                
                <p>
                  We are excited about the future and remain committed to driving
                  agricultural excellence in Cross River State.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className='flex flex-col sm:flex-row gap-4 pt-4'
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn-primary'
                >
                  Learn About Our Partnership
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn-secondary'
                >
                  View Gallery
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
