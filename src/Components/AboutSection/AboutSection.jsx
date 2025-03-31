import AboutUs from '../../assets/About/AboutUs.webp';
import Ourteam from '../../assets/Herosection/Ourteam.jpg';
import personalized from '../../assets/Herosection/personalized.jpg';
import ourclint from '../../assets/Herosection/ourclint.jpg';
import getintouch from '../../assets/Herosection/getintouch.jpg';

const AboutSection = () => {
  return (
    <div className="overflow-hidden max-w-[1500px] mx-auto bg-[#0C3F40] h-[110em] flex flex-col justify-center items-center p-6 sm:p-12 text-white">
     
      <h2 className="text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] font-bold py-8 md:py-12 mt-10 relative bottom-[1em]">
        About Kilian Holdings Ltd.
      </h2>

     
      <div
        className="my-6 sm:my-10 w-full max-w-[90%] h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${AboutUs})` }}
      ></div>

     
      <h3 className="sm:text-[2rem] md:text-[2.5rem] font-semibold py-6 sm:py-10" style={{fontSize:"1.3em",marginTop:"1.3em" , marginBottom:"1em"}}>
        Our Mission
      </h3>
      <p className="w-full max-w-[1200px] sm:text-[1.25rem] md:text-[1.5rem] font-light leading-relaxed py-6 sm:py-8 text-center" style={{fontSize:"1em"}}>
        At Kilian Holdings, our mission is to provide exceptional paralegal
        services focused on meticulous documentation assistance. We are
        dedicated to supporting our clients with precision and expertise,
        ensuring their legal documentation needs are met with efficiency and
        reliability.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full  py-12 sm:py-16 sm:px-12 relative top-10">
 
  <div className="text-center flex flex-col items-center relative left-12 ">
    <img className="max-w-[550px] h-[250px] object-cover rounded-md w-[90%]" src={Ourteam} alt="Our Team" />
    <h4 className="text-lg sm:text-xl font-bold" style={{marginBottom:"1em" , marginTop:"1em"}}>Our Team</h4>
    <p className="text-gray-200 w-[85%] text-sm sm:text-base leading-relaxed">
      At Kilian Holdings, our team is comprised of highly skilled and dedicated paralegals who are committed to providing exceptional service to our clients. With a diverse range of expertise and backgrounds in the legal field, our team is equipped to handle various documentation needs with precision and professionalism.
    </p>
  </div>


  <div className="text-center flex flex-col items-center relative right-12 ">
    <img className="max-w-[550px] h-[250px] object-cover rounded-md w-[90%]" src={personalized} alt="Personalized Attention" />
    <h4 className="text-lg sm:text-xl font-bold" style={{marginBottom:"1em" , marginTop:"1em"}}>Personalized Attention</h4>
    <p className="text-gray-200 w-[85%] text-sm sm:text-base leading-relaxed">
      Since every legal case is different, we at Kilian Holdings take the time to hear your worries, comprehend your objectives, and create a customized plan of action that will help you get the greatest result possible. Throughout the whole process, from the first consultation to the case's settlement, you can rely on us to provide documentation support.
    </p>
  </div>


  <div className="text-center flex flex-col items-center relative left-12 ">
    <img className="max-w-[550px] h-[250px] object-cover rounded-md w-[90%]" src={ourclint} alt="Our Clients" />
    <h4 className="text-lg sm:text-xl font-bold" style={{marginBottom:"1em" , marginTop:"1em"}}>Our Clients</h4>
    <p className="text-gray-200 w-[85%] text-sm sm:text-base leading-relaxed">
      Our Clients are the center of all we do, and we're dedicated to giving them outstanding support and service throughout the whole process. We take great satisfaction in establishing enduring bonds with our clients based on openness, honesty, and respect.
    </p>
  </div>

  <div className="text-center flex flex-col items-center relative right-12 ">
    <img className="max-w-[550px] h-[250px] object-cover rounded-md w-[90%]" src={getintouch} alt="Get In Touch" />
    <h4 className="text-lg sm:text-xl font-bold" style={{marginBottom:"1em" , marginTop:"1em"}}>Get In Touch</h4>
    <p className="text-gray-200 w-[85%] text-sm sm:text-base leading-relaxed">
      Are you prepared to go forward? Get in touch with Kilian Holdings right now to arrange a meeting with one of our knowledgeable team members. We are here to help you confidently and with peace of mind navigate the complexity of the legal system.
    </p>
  </div>
</div>

    </div>
  );
};

export default AboutSection;