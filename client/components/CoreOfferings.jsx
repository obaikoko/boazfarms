import React from 'react';

const CoreOfferings = () => {
  const offerings = [
    {
      title: 'Organic Food Provider',
      description:
        'Boaz Farm is a major provider of high-quality organic food that promotes a healthy and sustainable lifestyle.',
      image: '/images/organic_food.jpg', // Replace with your image path
    },
    {
      title: 'Employment Opportunities',
      description:
        'Creating jobs for the African population through sustainable farming practices and agribusinesses.',
      image: '/images/employment.jpg', // Replace with your image path
    },
    {
      title: 'Business Opportunities',
      description:
        'Supporting businesses and agripreneurs with innovative farming solutions and collaborations.',
      image: '/images/business.png', // Replace with your image path
    },
    {
      title: 'Foreign Exchange Earnings',
      description:
        "Contributing to Africa's economy by boosting foreign exchange through agricultural exports.",
      image: '/images/exchange.jpeg', // Replace with your image path
    },
    {
      title: 'Growing Healthy Food',
      description:
        'Focusing on producing nutritious and safe food for healthier communities and sustainable development.',
      image: '/images/healthy_food.jpg', // Replace with your image path
    },
    {
      title: 'Developing Agripreneurs',
      description:
        'Empowering individuals to become successful agripreneurs and drive agricultural innovation.',
      image: '/images/visit5.jpg', // Replace with your image path
    },
  ];

  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
            What We Offer
          </h2>
          <p className='text-lg text-gray-600 mt-2'>
            Boaz Farm is dedicated to empowering communities and providing
            sustainable solutions.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {offerings.map((offering, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg  hover:shadow-lg transition transform hover:-translate-y-1'
            >
              {/* Image */}
              <div className='mb-4 flex justify-center'>
                <img
                  src={offering.image}
                  alt={offering.title}
                  className='w-full h-1/2 object-cover '
                />
              </div>

              {/* Title */}
              <h3 className='text-xl font-bold text-gray-800 mb-2 text-center'>
                {offering.title}
              </h3>

              {/* Description */}
              <p className='text-gray-700 text-center'>
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
