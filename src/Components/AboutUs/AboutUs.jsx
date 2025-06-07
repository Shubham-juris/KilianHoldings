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
        'At Kilian Holdings, our team consists of seasoned professionals with extensive experience and expertise in a variety of documentation areas. From managing small-scale documentation tasks to handling complex document projects, from assisting with family document matters to facilitating estate documentation, our paralegals possess the knowledge and skills to deliver exceptional results.',
    },
    {
      title: 'Commitment to Excellence',
      image: commitmentImg,
      description:
        "Excellence isn’t just an aspiration at Kilian Holdings  it's ingrained in our identity and actions. We are dedicated to achieving outstanding results and surpassing our clients' expectations in all facets of our work. Whether it's the caliber of our documentation advice or the level of service we deliver, we adhere to the highest standards.",
    },
  ];

  return (
    <div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-12"
        style={{ padding: '64px' }}
      >
        <h1 className="col-span-full text-2xl md:text-4xl text-teal-900 font-bold flex items-center justify-center text-center">
          About Kilian Holdings Ltd
        </h1>
        
        <div className="place-self-center w-fill h-full">
          <img src={ourvalues} alt="Our Values" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h2 className="font-semibold text-2xl md:text-3xl">Our Values</h2>
          <p className="text-base md:text-[1.1em] text-justify">
            At Kilian Holdings, our core values guide everything we do. Integrity, compassion, and excellence aren't just words to us; they are pillars upon which our firm is built. We believe in conducting ourselves with utmost honesty and transparency, treating every client with empathy and respect, and striving for excellence in every aspect of our work.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h2 className="font-semibold text-2xl md:text-3xl">Innovation in Action</h2>
          <p className="text-base md:text-[1.1em] text-justify">
            In a rapidly changing world, innovation isn't just an option; it's a necessity. At Kilian Holdings, we embrace innovation as a means of enhancing our services and improving client experience. From leveraging cutting-edge technology to streamline processes to adopting creative paralegal strategies to solve complex problems, we're constantly pushing the boundaries of what's possible in the paralegal realm.
          </p>
        </div>
        <div className="place-self-center w-full h-full">
          <img src={innovation} alt="Innovation" className="w-full h-full object-cover" />
        </div>

        <div className="place-self-center w-full h-full">
          <img src={success} alt="Success" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h2 className="font-semibold text-2xl md:text-3xl">Community Engagement</h2>
          <p className="text-base md:text-[1.1em] text-justify">
            We believe that true success is measured not only by personal achievements but also by contributions to the community. That's why Kilian Holdings is deeply committed to giving back. Whether through pro bono work, volunteer efforts, or partnerships with local organizations, we're dedicated to making a positive impact in the communities we serve.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h2 className="font-semibold text-2xl md:text-3xl">Client Success Stories</h2>
          <p className="text-base md:text-[1.1em] text-justify">
            Behind every case at Kilian Holdings is a story of resilience, determination, and triumph. From helping small businesses navigate hurdles to assisting individuals in securing justice, our clients' success stories inspire and drive us every day. Read some of our client testimonials to learn more about the real-life impact of our work.
          </p>
        </div>
        <div className="place-self-center w-full h-full">
          <img src={community} alt="Community" className="w-full h-full object-cover" />
        </div>

        <div className="place-self-center w-full h-full">
          <img src={journey} alt="Journey" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h2 className="font-semibold text-2xl md:text-3xl">Our Journey Starts Here</h2>
          <p className="text-base md:text-[1.1em] text-justify">
            At Kilian Holdings, we're more than just document specialists; we're companions on your documentation journey. Whether you're navigating complex paperwork or seeking guidance on documentation matters, we're here to assist you. Get in touch with us today to arrange a consultation and discover the Kilian Holdings approach firsthand.
          </p>
        </div>
      </div>

      <div className="bg-teal-900 p-6 text-white flex justify-center ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center " style={{padding: "18px 0px 18px 0px"}}>
            Consulting Services for Small Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-14 ">
            {aboutUs.map((item, index) => (
              <div className="p-4" key={index}  style={{padding: "0px 0px 18px 0px"}}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 md:h-60 object-cover mb-4 rounded" style={{padding:"0px 10px 0px 10px"}}
                />
                <h3  style={{padding: "15px 0px 15px 0px"}} className="text-lg md:text-xl font-semibold mb-3 text-center">
                  {item.title}
                </h3> 
                <p className="text-sm md:text-lg" style={{padding: "0px 0px 0px 10px"}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-6 py-16 md:px-20 w-[100%] ">
        <h2 className="text-lg md:text-xl font-bold text-teal-900 "  style={{padding: "20px 0px 20px 0px"}}>
          Get in Touch
        </h2>
        <p className="text-gray-600 text-sm md:text-base font-semibold  mb-6 max-w-[80%]">
          Ready to move forward? Reach out to Kilian Holdings today to schedule
          a consultation with one of our experienced documentation specialists.
          Whether you're dealing with a documentation challenge, considering
          organizing your paperwork, or in need of paralegal assistance, we're
          here to help you navigate the intricacies of the process.
        </p>
        <button  style={{padding: "15px 0px 10px 0px"}} className="text-sm font-semibold text-gray-900 underline hover:text-teal-700 transition">
          
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
