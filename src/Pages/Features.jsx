import React from "react";
import Qna from "../Components/Qna";
import LgFooter from "../Components/Footer/LgFooter";
import SmFooter from "../Components/Footer/SmFooter";
import SmDiscoverFooter from "../Components/Footer/SmDiscoverFooter";
import LgDiscoverFooter from "../Components/Footer/LgDiscoverFooter";
import bg_image from "../assets/Images/image copy.png";
import Cards from "../Components/Features/Cards";
import TeamManagement from "../Components/TeamManagement";

import laptop_icon from "../assets/icons/Icon (1).svg";
import clock_icon from "../assets/icons/landing-dashboard-icons/clock-rewind.svg";
import file_icom from "../assets/icons/file-02.svg";
import zap_fast_icon from "../assets/icons/zap-fast.svg";
import hourglass_icon from "../assets/icons/hourglass-02.svg";
import calander_plus_icon from "../assets/icons/calendar-plus-01.svg";

const frame = [
  {
    icon: laptop_icon,
    title: `Supercharge productivity`,
    description: `Simplify your routine tasks and ensure accountability. Automate
            attendance management and keep your team on track.`,
  },
  {
    icon: calander_plus_icon,
    title: `Timesheet Management`,
    description: `Track daily, weekly, or monthly work hours with detailed and editable timesheets.`,
  },
  {
    icon: hourglass_icon,
    title: `Manual Time Logging`,
    description: `Allow team members to log hours manually with appropriate permissions for added flexibility.`,
  },
  {
    icon: zap_fast_icon,
    title: `Performance Tracking`,
    description: `Identify and manage team members with performance or compliance risks..`,
  },
  {
    icon: clock_icon,
    title: `Timeline Overview`,
    description: `Visualize and analyze team workflows and task durations with an intuitive timeline view.`,
  },
  {
    icon: file_icom,
    title: `Reports`,
    description: `Generate detailed reports on performance, productivity, and time allocation for actionable insights.`,
  },
];
const Features = () => {
  return (
    <div>
      {/* header */}
      <div className="mb-[100px]">
        <div className="relative">
          <img className="w-[100%] h-[500px]" src={bg_image} alt="" />
        </div>
        <div className="absolute top-[17%] left-[15%] right-[15%] ">
          <div className="text-[#fff] text-center w-[100%] md:mb-[50px] mb-[30px] ">
            <p className="text-[16px] font-[500] mb-[30px] underline underline-offset-8">
              Home / Features
            </p>
            <h3 className=" lg:text-[50px] text-[35px] font-[700] w-[100%] mb-[15px] leading-[50px] landing-hero ">
              Integrated Key Features for Seamless Team Management
            </h3>
            <p className="lg:text-[20px] text-[15px] sm:w-[80%] w-[100%] mx-auto font-[400]">
              Boost productivity and manage your team more effectively. Each
              tool is built to address key challenges in remote work, ensuring
              efficiency and accountability every step of the way.
            </p>
          </div>
          <div className="mx-auto text-center text-[#154B2C] text-[18px] font-[700]">
            <button className="bg-[#B6EC2E] border-2 border-[#92F564] px-[30px] py-[12px] rounded-[6px] active:bg-[#154B2C] active:text-[#fff]">
              Start Your Free Trial Today
            </button>
          </div>
        </div>
      </div>
      <Cards />
      {/* supercharge productivity */}
      <div className="lg:w-[80%] w-[90%] mx-auto mb-[100px]">
        <div className="mb-[60px] text-center">
          <h1 className="landing-hero mx-auto w-[100%] lg:text-[52px] md:text-[40px] text-[35px] font-[700] leading-[50px]">
            Supercharge Your Productivity
          </h1>
          <p className="w-[80%] mx-auto md:text-[20px] text-[17px] font-[400] mt-[25px]">
            Take control of your team's time and unlock their full potential
            with smarter, faster, and more efficient tools designed for modern
            workflows.
          </p>
        </div>
        <TeamManagement />
      </div>
      {/* technology that provides work */}
      <div className="w-[100%] mb-[100px] py-[50px] bg-[#f6f6f6] rounded-[20px]">
        <div className="lg:w-[85%]  w-[90%] mx-auto">
          <div className="mb-[60px] text-center">
            <h1 className="landing-hero mx-auto w-[100%] lg:text-[52px] md:text-[40px] text-[35px] font-[700] leading-[50px]">
              Technology that proves the work
            </h1>
            <p className="w-[60%] mx-auto md:text-[20px] text-[17px] font-[400] mt-[25px]">
              Take control of your team's time and unlock their full potential
              with smarter, faster, and more efficient tools designed for modern
              workflows.
            </p>
          </div>

          <div className="w-[100%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center  gap-[20px]">
            {frame.map((item, index) => {
              return (
                <div className="xl:w-[330px] lg:[300px] md:w-[100%] w-[90%] h-[300px] p-[20px] border-1 border-[#E6FBB8] rounded-[12px] bg-[#fff] mx-auto">
                  <p className="mb-[20px]">
                    <img className="w-[45px] h-[45px]" src={item.icon} alt="" />
                  </p>
                  <p className="text-[#0E3E2F] text-[24px] font-[500]">
                    {item.title}
                  </p>
                  <p className="text-[#4D4D4D] text-[16px] font-[400]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Qna />
      <LgDiscoverFooter />
      <SmDiscoverFooter />
      <div className="block lg:hidden">
        <SmFooter />
      </div>
      <LgFooter />
    </div>
  );
};

export default Features;
