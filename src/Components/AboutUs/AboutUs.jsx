import ourvalues from '../../assets/AboutUs/ourvalues.jpg';
import innovation from '../../assets/AboutUs/innovation.jpg';
import community from '../../assets/AboutUs/community.jpg';
import success from '../../assets/AboutUs/success.jpg';
import journey from '../../assets/AboutUs/journey.jpg';
import personalizedImg from '../../assets/AboutUs/personalized.jpg';
import expertiseImg from '../../assets/AboutUs/expertise.jpg';
import commitmentImg from '../../assets/AboutUs/commitment.jpg';

const AboutUs = () => {
  const aboutUs = [
    {
      title: 'Personalized Attention',
      image: personalizedImg,
      description:
        "At Kilian Holdings, we recognize that every documentation matter is unique, and we uphold the principle of treating each client as an individual with their own distinct requirements and objectives. From your initial contact with us, you'll encounter our dedication to delivering tailored solutions and personalized attention.",
    },
    {
      title: 'Expertise',
      image: expertiseImg,
      description:
        'At Kilian Holdings, our team consists of seasoned professionals with extensive experience and expertise in a variety of documentation areas. From managing small-scale documentation tasks to handling complex document projects, from assisting with family document matters to facilitating estate documentation, our paralegals possess the know.',
    },
    {
      title: 'Commitment of Excellence',
      image: commitmentImg,
      description:
        "Excellence isn’t just an aspiration at Kilian Holdings; it's ingrained in our identity and actions. We are dedicated to achieving outstanding results and surpassing our clients' expectations in all facets of our work. Whether it's the caliber of our documentation advice or the level of service we deliver, we adhere to the highest standar.",
    },
  ];
  return (
    <div>
      <div
        className='grid grid-cols-2 grid-rows-[0.40fr_1fr_1fr_1fr_1fr_1fr] h-full w-full gap-x-[20px] gap-y-[50px]'
        style={{ padding: '64px' }}
      >
        <div className='col-start-1 col-end-3 row-start-1 row-end-2  text-4xl text-teal-900 font-bold h-full flex items-center justify-center text-center'>
          About kilian holdings Ltd
        </div>
        <div className='col-start-1 col-end-2 row-start-2 row-end-3 place-self-center h-full w-full '>
          <img src={ourvalues} alt='img' className='w-full h-full object-fit' />
        </div>
        <div className='col-start-2 col-end-3 row-start-2 row-end-3 place-self-center flex flex-col justify-center items-center gap-[20px]'>
          <p className='font-semibold text-[32px] '>Our Values</p>
          <p className='text-[20px]'>
            At kilian holdings, our core values guide every things we do,
            integrity, compassion, and excellence aren't just words to us; they
            are pliiers upon which our firm is build. we believe in conducting
            ourselves with utmost honesty and transprancy, treating every client
            with empathy and respect, and striving for excellence in every
            aspect of our work
          </p>
        </div>
        <div className='col-start-1 col-end-2 row-start-3 row-end-4 place-self-center flex flex-col justify-center items-center gap-[20px]'>
          <p className='font-semibold text-[32px] '>Innovation in Action</p>
          <p className='text-[20px]'>
            In a rapidaly changing world, innovation isn't just an option; it's
            a necessity. At kilian holdings, we embrace innovation as means of
            enhancing our services and improving client experience. from
            leveraging cutting-edge technoloy to stremline processes to adopting
            creative legal stratgies to solve complex problems. We're constantly
            pushing the boundries of what's possible in legal realm.
          </p>
        </div>
        <div className='col-start-2 col-end-3 row-start-3 row-end-4 place-self-center h-full'>
          <img
            src={innovation}
            alt='img'
            className='w-full h-full object-fit'
          />
        </div>
        <div className='col-start-1 col-end-2 row-start-4 row-end-5 place-self-center h-full w-full'>
          <img src={success} alt='img' className='w-full h-full object-fit' />
        </div>
        <div className='col-start-2 col-end-3 row-start-4 row-end-5 place-self-center flex flex-col justify-center items-center gap-[20px]'>
          <p className='font-semibold text-[32px] '>Community Engagement</p>
          <p className='text-[20px]'>
            We believe that true success is measured not only bt personal
            achivements but also by contribution to the community. Thats's why
            kilian holdings id deeply committed to giving back. Wheather through
            pro bono work, volunteer efforts, or partnership with local
            organisation, we're dedicated to making a positive impact in the
            communties we serve.
          </p>
        </div>
        <div className='col-start-1 col-end-2 row-start-5 row-end-6 place-self-center flex flex-col justify-center items-center gap-[20px]'>
          <p className='font-semibold text-[32px] '>Client Sucess Stories</p>
          <p className='text-[20px]'>
            Behind every case at kilain holdings is a story of resilience,
            determination, and triumph. From helping small businesses navigate
            hurdles to assisting individuals in securing justice, our clients'
            success Stories inspire and drive us a every day. Read some of our
            client testimonials to learn more about the real-life impact of our
            work.
          </p>
        </div>
        <div className='col-start-2 col-end-3 row-start-5 row-end-6 place-self-center h-full w-full'>
          <img src={community} alt='img' className='w-full h-full object-fit' />
        </div>
        <div className='col-start-1 col-end-2 row-start-6 row-end-7 place-self-center h-full w-full'>
          <img src={journey} alt='img' className='w-full h-full object-fit' />
        </div>
        <div className='col-start-2 col-end-3 row-start-6 row-end-7 place-self-center flex flex-col justify-center items-center gap-[20px]'>
          <p className='font-semibold text-[32px] '>Our Journey Starts here</p>
          <p className='text-[20px]'>
            At kilian holdings, we're more than just documents specialists;
            we're companionson your documentation journey. Whether you're
            navigating complex paperwork or seeking guidance on documentation
            matters, we're here to assist you. Get in touch with ustoday to
            arrange a consultation and discover the kilian holdings approach
            firsthand
          </p>
        </div>
      </div>

      <div
        className='bg-teal-900 p-6  text-white flex flex-col md:flex-row items-center md:space-x-6 gap-[50px] '
        style={{
          paddingInline: '50px',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <div
          className='max-w-full mx-auto py-10 px-4 text-center'
          style={{ paddingInline: '80px', padding: '0px' }}
        >
          <h2
            className='text-4xl font-bold  mb-8'
            style={{ marginBottom: '32px', marginTop: '32px' }}
          >
            Consulting Services for Small Businesses
          </h2>
          <div className='grid md:grid-cols-3 gap-'>
            {aboutUs.map((aboutUs, index) => (
              <div className='p-6' style={{ padding: '40px' }} key={index}>
                <img
                  src={aboutUs.image}
                  alt={aboutUs.title}
                  className='w-full h-60 object-fit mb-4'
                  style={{ marginBottom: '32px' }}
                />
                <h3
                  className='text-xl font-semibold mb-3'
                  style={{ marginBottom: '24px' }}
                >
                  {aboutUs.title}
                </h3>
                <p className='text-lg'>{aboutUs.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className='flex flex-col items-center text-center px-6 py-16 md:px-20 lg:px-32'
        style={{ marginTop: '164px' }}
      >
        <h2 className='text-xl md:text-2xl font-bold text-teal-900 mb-4'>
          get in touch
        </h2>
        <p
          className='text-gray-600 text-base font-semibold md:text-lg max-w-2xl mb-6'
          style={{ paddingTop: '24px', marginBottom: '16px' }}
        >
          Ready to move forward? Reach out to Kilian Holdings today to schedule
          a consultation with one of our experienced documentation specialists.
          Whether you're dealing with a documentation challenge, considering
          organizing your paperwork, or in need of paralegal assistance, we're
          here to help you navigate the intricacies of the process.
        </p>
        <button
          className='text-sm font-semibold text-gray-900 underline hover:text-teal-700 transition'
          style={{ marginBottom: '164px' }}
        >
          FIND OUT MORE
        </button>
      </div>
    </div>
  );
};
export default AboutUs;
