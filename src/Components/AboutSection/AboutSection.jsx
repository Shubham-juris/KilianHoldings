import AboutUs from '../../assets/About/AboutUs.jpg';
import img from '../../assets/About/image.jpg';

const AboutSection = () => {
  return (
    <div className='overflow-hidden max-w-[1500px] bg-[#0C3F40] h-auto sm:h-auto md:h-[1500px] flex flex-col justify-center items-center p-6 sm:p-12'>
      <h2 className='overflow-hidden text-white text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-semibold sm:font-bold py-6 sm:py-8'>
        About Kilian Holdings Ltd.
      </h2>

      <div
        className='my-6 sm:my-8 w-full h-[300px] sm:h-[500px] bg-cover bg-center'
        style={{ backgroundImage: `url(${AboutUs})`, objectFit: 'contain' }}
      ></div>

      <h3 className='overflow-hidden text-white text-[1.5rem] sm:text-[2rem] font-semibold sm:font-bold py-6 sm:py-8'>
        Our Mission
      </h3>

      <p className='overflow-hidden text-white w-[90%] max-w-[1200px] text-[1.3rem] sm:text-[1.5rem] font-light sm:font-medium py-6 sm:py-8'>
        At Kilian Holdings, our mission is to provide exceptional paralegal
        services focused on meticulous documentation assistance. We are
        dedicated to supporting our clients with precision and expertise,
        ensuring their legal documentation needs are met with efficiency and
        reliability.
      </p>

      <div
        style={{ padding: '5rem' }}
        className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 w-full justify-center items-center p-6 sm:p-12'
      >
        <div className='text-center w-full  sm:p-6  '>
          <img className='w-150 h-[200px] mx-auto ' src={img} alt='Our Team' />
          <h4 className='text-xl text-gray-100 font-bold mt-4'>Our Team</h4>
          <p className='text-gray-100 mt-2 text-xs px-6'>
            At Kilian Holdings, our team is comprised of highly skilled and
            dedicated paralegals who are committed to providing exceptional
            service to our clients. With a diverse range of expertise and
            backgrounds in the legal field, our team is equipped to handle
            various documentation needs with precision and professionalism.
          </p>
        </div>

        <div className='text-center w-full p-4 sm:p-6  '>
          <img
            className='w-150 h-[200px] mx-auto '
            src={img}
            alt='Personalized Attention'
          />
          <h4 className='text-xl text-gray-100 font-bold mt-4'>
            Personalized Attention
          </h4>
          <p className='text-gray-100 mt-2 text-xs px-6'>
            Since every legal case is different, we at Kilian Holdings take the
            time to hear your worries, comprehend your objectives, and create a
            customized plan of action that will help you get the greatest result
            possible. Throughout the whole process, from the first consultation
            to the case settlement, you can rely on us to provide documentation
            support.
          </p>
        </div>

        <div className='text-center w-full p-4 sm:p-6  '>
          <img className='w-150 h-[200px] mx-auto ' src={img} alt='Our Team' />
          <h4 className='text-xl text-gray-100 font-bold mt-4'>Our Team</h4>
          <p className='text-gray-100 mt-2 text-xs px-6'>
            At Kilian Holdings, our team is comprised of highly skilled and
            dedicated paralegals who are committed to providing exceptional
            service to our clients. With a diverse range of expertise and
            backgrounds in the legal field, our teambnmbhnjhjhgjjh is equipped
            to handle various documentation needs with precision and
            professionalism.
          </p>
        </div>
        <div className='text-center w-full p-4 sm:p-6  '>
          <img className='w-150 h-[200px] mx-auto ' src={img} alt='Our Team' />
          <h4 className='text-xl text-gray-100 font-bold mt-4'>Our Team</h4>
          <p className='text-gray-100 mt-2 text-xs px-6'>
            At Kilian Holdings, our team is comprised of highly skilled and
            dedicated paralegals who are committed to providing exceptional
            service to our clients. With a diverse range of expertise and
            backgrounds in the legal field, our team is equipped to handle
            various documentation needs with precision and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
