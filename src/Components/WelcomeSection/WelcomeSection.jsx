import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomeSection = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); // prevent page reload
    navigate("/contactus"); // navigate to contact page
  };

  return (
    <div className="w-full h-[20em] bg-white flex justify-center items-center">
      <div className="w-[90%] sm:w-[60%] lg:w-[50%] flex flex-col justify-center items-center">
        <h1 className="my-2 sm:my-3 text-[#0C3F40] text-[1.5rem] sm:text-[2rem] font-light sm:font-bold text-center relative bottom-4">
          Welcome to Kilian Holdings Ltd Consulting
        </h1>

        <p className="my-3 text-[#747474] text-[1rem] sm:text-[1.2rem] font-light sm:font-medium text-center">
          At Kilian Holdings, we understand that navigating the paralegal
          landscape can be daunting. That's why we're here to guide you through
          every step of the process with expertise, compassion, and dedication.
        </p>

        <div className="underline text-[#444444] relative top-4">
          <a
            onClick={handleClick}
            className="font-medium focus:outline-none"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
