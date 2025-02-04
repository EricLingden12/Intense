import React from "react";

// import CardSlider from "../Components/CardSlider.jsx";
import LgFooter from "../Components/Footer/LgFooter.jsx";
import SmFooter from "../Components/Footer/SmFooter.jsx";
import SmDiscoverFooter from "../Components/Footer/SmDiscoverFooter.jsx";
import LgDiscoverFooter from "../Components/Footer/LgDiscoverFooter.jsx";
import WhyIntense from "../Components/WhyIntense.jsx";
import Dashboard from "../Components/Dashboard.jsx";

import apple_logo_icon from "../assets/icons/Frame (2).jpg";
import windows_icon from "../assets/icons/Frame (3).jpg";
import linux_icon from "../assets/icons/linux-svgrepo-com 1.jpg";
import arrow_icon from "../assets/icons/chevron-right.svg";

const Download = () => {
  return (
    <div>
      {/* header */}
      <div className="w-[90%] lg:h-[500px] h-[700px] overflow-hidden bg-[#E1F3E5] rounded-[12px] mb-[100px] mx-auto lg:flex grid items-start lg:pt-[100px] pt-[50px] lg:ps-[50px] ps-[25px] lg:gap-[100px] gap-[50px]">
        <div className="lg:w-[40%] w-[90%] ">
          <h4 className="text-[#0D2E1B] text-[45px] font-[500] leading-[50px] mb-[15px]">
            Stay sync, Achieve more together
          </h4>
          <p className="text-[#878787] text-[18px] font-[400] mb-[40px]">
            Get started today by downloading Intense Team for seamless team
            productivity, performance tracking, and collaboration.
          </p>
          <div className="flex items-center justify-center lg:w-[85%] sm:w-[70%] w-[80%] gap-2 bg-[#B6EC2E] border-1 border-[#AFDF37] rounded-[6px] py-[12px] px-[28px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clip-path="url(#clip0_4_2013)">
                <path
                  d="M0 2.53677L7.29961 1.54264L7.3028 8.58371L0.00666818 8.62526L0 2.53677ZM7.29614 9.39498L7.3018 16.4422L0.00566591 15.4391L0.00525682 9.34771L7.29614 9.39498ZM8.18102 1.41259L17.8597 0V8.49416L8.18102 8.571V1.41259ZM17.862 9.46125L17.8597 17.9172L8.181 16.5511L8.16744 9.44542L17.862 9.46125Z"
                  fill="#0A421A"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_2013">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="">Download for Windows</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="w-[100%] me-[-600px]">
          <Dashboard />
        </div>
      </div>
      <WhyIntense />
      {/* At Vrit Tech */}
      <div className="mb-[100px] lg:mt-[100px] mt-[600px]">
        <div className="text-center lg:w-[45%] w-[60%] mx-auto mb-[50px]">
          <p className="lg:text-[24px] text-[35px] font-[500] mb-[25px]">
            At Vrit Tech
          </p>
          <p className="text-[#0D2E1B] lg:text-[20px] text-[25px] font-[400] ">
            "Intense Team has been a game-changer for our remote software
            development team. With its real-time activity tracking and detailed
            performance analytics."
          </p>
        </div>
        <div className="lg:block hidden text-center w-[70%] mx-auto ">
          <p className="text-[#0D2E1B] text-[45px] font-[500] mb-[30px]">
            Download Intense Team for desktop
          </p>
          <div className="flex items-center justify-center gap-[30px]">
            <p className="flex items-center gap-2 text-[#4A885B] text-[16px] font-[500] border-1 border-[#4A885B] rounded-[6px] px-[28px] py-[9px] ">
              <img className="w-[18px] h-[18px]" src={apple_logo_icon} alt="" />
              Download for Mac
            </p>
            <p className="flex items-center gap-2 text-[#4A885B] text-[16px] font-[500] border-1 border-[#4A885B] rounded-[6px] px-[28px] py-[9px] ">
              <img className="w-[18px] h-[18px]" src={windows_icon} alt="" />
              Download for Windows
            </p>
            <p className="flex items-center gap-2 text-[#4A885B] text-[16px] font-[500] border-1 border-[#4A885B] rounded-[6px] px-[28px] py-[9px] ">
              <img className="w-[18px] h-[18px]" src={linux_icon} alt="" />
              Download for Linux
            </p>
          </div>
        </div>
      </div>

      <LgDiscoverFooter />
      <SmDiscoverFooter />
      <div className="block lg:hidden">
        <SmFooter />
      </div>
      <LgFooter />
    </div>
  );
};

export default Download;
