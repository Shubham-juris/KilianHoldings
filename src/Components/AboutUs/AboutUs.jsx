import React from 'react';
import ourvalues from '../../assets/AboutUs/ourvalues.jpg';
import innovation from '../../assets/AboutUs/innovation.jpg';
import community from '../../assets/AboutUs/community.jpg';
import success from '../../assets/AboutUs/success.jpg';
import journey from '../../assets/AboutUs/journey.jpg';

const AboutUs = () => {
  return (
    <div
      className='grid grid-cols-2 grid-rows-[0.40fr_1fr_1fr_1fr_1fr_1fr] h-full w-full gap-x-[20px] gap-y-[50px]'
      style={{ padding: '64px' }}
    >
      {/* About Section Title */}
      <div className='col-start-1 col-end-3 row-start-1 row-end-2 text-[3em] font-bold h-full flex items-center justify-center text-center'>
        About Kilian Holdings Ltd
      </div>

      {/* Hero Image */}
      <div className='col-start-1 col-end-2 row-start-2 row-end-3 place-self-center h-full w-full '>
        <img
          src={ourvalues} // Using the imported image
          alt='Kilian Holdings Hero'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Our Values Section */}
      <div className='col-start-2 col-end-3 row-start-2 row-end-3 place-self-center flex flex-col justify-center items-center gap-[20px]'>
        <p className='font-semibold text-[32px]'>Our Values</p>
        <p className='text-[20px]'>
          At Kilian Holdings, our core values guide everything we do. Integrity,
          compassion, and excellence aren’t just words to us; they are pillars
          upon which our firm is built. We believe in conducting ourselves with
          utmost honesty and transparency, treating every client with empathy
          and respect, and striving for excellence in every aspect of our work.
        </p>
      </div>

      {/* Innovation in Action */}
      <div className='col-start-1 col-end-2 row-start-3 row-end-4 place-self-center flex flex-col justify-center items-center gap-[20px]'>
        <p className='font-semibold text-[32px]'>Innovation in Action</p>
        <p className='text-[20px]'>
          In a rapidly changing world, innovation isn’t just an option; it’s a
          necessity. At Kilian Holdings, we embrace innovation as a means of
          enhancing our services and improving the client experience. From
          leveraging cutting-edge technology to streamline processes to adopting
          creative legal strategies to solve complex problems, we’re constantly
          pushing the boundaries of what’s possible in the legal realm.
        </p>
      </div>

      {/* Second Hero Image */}
      <div className='col-start-2 col-end-3 row-start-3 row-end-4 place-self-center h-full'>
        <img
          src={innovation} // Using the imported image
          alt='Innovation in Action'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Community Engagement */}
      <div className='col-start-1 col-end-2 row-start-4 row-end-5 place-self-center h-full w-full'>
        <img
          src={community} // Using the imported image
          alt='Community Engagement'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='col-start-2 col-end-3 row-start-4 row-end-5 place-self-center flex flex-col justify-center items-center gap-[20px]'>
        <p className='font-semibold text-[32px]'>Community Engagement</p>
        <p className='text-[20px]'>
          We believe that true success is measured not only by personal
          achievements but also by contributions to the community. That’s why
          Kilian Holdings is deeply committed to giving back. Whether through
          pro bono work, volunteer efforts, or partnerships with local
          organizations, we’re dedicated to making a positive impact in the
          communities we serve.
        </p>
      </div>

      {/* Client Success Stories */}
      <div className='col-start-1 col-end-2 row-start-5 row-end-6 place-self-center flex flex-col justify-center items-center gap-[20px]'>
        <p className='font-semibold text-[32px]'>Client Success Stories</p>
        <p className='text-[20px]'>
          Behind every case at Kilian Holdings is a story of resilience,
          determination, and triumph. From helping small businesses navigate
          hurdles to assisting individuals in securing justice, our clients’
          success stories inspire and drive us every day. Read some of our
          client testimonials to learn more about the real-life impact of our
          work.
        </p>
      </div>

      {/* Fifth Hero Image */}
      <div className='col-start-2 col-end-3 row-start-5 row-end-6 place-self-center h-full w-full'>
        <img
          src={success} // Using the imported image
          alt='Client Success'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Our Journey */}
      <div className='col-start-1 col-end-2 row-start-6 row-end-7 place-self-center h-full w-full'>
        <img
          src={journey} // Using the imported image
          alt='Our Journey'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='col-start-2 col-end-3 row-start-6 row-end-7 place-self-center flex flex-col justify-center items-center gap-[20px]'>
        <p className='font-semibold text-[32px]'>Our Journey Starts Here</p>
        <p className='text-[20px]'>
          At Kilian Holdings, we’re more than just documentation specialists;
          we’re companions on your documentation journey. Whether you’re
          navigating complex paperwork or seeking guidance on documentation
          matters, we’re here to assist you. Get in touch with us today to
          arrange a consultation and discover the Kilian Holdings approach
          firsthand.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
