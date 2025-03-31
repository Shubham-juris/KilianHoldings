import { Box, Typography } from '@mui/material';
const WelcomeSection = () => {
  return (
    <div className="w-full h-[20em] bg-white flex justify-center items-center">
      <div className=" sm:w-[60%] lg:h-[60%] flex flex-col justify-center items-center" style={{width:"50%"}}>
        <h1
          className=" my-2 sm:my-3 text-[#0C3F40]  sm:text-[1.6rem] 
          font-light sm:font-bold text-center"
        style={{fontSize:"2em"}}>
          Welcome to Kilian Holdings Ltd Consulting
        </h1>
        <p
          className="my-3 text-[#747474]  sm:text-[1.5rem] 
          font-light sm:font-medium text-center "
        style={{marginTop:"1em" , marginBottom:"1em" , alignItems:"center" , fontSize:"1.2em"}}>
          At Kilian Holdings, we understand that navigating the legal landscape
          can be daunting. That's why we're here to guide you through every
          step of the process with expertise, compassion, and dedication.
        </p>
        <div className="underline text-[#444444] ">
          <a className='font-medium' href="/">CONTACT US</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
