import React from "react";
import plus_icon from "../assets/icons/plus.svg";

const WhyIntense = () => {
  return (
    <div className="lg:w-[80%] mx-auto mb-[100px] ">
      <div className=" mb-[50px] text-center mx-auto">
        <p className="inline-block text-[16px] text-[#4D4D4D] font-[500] bg-[#DFF1C2] py-[5px] px-[18px] border-1 border-[#84CC16] rounded-[6px] mb-[30px]">
          Reason
        </p>
        <h1 className="landing-hero mx-auto lg:w-[85%] xl:w-[70%] text-[48px] font-[700] leading-[50px]">
          Why they chose Intense?
        </h1>
      </div>

      <div className="lg:flex grid items-center gap-[20px] w-[100%] h-[290px] ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="lg:w-[33%] sm:w-[60%] w-[90%] lg:mx-0 mx-auto bg-[#E7FCED] text-black lg:h-[290px] h-[250px] rounded-[12px] p-[25px] lg:hover:mt-[60px] why-Intense"
            >
              <div className="flex justify-between items-start mb-[25px] ">
                <p className=" text-[25px] font-[500] w-[80%] leading-[30px]">
                  {item.title}
                </p>
                <p className="bg-[#1B7A84] p-[5px] rounded-full icon">
                  <img className="w-[23px] h-[23px]" src={item.icon} alt="" />
                </p>
              </div>
              <p className="w-[100%] text-[15px] font-[400]">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    icon: plus_icon,
    title: `Stay Accountable, Work Transparently`,
    desc: `Keep your team focused and distraction-free with real-time
            monitoring and detailed activity logs.`,
  },
  {
    id: 2,
    icon: plus_icon,
    title: `Work Smarter, Not Harder`,
    desc: `Empower managers to make informed decisions and employees to deliver
            their best work every day.`,
  },
  {
    id: 3,
    icon: plus_icon,
    title: `Simplify, Streamline, Succeed`,
    desc: `Automate time tracking, payroll integration, and compliance tasks
            for your team’s success. Intense Team makes managing remote and
            hybrid teams effortless.`,
  },
];

export default WhyIntense;
