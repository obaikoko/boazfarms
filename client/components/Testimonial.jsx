import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Rita John',
      image: '/images/custome.jpg', // Replace with your image path
      text: 'I get freash eggs and fishes at affordable prices from Boaz Farm. I love it!',
    },
    {
      name: 'Godswill Akpata',
      image: '/images/custome2.jpg', // Replace with your image path
      text: 'Boaz Farms is my go to for sizeable eggs at the best rate.',
    },
    {
      name: 'Uwem Bassey',
      image: '/images/custom1.jpg', // Replace with your image path
      text: 'Amazing service and great quality products! Boaz Farm has exceeded my expectations.',
    },
  ];

  return (
    <section className='bg-green-950 py-16'>
      <div className='container mx-auto px-4'>
        {/* Section Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-100'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-gray-100 mt-2'>
            Hear from some of our happy customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-green-700 p-6 rounded-lg shadow-md text-center'
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-20 h-20 rounded-full mx-auto mb-4'
              />
              <p className='text-white italic mb-4'>"{testimonial.text}"</p>
              <h4 className='font-bold text-white'>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
