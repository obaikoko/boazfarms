import Contact from '@/components/Contact';
import CoreOfferings from '@/components/CoreOfferings';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Testimonial from '@/components/Testimonial';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoreOfferings />
      <section className='bg-green-50 py-12 px-6 md:px-16'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* Image Section */}
          <div className='w-full md:w-1/2'>
            <img
              src='/images/visit5.jpg' // Update with actual image path
              alt='Commissioner visiting Boaz Farm'
              className='w-full h-auto rounded-2xl shadow-lg'
            />
          </div>

          {/* Text Section */}
          <div className='w-full md:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold text-green-800'>
              A Landmark Visit to Boaz Farm
            </h2>
            <p className='text-lg text-gray-700 mt-4 leading-relaxed'>
              Boaz Farm had the honor of hosting the{' '}
              <span className='font-semibold'>
                Commissioner of Agriculture, Cross River State
              </span>
              , and the{' '}
              <span className='font-semibold'>
                State Coordinator for Livestock Farming
              </span>
              .
            </p>
            <p className='text-lg text-gray-700 mt-4 leading-relaxed'>
              Their visit underscored the state's commitment to advancing{' '}
              <span className='text-green-700 font-medium'>
                sustainable agriculture
              </span>{' '}
              and{' '}
              <span className='text-green-700 font-medium'>
                livestock development
              </span>
              . Discussions focused on modern farming techniques, innovative
              livestock management, and strategic partnerships to boost food
              security.
            </p>
            <p className='text-lg text-gray-700 mt-4 leading-relaxed'>
              We are excited about the future and remain committed to driving
              agricultural excellence in Cross River State.
            </p>
          </div>
        </div>
      </section>
      <Testimonial />

      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
