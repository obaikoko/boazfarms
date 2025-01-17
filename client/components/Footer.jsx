'use client';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-green-800 text-white py-10'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <h4 className='text-lg font-bold mb-4'>Boaz Farms</h4>
            <p className='mb-2'>
              Your trusted partner for clean solar energy solutions.
            </p>
            <p>Empowering homes and businesses with sustainable energy.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/products' className='hover:underline'>
                  Products
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Contact Us</h4>
            <p className='mb-2'>Email: support@cesoleenergy.com</p>
            <p>Phone: (+234) 906 699 6674</p>
            <div className='flex space-x-4 mt-4'>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors duration-300'
              >
                <FaFacebook />
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors duration-300'
              >
                <FaWhatsapp />
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors duration-300'
              >
                <FaInstagram />
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors duration-300'
              >
                <FaLinkedin />
              </Link>
              <Link
                href='#'
                className='text-gray-400 hover:text-white transition-colors duration-300'
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className='text-center py-4 border-t border-gray-700 mt-6'>
        <p>
          &copy; {new Date().getFullYear()} Boaz Farms. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
