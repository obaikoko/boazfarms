'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
      <section
        className='relative bg-cover bg-center h-screen flex items-center'
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      >
        {/* Overlay for better contrast */}
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>

        <div className='container mx-auto px-4 z-10 flex flex-col md:flex-row items-center'>
          {/* Left-aligned Text */}
          <div className='text-white md:w-1/2 text-center md:text-left mr-[10px]'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              Welcome to Boaz Farms
            </h1>
            <p className='text-lg md:text-xl mb-6'>
              Experience the best of organic farming with Boaz Farms. Fresh
              produce, sustainable practices, and a touch of nature at its
              finest.
            </p>
            <button className='px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700'>
              Learn More
            </button>
          </div>

          {/* Right-aligned Image */}
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <img
              src='/images/hero.webp' // Provide the correct image path
              alt='Farm'
              className='rounded-lg shadow-lg mx-auto md:ml-auto'
            />
          </div>
        </div>
      </section>

      <svg
        className='frame-decoration'
        data-name='Layer 2'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        viewBox='0 0 1920 192.275'
      >
        <defs>
          <style>{`.cls-1 { fill: #ffffff; }`}</style>
        </defs>
        <title>frame-decoration</title>
        <path
          className='cls-1'
          d='M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z'
          transform='translate(0 -150.755)'
        />
      </svg>
    </>
  );
};

export default HeroSection;
