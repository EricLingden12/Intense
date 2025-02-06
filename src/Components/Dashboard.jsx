import React from "react";
import up_down_icon from "../Assets/icons/landing-dashboard-icons/chevron-selector-vertical.svg";
import logo_icon from "../Assets/icons/landing-dashboard-icons/Group 13.jpg";
import plus_icon from "../Assets/icons/landing-dashboard-icons/plus-circle.svg";
import search_icon from "../Assets/icons/search-lg.jpg";
import user_icon from "../Assets/icons/landing-dashboard-icons/user-03.svg";
import message_icon from "../assets/icons/landing-dashboard-icons/message-plus-square.jpg";
import bell_icon from "../assets/icons/landing-dashboard-icons/bell-01.jpg";
import clock_snooz_icon from "../assets/icons/landing-dashboard-icons/clock-snooze.svg";
import clock_rewind_icon from "../assets/icons/landing-dashboard-icons/clock-rewind.svg";
import bar_chair_icon from "../assets/icons/landing-dashboard-icons/bar-chart-circle-01.svg";
import calander_icon from "../assets/icons/landing-dashboard-icons/calendar-minus-01.svg";
import expand_icon from "../assets/icons/landing-dashboard-icons/expand-01.svg";
import globe_icon from "../assets/icons/landing-dashboard-icons/globe-05.svg";
import home_icon from "../assets/icons/landing-dashboard-icons/home-04.svg";
import laptop_icon from "../assets/icons/landing-dashboard-icons/laptop-01.svg";
import light_bulb_icon from "../assets/icons/landing-dashboard-icons/lightbulb-05.svg";
const Dashboard = () => {
  return (
    <div className="w-[100%] mx-auto bg-[#fff] border-1 border-[#EBEBEB] rounded-[14px] shadow-[2px 2px 16px 0px black] mb-[65px]">
      {/* Dashboard nav */}
      <div className="flex items-center justify-between  border-[#EBEBEB] border-b-1  py-[10px] px-[30px] ">
        <div className="flex items-center gap-2">
          <img className="w-[35px] h-[35px]" src={logo_icon} alt="" />
          <div className="sm:me-[50px] me-[10px]">
            <p className="text-[#414141] text-[12px] font-[700]">
              CreativeStudio
            </p>
            <p className="text-[#414141] text-[11px] font-[500]">
              Software Company
            </p>
          </div>
          <p className="bg-[#96949441] w-[30px] h-[30px] rounded-[5px] lg:me-[90px] md:me-[40px]">
            <img
              className="w-[23px] h-[23px] mx-auto mt-1"
              src={up_down_icon}
              alt=""
            />
          </p>
          <div className="md:flex hidden items-center gap-2 py-[6px] px-[10px] bg-[#E1F3E5] rounded-[30px]">
            <img className="w-[20px] h-[20px]" src={plus_icon} alt="" />
            <p className="text-[12px] font-[600] text-[#062A11]">Add New</p>
          </div>
        </div>
        <div className="flex items-center gap-[25px]">
          <img className="w-[20px] h-[20px]" src={search_icon} />
          <img className="sm:block hidden w-[20px] h-[20px]" src={bell_icon} />
          <img
            className="sm:block hidden w-[20px] h-[20px]"
            src={message_icon}
          />
          <p className="bg-[#18A23F] p-[6px] rounded-full ">
            <img className="w-[20px] h-[20px]" src={user_icon} />
          </p>
        </div>
      </div>
      {/* body */}
      <div className="flex">
        {/* sidebar */}
        <div className=" w-[20%] ps-[30px] pt-[30px] border-r-1 border-[#EBEBEB]">
          <div className="flex items-center gap-2 mb-[5px]  bg-[#E1F3E5] ps-[10px] py-[8px] rounded-[80px]">
            <img className="w-[20px] h-[20px] " src={home_icon} alt="" />
            <p className="lg:block hidden text-[14px] font-[500] text-[#7E7E7E]">
              Dashboard
            </p>
          </div>
          <div className="flex items-center gap-2 mb-[5px] focus:bg-[#E1F3E5] ps-[10px] py-[8px] rounded-[80px]">
            <img className="w-[20px] h-[20px]" src={clock_rewind_icon} alt="" />
            <p className="lg:block hidden text-[14px] font-[500] text-[#7E7E7E]">
              Manual Time
            </p>
          </div>
          <div className="flex items-center gap-2 mb-[5px] focus:bg-[#E1F3E5] ps-[10px] py-[8px] rounded-[80px]">
            <img className="w-[20px] h-[20px] " src={bar_chair_icon} alt="" />
            <p className="lg:block hidden text-[14px] font-[500] text-[#7E7E7E]">
              In & Out Summary
            </p>
          </div>
          <h6 className="flex items-center gap-2 text-[14px] font-[600] text-[#7E7E7E] my-[10px]">
            Leave <span className="lg:block hidden">Management</span>
          </h6>
          <div className="flex items-center gap-2 mb-[5px] focus:bg-[#E1F3E5] ps-[10px] py-[8px] rounded-[80px]">
            <img className="w-[20px] h-[20px] " src={calander_icon} alt="" />
            <p className="lg:block hidden text-[14px] font-[500] text-[#7E7E7E]">
              My Leave
            </p>
          </div>
          <div className="flex items-center gap-2 mb-[5px] focus:bg-[#E1F3E5] ps-[10px] py-[8px] rounded-[80px]">
            <img className="w-[20px] h-[20px] " src={globe_icon} alt="" />
            <p className="lg:block hidden text-[14px] font-[500] text-[#7E7E7E]">
              Holidays
            </p>
          </div>
          <h6 className="text-[14px] font-[600] text-[#7E7E7E] my-[10px]">
            Company
          </h6>
          <div className="flex items-center gap-2 mb-[5px] focus:bg-[#E1F3E5] ps-[10px] py-[8px] rounded-[80px]">
            <img className="w-[20px] h-[20px] " src={calander_icon} alt="" />
            <p className="lg:block hidden text-[14px] font-[500] text-[#7E7E7E]">
              Salary Slip
            </p>
          </div>
          <div className="flex items-center gap-2 mb-[5px] focus:bg-[#E1F3E5] ps-[10px] py-[8px] rounded-[80px]">
            <img className="w-[20px] h-[20px] " src={globe_icon} alt="" />
            <p className="lg:block hidden text-[14px] font-[500] text-[#7E7E7E]">
              Culture
            </p>
          </div>
        </div>
        {/* main */}
        <div className=" w-[75%] my-[30px] mx-auto ">
          <div className="flex gap-[20px]">
            {/* main meaasge , active, productive time ,and ideal time spend section */}
            <div className="w-[70%] grid grid-cols-1">
              <div className="w-[100%] p-[20px] bg-gray-200 rounded-[15px] mb-[30px] ">
                <div className="md:flex md:justify-between grid grid-cols-1 items-center  mb-[30px]">
                  <h4 className="text-[16px] font-[700]">
                    Hello, Jem. Good morning!
                  </h4>
                  <p className="text-[#767676] text-[12px] font-[500]">
                    November 11, 2024
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-[700] text-[#767676]">
                    Today’s Motivation
                  </p>
                  <p className="text-[14px] font-[500] my-[6px]">
                    "The way to get started is to quit talking and begin doing."
                  </p>
                  <p className="text-[11px] font-[500] text-[#767676]">
                    – Walt Disney
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:justify-between grid grid-cols-1 justify-center w-[100%] items-center ">
                <div className="lg:mx-0 lg:mb-0 mb-[30px] mx-auto bg-[#F3FAF5] xl:w-[170px] w-[150px] h-[140px] p-[20px] rounded-[15px]">
                  <p className="bg-[#46B565] w-[38px] h-[38px] rounded-full pt-2 ">
                    <img
                      className="w-[20px] h-[20px] mx-auto"
                      src={laptop_icon}
                      alt=""
                    />
                  </p>
                  <p className=" text-[12px] font-[500] my-[8px] ">
                    Active Time
                  </p>
                  <p className="text-[16px] font-[900]">6hrs. 20min.</p>
                </div>
                <div className="lg:mx-0 lg:mb-0 mb-[30px] mx-auto bg-[#F3FAF5] xl:w-[170px] w-[150px] h-[140px] p-[20px] rounded-[15px]">
                  <p className="bg-[#46B565] w-[38px] h-[38px] rounded-full pt-2 ">
                    <img
                      className="w-[20px] h-[20px] mx-auto"
                      src={light_bulb_icon}
                      alt=""
                    />
                  </p>
                  <p className=" text-[12px] font-[500] my-[8px] ">
                    Productive apps
                  </p>
                  <p className="text-[16px] font-[900]">60%</p>
                </div>
                <div className="lg:mx-0 lg:mb-0 mb-[30px] mx-auto bg-[#F3FAF5] xl:w-[170px] w-[150px] h-[140px] p-[20px] rounded-[15px]">
                  <p className="bg-[#46B565] w-[38px] h-[38px] rounded-full pt-2 ">
                    <img
                      className="w-[20px] h-[20px] mx-auto"
                      src={clock_snooz_icon}
                      alt=""
                    />
                  </p>
                  <p className=" text-[12px] font-[500] my-[8px] ">
                    Idle time spent
                  </p>
                  <p className="text-[16px] font-[900]">1hr. 15min.</p>
                </div>
              </div>
            </div>
            {/* daily status */}
            <div className="w-[30%]  sm:p-[20px] p-[10px] bg-gray-200 rounded-[15px]">
              <p className="sm:text-[15px] md:mb-[40px] mb-[15px] text-[11px] font-[700] text-black ">
                Daily Status
              </p>
              <p className="sm:text-[14px] text-[11px] font-[700] text-[#767676]">
                Clocking
              </p>
              <p className="lg:text-[25px] sm:text-[18px] md:mb-[40px] mb-[15px] text-[14px] font-[900]">
                10:00 AM
              </p>
              <p className="sm:text-[14px] text-[11px] font-[700] text-[#767676]">
                Clock out
              </p>
              <p className="lg:text-[25px] sm:text-[18px] text-[14px] font-[900] mb-[40px]">
                00:00 PM
              </p>
              <hr className="mb-[12px] border-1  border-[grey]" />
              <p className="text-[12px] font-[700] text-[#767676] text-center">
                Total working hours: 0hrs
              </p>
            </div>
          </div>
          {/* footer */}
          <div className="lg:flex grid grid-cols-1 items-start justify-between gap-[20px] mt-[35px]">
            {/* in out summary */}
            <div className="lg:mx-0 mx-auto bg-gray-200 lg:w-[60%] w-[90%] p-[20px] rounded-[15px]">
              <p className="flex items-center justify-between text-[12px] font-[700]">
                In/Out Summary
                <span>
                  <img className="w-[16px] h-[16px]" src={expand_icon} alt="" />
                </span>
              </p>
              <div className="flex items-center justify-between">
                {/* date */}
                <div className="grid grid-cols-1">
                  <p className="text-[13px] font-[700] text-[#767676] mt-[15px]">
                    Date
                  </p>
                  <p className="text-[11px] font-[600] my-[15px]">
                    11 Nov, 2024
                  </p>
                  <p className="text-[11px] font-[600]">10 Nov, 2024</p>
                </div>
                {/* start time */}
                <div className="grid grid-cols-1">
                  <p className="text-[13px] font-[700] text-[#767676] mt-[15px]">
                    Start Time
                  </p>
                  <p className="text-[11px] font-[600] my-[15px]">10:04 AM</p>
                  <p className="text-[11px] font-[600]">01:30 AM</p>
                </div>
                {/* end time */}
                <div className="grid grid-cols-1">
                  <p className="text-[13px] font-[700] text-[#767676] mt-[15px]">
                    End Time
                  </p>
                  <p className="text-[11px] font-[600] my-[15px]">5:57 PM</p>
                  <p className="text-[11px] font-[600]">2:30 PM</p>
                </div>
                {/* Activity Duration */}
                <div className="grid grid-cols-1">
                  <p className="text-[13px] font-[700] text-[#767676] mt-[15px]">
                    Activity Duration
                  </p>
                  <p className="text-[11px] font-[600] my-[15px]">Check out</p>
                  <p className="text-[11px] font-[600]">Break Time</p>
                </div>
              </div>
            </div>
            {/* Time Spent */}
            <div className="lg:mx-0 mx-auto lg:w-[40%] w-[90%] bg-gray-200 p-[20px] rounded-[15px]">
              <p className="text-[12px] font-[700] text-[#767676] mb-[20px]">
                Time Spent
              </p>
              <div className="flex items-center w-[90%] h-[78px] mx-auto rounded-[10px] ">
                <p className="bg-[#21B601] w-[15%] h-[78px] rounded-l-[10px] "></p>
                <p className="bg-[#C6EEAE] w-[10%] h-[78px] "></p>
                <p className="bg-[#84CC16] w-[20%] h-[78px] "></p>
                <p className="bg-[#FBFBFB] w-[10%] h-[78px] "></p>
                <p className="bg-[#2A78FF] w-[15%] h-[78px] "></p>
                <p className="bg-[#5b851b] w-[7%] h-[78px] "></p>
                <p className="bg-[#FFF01E] w-[10%] h-[78px] "></p>
                <p className="bg-[#F98E5C] w-[13%] h-[78px] rounded-r-[10px]"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
