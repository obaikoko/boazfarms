'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Our Location',
      details: 'Edundun Road, Calabar Municipality, Cross River State, Nigeria',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: FaPhoneAlt,
      title: 'Call Us',
      details: '(+234) 9038687828',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: 'boazpartners@gmail.com',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/boazfarms', color: 'text-blue-600', hoverColor: 'hover:text-blue-800' },
    { icon: FaWhatsapp, href: 'https://wa.me/2348146797467', color: 'text-green-600', hoverColor: 'hover:text-green-800' },
    { icon: FaInstagram, href: 'https://instagram.com/boazfarms', color: 'text-pink-600', hoverColor: 'hover:text-pink-800' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/boazfarms', color: 'text-blue-700', hoverColor: 'hover:text-blue-900' },
    { icon: FaTwitter, href: 'https://twitter.com/boazfarms', color: 'text-blue-400', hoverColor: 'hover:text-blue-600' },
  ];

  return (
    <section className='section-padding bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-20 left-20 w-40 h-40 bg-green-200/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
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
            Get In Touch
          </motion.div>
          
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            Let's{' '}
            <span className='gradient-text bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent'>
              Connect
            </span>
          </h2>
          <p className='max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed'>
            We'd love to hear from you! Reach out to us for any inquiries,
            partnerships, or support. Our team is ready to help you with your agricultural needs.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className='space-y-8'
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className='flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 rounded-xl ${item.bgColor} flex-shrink-0`}
                >
                  <item.icon className={`text-2xl ${item.color}`} />
                </motion.div>
                <div>
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>{item.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{item.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
          >
            <div className='bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden'>
              {/* Background Pattern */}
              <div className='absolute inset-0 opacity-10'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16' />
                <div className='absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12' />
              </div>
              
              <div className='relative z-10'>
                <h3 className='text-3xl font-bold mb-4'>How Can We Help?</h3>
                <p className='text-green-100 mb-8 text-lg leading-relaxed'>
                  Whether you want to visit us, collaborate, or learn more about our
                  products and services, we are just a message or call away!
                </p>
                
                <div className='space-y-4'>
                  <motion.a
                    href='tel:+2349038687828'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='block bg-white text-green-700 font-bold text-center py-4 rounded-xl hover:bg-green-50 transition-colors duration-300 shadow-lg'
                  >
                    📞 Call Us Now
                  </motion.a>
                  <motion.a
                    href='mailto:boazpartners@gmail.com'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='block bg-green-500 text-white font-bold text-center py-4 rounded-xl hover:bg-green-400 transition-colors duration-300 shadow-lg'
                  >
                    ✉️ Email Us
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className='text-center mt-16'
        >
          <h3 className='text-2xl font-bold text-gray-800 mb-8'>Follow Our Journey</h3>
          <div className='flex justify-center flex-wrap gap-6'>
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${social.color} ${social.hoverColor}`}
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon className='text-2xl' />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
