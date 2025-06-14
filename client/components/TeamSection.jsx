import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Mr. John Eshian Ewa',
      title: 'Founder & CEO',
      image: '/images/ceo.jpg',
    },
    {
      name: 'Jonathan C. Ogbonna',
      title: 'Head of Operations',
      image: '/images/operation-manager.jpg',
    },
    {
      name: 'Dr. DANIEL',
      title: 'Farm Vertinary Doctor',
      image: '/images/vetDoc.jpg',
    },
    {
      name: 'Miss. Onyi Ola Ngwu',
      title: 'Farm Accountant',
      image: '/images/FarmAccountant.jpg',
    },
    {
      name: 'Mr. Igelle Felix Ugbem',
      title: 'Marketing Manager',
      image: '/images/marketing-manager.jpg',
    },
  ];

  return (
    <section className='bg-green-50 py-16 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h3 className='text-4xl font-bold text-green-700 mb-12'>
          Meet Our Team
        </h3>
        <div className='flex flex-wrap justify-center gap-8'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className='w-60 text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow'
            >
              <img
                src={member.image}
                alt={member.name}
                className='rounded-full w-[120px] h-[100] object-cover mx-auto mb-4'
              />
              <h4 className='text-lg font-semibold text-green-800'>
                {member.name}
              </h4>
              <p className='text-sm text-gray-600'>{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
