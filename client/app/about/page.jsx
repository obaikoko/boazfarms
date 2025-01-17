import Certification from '@/components/Certification';
import CompanyStory from '@/components/CompanyStory';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Mission from '@/components/Mission';
import Navbar from '@/components/Navbar';
import TeamSection from '@/components/TeamSection';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className='bg-white'>
        <div className=''>
          <Mission />
          {/* <CompanyStory /> */}
          <TeamSection />
          <Certification />
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
}
