import React, { useState } from "react";
import money_icon from "../../assets/icons/bank-note-01.svg";
import wifi_icon from "../../assets/icons/wifi-off.svg";
import calendar_icon from "../../assets/icons/calendar-minus-01.jpg";

const data = [
  {
    icon: money_icon,
    title: `Payroll Reporting`,
    description: `Save time on payroll with streamlined reporting. Integrate easily,
            improve accuracy, and focus on growing your business.`,
  },
  {
    icon: calendar_icon,
    title: `Attendance tracking`,
    description: `Simplify your routine tasks and ensure accountability. Automate
            attendance management and keep your team on track.`,
  },
  {
    icon: wifi_icon,
    title: `Offline Mode`,
    description: `Never miss a moment. Track time and manage tasks seamlessly, even
            without an internet connection.`,
  },
];

const Cards = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="mb-[100px] md:w-[85%] sm:w-[90%] w-[95%] mx-auto ">
      {/* for Larger screen */}
      <div className="lg:flex hidden items-center gap-[30px] justify-between mb-[50px]">
        {data.map((item, index) => {
          return (
            <div className=" bg-[#EEFAF1] border-[1px] border-[#D7F4DF] rounded-[12px] p-[30px] text-center">
              <p className="bg-white p-[17px] inline-block mx-auto mb-[25px]">
                <img className="w-[28px] h-[28px]" src={item.icon} alt="" />
              </p>
              <p className="text-[#154B2C] text-[24px] font-[700] mb-[12px]">
                {item.title}
              </p>
              <p className="text-[#154B2C] text-[16px] font-[400] ">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* for smaller screen */}
      <div className="lg:hidden  grid items-center justify-center text-center lg:w-[100%] gap-[20px] mb-[50px]">
        {data.map((item, index) => {
          return (
            <div key={index} className={slide === index ? "block" : "hidden"}>
              <div className="bg-[#EEFAF1] border-1 border-[#D7F4DF] rounded-[12px] p-[30px] md:w-[70%] sm:w-[80%] w-[90%] h-[320px] mx-auto">
                <p className="bg-white p-[17px] inline-block mx-auto mb-[25px]">
                  <img className="w-[28px] h-[28px]" src={item.icon} alt="" />
                </p>
                <p className="text-[#154B2C] text-[24px] font-[700] mb-[12px]">
                  {item.title}
                </p>

                <p className="text-[#154B2C] text-[16px] font-[400] ">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
        <div className="flex items-center gap-[12px] mx-auto mt-[30px] ">
          {data.map((_, index) => {
            return (
              <button
                key={index}
                onClick={setSlide.bind(null, index)}
                className={
                  slide === index
                    ? "bg-[#B6EC2E] w-[18px] h-[18px] rounded-full cursor-pointer"
                    : "bg-[#E8EDEA] w-[12px] h-[12px] rounded-full cursor-pointer"
                }
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
