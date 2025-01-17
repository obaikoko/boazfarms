import React from 'react';

const Mission = () => {
  return (
    <div>
      {/* Vision and Mission Section */}
      <div className='bg-green-50 text-gray-800 py-16 px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-green-700 mb-12'>
            Our Vision & Mission
          </h2>

          {/* Vision Section */}
          <div className='mb-12'>
            <h3 className='text-2xl md:text-3xl font-semibold text-green-600 mb-4'>
              Our Vision
            </h3>
            <p className='text-lg md:text-xl leading-relaxed'>
              To transform agriculture in Africa by championing organic farming
              practices, empowering communities, and ensuring access to
              sustainable, nutritious food. We envision a future where every
              home enjoys healthy, locally-grown produce and every farmer
              thrives.
            </p>
          </div>

          {/* Mission Section */}
          <div>
            <h3 className='text-2xl md:text-3xl font-semibold text-green-600 mb-4'>
              Our Mission
            </h3>
            <p className='text-lg md:text-xl leading-relaxed'>
              At Boaz Farms, our mission is to revolutionize farming through
              innovative solutions and sustainable practices. We are committed
              to supporting farmers, creating jobs, and promoting eco-friendly
              agricultural methods to nourish communities and drive economic
              growth while protecting the environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
