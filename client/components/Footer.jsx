'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Organic Farming', href: '/services#organic' },
    { name: 'Poultry Farming', href: '/services#poultry' },
    { name: 'Fish Farming', href: '/services#fish' },
    { name: 'Agripreneurship', href: '/services#agripreneurship' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com/boazfarms', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/2349038687828', label: 'WhatsApp' },
    { icon: FaInstagram, href: 'https://instagram.com/boazfarms', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/boazfarms', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/boazfarms', label: 'Twitter' },
  ];

  return (
    <footer className='bg-gradient-to-br from-green-800 via-green-700 to-green-800 text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32' />
        <div className='absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24' />
      </div>

      <div className='container-custom relative z-10'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:col-span-1'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='mb-6'
            >
              <img
                src='/images/logo-transparent.png'
                alt='Boaz Farms Logo'
                className='h-12 w-auto mb-4'
              />
              <h4 className='text-2xl font-bold mb-4'>Boaz Farms</h4>
            </motion.div>
            <p className='text-green-100 mb-4 leading-relaxed'>
              Leading organic agriculture and agribusiness company in Calabar, Nigeria. 
              Empowering communities through sustainable farming practices.
            </p>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-green-100'>
                <FaMapMarkerAlt className='text-green-400 flex-shrink-0' />
                <span className='text-sm'>Edundun Road, Calabar, Cross River State</span>
              </div>
              <div className='flex items-center gap-3 text-green-100'>
                <FaPhoneAlt className='text-green-400 flex-shrink-0' />
                <span className='text-sm'>(+234) 9038 687 828</span>
              </div>
              <div className='flex items-center gap-3 text-green-100'>
                <FaEnvelope className='text-green-400 flex-shrink-0' />
                <span className='text-sm'>boazpartners@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className='text-xl font-bold mb-6'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className='text-green-100 hover:text-white transition-colors duration-300 flex items-center group'
                  >
                    <span className='w-0 h-0.5 bg-green-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300' />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className='text-xl font-bold mb-6'>Our Services</h4>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={service.href}
                    className='text-green-100 hover:text-white transition-colors duration-300 flex items-center group'
                  >
                    <span className='w-0 h-0.5 bg-green-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300' />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className='text-xl font-bold mb-6'>Connect With Us</h4>
            <p className='text-green-100 mb-6'>
              Follow our journey in transforming agriculture and empowering communities.
            </p>
            
            {/* Social Media Links */}
            <div className='flex flex-wrap gap-3 mb-6'>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 bg-green-600 hover:bg-green-500 rounded-xl transition-colors duration-300'
                    aria-label={social.label}
                  >
                    <social.icon className='text-lg' />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className='bg-green-600/30 p-4 rounded-xl'>
              <h5 className='font-semibold mb-2'>Stay Updated</h5>
              <p className='text-sm text-green-100 mb-3'>
                Get the latest news about our farming innovations.
              </p>
              <div className='flex  flex-col gap-2'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='flex-1 px-3 py-2 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-400'
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-4 py-2 bg-green-500 hover:bg-green-400 rounded-lg text-sm font-semibold transition-colors duration-300'
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-green-600/30 py-6'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-green-100 text-sm'>
              &copy; {currentYear} Boaz Farms. All rights reserved. | 
              <Link href='/privacy' className='hover:text-white transition-colors duration-300 ml-1'>
                Privacy Policy
              </Link>
              {' | '}
              <Link href='/terms' className='hover:text-white transition-colors duration-300'>
                Terms of Service
              </Link>
            </p>
            <p className='text-green-100 text-sm'>
              Made with ❤️ for sustainable agriculture in Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
