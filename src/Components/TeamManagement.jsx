import React from "react";
import person_img from "../assets/Images/Image_ManLaptop.png";
import hand_icon from "../assets/icons/Frame.svg";
import laptop_icon from "../assets/icons/laptop-01 (1).svg";
import bulb_icon from "../assets/icons/lightbulb-05 (1).svg";
import arrow_icon from "../assets/icons/Vector 1.svg";
import calendar_icon from "../assets/icons/calendar-minus-01.jpg";
import home_icon from "../assets/icons/home-04.jpg";
import clock_icon from "../assets/icons/clock-rewind.jpg";
import employe1 from "../assets/Images/image.png";
import employe2 from "../assets/Images/image (1).png";
import employe3 from "../assets/Images/image 2.png";

const TeamManagement = () => {
  return (
    <div className="lg:flex md:grid grid-cols-1 gap-[20px] w-[100%] ">
      {/* Intense team and real time monitoring */}
      <div className="md:flex grid grid-cols-1 gap-[20px] lg:w-[70%] w-[100%] ">
        {/* Intense team */}
        <div className="sm:w-[60%] w-[90%] mx-auto lg:h-[765px] bg-[#F2FBCA] md:mb-0 mb-[20px] py-[30px] rounded-[24px]">
          <p className="text-[#878787] text-[15px] font-[500] border-1 border-[#84CC16] bg-[#DFF1C2] rounded-[6px] ms-[30px] inline-block py-[6px] px-[20px]">
            INTENSE TEAM
          </p>
          <h2 className="text-[#4D5B00] text-[35px] font-[500] ms-[30px] leading-[50px] my-[15px]">
            Where Accountability <br /> Meets Efficiency
          </h2>
          <p className="mx-[30px] text-[#686868] text-[16px] font-[500] w-[90%] ">
            Intense Team provides the tools you need to ensure work gets done
            efficiently, transparently, and collaboratively
          </p>
          <img
            className="w-[100%] mt-[-80px] l h-[550px]"
            src={person_img}
            alt=""
          />
        </div>
        {/* real time monitoring / interactive Alerts / performance analytics  */}
        <div className="md:w-[40%] w-[100%]  md:mx-0 mx-auto">
          {/* realtime monitoring */}
          <div className=" flex items-center justify-between  md:w-[100%] sm:w-[60%] w-[90%] mx-auto  bg-[#448260] rounded-[24px] py-[20px] px-[30px] realtime-container">
            <p className="inline-block w-[50%] text-[28px] font-[700] text-white ">
              Real-Time Monitoring
            </p>
            <p className="features-realtime">
              <img src={hand_icon} alt="" />
            </p>
          </div>
          {/* interactive Alerts */}
          <div className="bg-[#1B7A84]  md:w-[100%] sm:w-[60%] w-[90%] mx-auto rounded-[24px] pt-[20px] px-[30px] my-[20px] chart-container">
            <p className="flex items-center justify-between text-[28px] font-[500] text-white">
              Inactivity Alerts
              <img className="arrow-chart" src={arrow_icon} alt="" />
            </p>

            <div className="flex items-end gap-4 mt-[20px] h-[120px]">
              <p className="w-[7%] h-[40px] bg-[#E7FCED] rounded-t-[5px] chart1"></p>
              <p className="w-[7%] h-[80px] bg-[#E7FCED] rounded-t-[5px] chart2"></p>
              <p className="w-[7%] h-[60px] bg-[#E7FCED] rounded-t-[5px] chart3"></p>
              <p className="w-[7%] h-[30px] bg-[#E7FCED] rounded-t-[5px] chart4"></p>
              <p className="w-[7%] h-[30px] bg-[#E7FCED] rounded-t-[5px] chart5"></p>
            </div>
          </div>
          {/* performance analytics */}
          <div className="bg-[#EAF2FF] md:w-[100%] sm:w-[60%] w-[90%] mx-auto rounded-[24px] py-[15px] px-[30px]">
            <div className="mb-[50px]">
              <p className="text-[#09441F] text-[24px] font-[700] ">
                Performance Analytics:
              </p>
              <p className="text-[16px] font-[500]">
                Track productivity and performance with actionable insights
              </p>
            </div>
            <div className="flex items-center gap-4 overflow-x-scroll scroll-hide">
              <div className="bg-gray-200 p-[20px] rounded-[24px]">
                <p className="p-[12px] inline-block rounded-full bg-[#ecedd3]">
                  <img className="w-[24px] h-[24px]" src={laptop_icon} alt="" />
                </p>
                <p className="text-[16px] w-[150px] font-[500] my-[10px]">
                  Active time
                </p>
                <p className="text-[19px] w-[150px] font-[700]">6hrs. 20min.</p>
              </div>
              <div className="bg-gray-200  p-[20px] rounded-[24px]">
                <p className="p-[12px] inline-block rounded-full bg-[#ecedd3]">
                  <img className="w-[24px] h-[24px]" src={bulb_icon} alt="" />
                </p>
                <p className="text-[16px]w-[150px]  font-[500] my-[10px]">
                  Productive apps
                </p>
                <p className="text-[19px] w-[150px] font-[700]">60%</p>
              </div>
              <div className="bg-gray-200 p-[20px] rounded-[24px]">
                <p className="p-[12px] inline-block rounded-full bg-[#e6e7c4]">
                  <img className="w-[24px] h-[24px]" src={laptop_icon} alt="" />
                </p>
                <p className="text-[16px] w-[150px] font-[500] my-[10px]">
                  Idle time spen
                </p>
                <p className="text-[19px] w-[150px] font-[700]">1hr. 15min.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customizable Dashboards: / Appraise your team */}
      <div className="lg:w-[30%] w-[100%] lg:grid md:flex grid gap-[20px] ">
        {/* Customizable Dashboard */}
        <div className="lg:w-[100%] md:w-[50%] sm:w-[60%] w-[90%] mx-auto md:mt-0 mt-[20px]">
          <div className="bg-[#D7F4DF] h-[375px] rounded-[24px] p-[20px] ] text-[#09441F] customizable-dashboards">
            <p className="text-[28px] font-[700] leading-[35px] mb-[15px]">
              Customizable Dashboards:
            </p>
            <p className="text-[18px] font-[500] leading-[20px]">
              Intense Team provides the tools you need and is customizable.
            </p>
            <div className="flex items-center justify-between md:gap-4 gap-7 mt-[30px] w-[90%] h-[170px] mx-auto">
              <p className="bg-white lg:p-[15px] p-[25px] rounded-[6px] mb-[70px] customize-icons">
                <img
                  className="mx-auto mt-[-1px] w-[30px] h-[30px]"
                  src={home_icon}
                  alt=""
                />
              </p>
              <p className="bg-white lg:p-[15px] p-[25px] rounded-[6px]">
                <img
                  className="mx-auto mt-[-1px] w-[30px] h-[30px]"
                  src={calendar_icon}
                  alt=""
                />
              </p>
              <p className="bg-white lg:p-[15px] p-[25px] rounded-[6px] mt-[70px] customize-icons">
                <img
                  className="mx-auto mt-[-1px] w-[30px] h-[30px]"
                  src={clock_icon}
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        {/* Appraise your team */}
        <div className="lg:w-[100%] md:w-[50%] sm:w-[60%] w-[90%] mx-auto">
          <div className="bg-[#3B5B85] rounded-[24px] h-[375px] py-[10px] relative">
            <div className=" mb-[53px] mx-[20px]">
              <p className="text-white text-[24px] font-[700]">
                Appraise your team
              </p>
              <p className="text-[16px] font-[500] text-white">
                Track productivity and performance with actionable insights.
              </p>
            </div>
            {/* employee list */}
            <div className="bg-[#E8EDEA] py-[12px] rounded-tl-[24px] rounded-br-[24px] w-[70%] ms-[100px] absolute right-0 bottom-0">
              <p className=" text-[14px] font-[700] text-gray-700 text-center mb-[20px]">
                Employee Name
              </p>
              <div className="px-[15px]">
                <div className="flex items-center mb-[10px]">
                  <input className="me-[30px] bg-gray-300" type="checkbox" />
                  <img
                    className="w-[28px] h-[28px] me-[8px]"
                    src={employe1}
                    alt=""
                  />
                  <p className="text-[14px] font-[600]">Dipika Giri</p>
                </div>
                <div className="flex items-center mb-[10px]">
                  <input className="me-[30px] bg-gray-300" type="checkbox" />
                  <img
                    className="w-[28px] h-[28px] me-[8px]"
                    src={employe2}
                    alt=""
                  />
                  <p className="text-[14px] font-[600]">Alisha Sharma</p>
                </div>
                <div className="flex items-center mb-[10px]">
                  <input className="me-[30px] bg-gray-300" type="checkbox" />
                  <img
                    className="w-[28px] h-[28px] me-[8px]"
                    src={employe3}
                    alt=""
                  />
                  <p className="text-[14px] font-[600]">Jem Khadgi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
