import React from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='py-16 bg-gradient-to-br from-green-50 to-white'>
      <div className='container mx-auto px-6'>
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-extrabold text-green-700 mb-4'>
            Get in Touch
          </h2>
          <p className='max-w-2xl mx-auto text-lg text-gray-600'>
            We'd love to hear from you! Reach out to us for any inquiries,
            partnerships, or support.
          </p>
        </div>

        {/* Contact Information */}
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Contact Details */}
          <div className='md:w-1/2 space-y-8'>
            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt className='text-green-600 text-3xl' />
              <div>
                <h3 className='text-lg font-semibold'>Our Location</h3>
                <p className='text-gray-600'>123 Farm Lane, Calabar, Nigeria</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <FaPhoneAlt className='text-green-600 text-3xl' />
              <div>
                <h3 className='text-lg font-semibold'>Call Us</h3>
                <p className='text-gray-600'>+234 812 345 6789</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <FaEnvelope className='text-green-600 text-3xl' />
              <div>
                <h3 className='text-lg font-semibold'>Email Us</h3>
                <p className='text-gray-600'>info@boazfarms.com</p>
              </div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className='md:w-1/2 bg-green-100 p-8 rounded-lg shadow-lg'>
            <h3 className='text-2xl font-semibold text-green-700 mb-4'>
              How Can We Help?
            </h3>
            <p className='text-gray-600 mb-6'>
              Whether you want to visit us, collaborate, or learn more about our
              products and services, we are just a message or call away!
            </p>
            <div className='space-y-4'>
              <a
                href='tel:+2348123456789'
                className='block bg-green-600 text-white font-semibold text-center py-3 rounded-lg hover:bg-green-700 transition-colors'
              >
                Call Us Now
              </a>
              <a
                href='mailto:info@boazfarms.com'
                className='block bg-white border border-green-600 text-green-600 font-semibold text-center py-3 rounded-lg hover:bg-green-700 hover:text-white transition-colors'
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='mt-12 text-center'>
          <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
          <div className='flex justify-center space-x-6'>
            <Link href='https://facebook.com'>
              <FaFacebook className='text-2xl text-blue-600 hover:text-blue-800 transition-colors' />
            </Link>
            <Link href='https://twitter.com'>
              <FaTwitter className='text-2xl text-blue-400 hover:text-blue-600 transition-colors' />
            </Link>
            <Link href='https://linkedin.com'>
              <FaLinkedin className='text-2xl text-blue-700 hover:text-blue-900 transition-colors' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
