import React from "react";

import Qna from "../Components/Qna.jsx";
import TeamManagement from "../Components/TeamManagement.jsx";
import SmFooter from "../Components/Footer/SmFooter";
import SmDiscoverFooter from "../Components/Footer/SmDiscoverFooter";
import LgDiscoverFooter from "../Components/Footer/LgDiscoverFooter";
import Dashboard from "../Components/Dashboard.jsx";
import Industry from "../Components/Landing/Industry.jsx";
import WhyIntense from "../Components/WhyIntense.jsx";
import Statistics from "../Components/Landing/Statistics.jsx";
import PricingPlan from "../Components/Landing/PricingPlan.jsx";

import logo from "../assets/Images/Logo.png";
import logo1 from "../assets/icons/landing-logos/Logo (1).svg";
import logo2 from "../assets/icons/landing-logos/Logo (2).svg";
import logo3 from "../assets/icons/landing-logos/Logo (3).svg";
import logo4 from "../assets/icons/landing-logos/Logo (4).svg";
import logo5 from "../assets/icons/landing-logos/Logo (5).svg";

const Landing = () => {
  return (
    <div>
      {/* header */}
      <div className="  text-center mx-auto mt-[70px] landing-hero mb-[100px]">
        <h1 className="w-[90%] mx-auto lg:text-[45px] md:text-[38px] text-[30px] font-[700] text-[#041B0B] mb-[20px]">
          Unlock the full potential of your team.
        </h1>
        <p className="lg:w-[50%] md:w-[60%] w-[70%] mx-auto md:text-[18px] text-[14px] font-[400] text-[#363636] mb-[64px]">
          Designed for businesses embracing remote work, Intense Team tracks
          attendance, working hours, employee performance, and tasks empowering
          you to optimize efficiency.
        </p>
        <div className="flex items-center justify-between border-1 border-[#DBE8D4] bg-[#F8FCF8] lg:w-[45%] md:w-[50%] w-[65%] h-[54px] rounded-[10px] mx-auto px-[5px]">
          <input
            className="md:w-[60%] sm:w-[60%] w-[55%] sm:text-[16px] text-[14px] p-[5px] outline-0 fontfamily-poppins"
            type="text"
            placeholder="What&#x27;s your work email?"
          />
          <button className="bg-[#46B565] sm:py-[9px] py-[5px] sm:px-[32px] px-[20px] rounded-[8px]  sm:text-[18px] text-[16px] text-[#fff] font-[500] active:bg-[#376d46]">
            Get Started
          </button>
        </div>
      </div>
      <div className="xl:w-[80%] md:w-[95%] w-[100%] mx-auto">
        <Dashboard />
      </div>

      {/* helping team succeed */}
      <div className="xl:w-[65%] lg:w-[75%] w-[90%] mx-auto mb-[70px] text-center">
        <p className="text-[#878787] text-[18px] font-[400] mb-[30px]">
          Helping teams succeed{" "}
        </p>
        <div className="flex items-center md:justify-between justify-center gap-[20px]">
          <img className="md:block hidden" src={logo} alt="" />
          <img className="md:block hidden" src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img className="md:block hidden" src={logo4} alt="" />
          <img className="md:block hidden" src={logo5} alt="" />
        </div>
      </div>
      {/* build for modern team */}
      <div className="lg:w-[80%] w-[90%] mx-auto mb-[100px]">
        <div className="mb-[60px] text-center">
          <p className="inline-block text-[16px] text-[#4D4D4D] font-[500] bg-[#DFF1C2] py-[5px] px-[18px] border-1 border-[#84CC16] rounded-[6px] mb-[30px]">
            Built for Modern Teams
          </p>
          <h1 className="landing-hero mx-auto w-[100%] lg:text-[52px] md:text-[40px] sm:text-[30px] text-[25px] font-[700] leading-[50px]">
            Integrated key features for seamless team management
          </h1>
          <p className="w-[80%] mx-auto md:text-[20px] text-[15px] font-[400] mt-[25px]">
            Boost productivity and manage your team more effectively. Each tool
            is built to address key challenges in remote work, ensuring
            efficiency and accountability every step of the way.
          </p>
        </div>
        <TeamManagement />
      </div>
      <Industry />
      <WhyIntense />
      <Statistics />
      <PricingPlan />
      <Qna />
      <LgDiscoverFooter />
      <SmDiscoverFooter />
      <SmFooter />
    </div>
  );
};

export default Landing;
