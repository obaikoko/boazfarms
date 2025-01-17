import React from 'react';

const Mission = () => {
  return (
    <div>
      {/* Vision and Mission Section */}
      <div
        className='relative bg-cover bg-center text-white py-16 px-6'
        style={{
          backgroundImage: "url('/images/employment.jpg')", // Ensure the image path is correct
        }}
      >
        {/* Overlay for better readability */}
        <div className='absolute inset-0 bg-green-900 bg-opacity-50'></div>

        {/* Content */}
        <div className='relative z-10 max-w-5xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-8'>
            Our Vision & Mission
          </h2>

          {/* Vision Section */}
          <div className='mb-10'>
            <h3 className='text-2xl md:text-3xl font-semibold text-yellow-400 mb-4'>
              Our Vision
            </h3>
            <p className='text-lg md:text-xl leading-relaxed'>
              To revolutionize agriculture in Africa by promoting organic
              farming, empowering communities with sustainable practices, and
              providing access to nutritious, locally-grown produce for a
              healthier future.
            </p>
          </div>

          {/* Mission Section */}
          <div>
            <h3 className='text-2xl md:text-3xl font-semibold text-yellow-400 mb-4'>
              Our Mission
            </h3>
            <p className='text-lg md:text-xl leading-relaxed'>
              At Boaz Farms, we are committed to enhancing food security through
              eco-friendly farming practices, creating job opportunities for
              local communities, and driving economic growth by connecting
              farmers to sustainable agribusiness solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
