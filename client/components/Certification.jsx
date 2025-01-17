import React from 'react';

const Certification = () => {
  const certifications = [
    { title: 'USDA Organic', description: 'Certified Organic Food Producer' },
    {
      title: 'Global GAP',
      description: 'Good Agricultural Practices Certified',
    },
    {
      title: 'Fair Trade Certified',
      description: 'Ethically Sourced and Sustainable Farming Practices',
    },
    {
      title: 'Eco-Agriculture Partner',
      description:
        'Committed to Eco-Friendly and Sustainable Farming Solutions',
    },
    {
      title: 'ISO 14001',
      description: 'Environmental Management System Certified',
    },
  ];
  return (
    <div>
      {/* Certifications and Partnerships */}
      <div className='text-center'>
        <h3 className='text-3xl font-semibold mb-6'>
          Certifications & Partnerships
        </h3>
        <div className='flex flex-wrap justify-center space-x-6'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className='w-60 p-4 bg-white shadow-md rounded-lg mx-4 mb-6'
            >
              <h4 className='font-bold text-lg'>{cert.title}</h4>
              <p className='text-gray-600'>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
