import React from "react";
import down_arrow_icon from "../assets/icons/Icon.svg";
const Qna = () => {
  return (
    <div className="lg:flex grid gap-[30px] justify-between mb-[100px] w-[80%] mx-auto">
      <div className="lg:w-[45%] md:w-[75%] w-[90%] lg:mx-0 mx-auto">
        <h3 className="text-[50px] font-[700] leading-[50px] mb-[20px]">
          Got questions? we’ve got answers
        </h3>
        <p className="text-[16px] font-[500]">
          Explore our FAQs to learn more about how Intense Team can streamline
          your workflow and boost productivity.
        </p>
      </div>

      <div className="grid  lg:w-[50%] md:w-[75%] w-[90%] lg:mx-0 mx-auto">
        <div className=" bg-[#dddddd] hover:bg-[#D5F486] rounded-[5px] px-[30px] py-[20px] dropdown-menu mb-[20px] hover:mb-0">
          <div className="flex justify-between items-center gap-[30px] ">
            <p className="text-[#444851] text-[16px] font-[400]">
              1. What is Intense Team and how does it work?
            </p>
            <img
              className="w-[24px] h-[24px] img-rotate "
              src={down_arrow_icon}
              alt=""
            />
          </div>
          <div className="dropdown-menu hidden dropdown w-[90%] mx-auto mt-[30px] text-[16px] font-[400] text-[#5E5E5E] bg-gray-100 p-[25px]">
            Intense Team enhances productivity by providing real-time
            monitoring, task management, and performance analytics all in one
            platform. By tracking live activities, work hours, and engagement
            levels, teams can identify bottlenecks and improve workflows. With
            tools like customizable dashboards and inactivity alerts, you can
            ensure that your team stays focused, organized, and on track to meet
            deadlines.
          </div>
        </div>
        <div className=" bg-[#dddddd] hover:bg-[#D5F486] rounded-[5px] px-[30px] py-[20px] dropdown-menu mb-[20px] hover:mb-0">
          <div className="flex justify-between items-center gap-[30px] ">
            <p className="text-[#444851] text-[16px] font-[400]">
              2. How do I get started with Intense Team?
            </p>
            <img
              className="w-[24px] h-[24px] img-rotate "
              src={down_arrow_icon}
              alt=""
            />
          </div>
          <div className="dropdown-menu hidden dropdown w-[90%] mx-auto mt-[30px] text-[16px] font-[400] text-[#5E5E5E] bg-gray-100 p-[25px]">
            Intense Team enhances productivity by providing real-time
            monitoring, task management, and performance analytics all in one
            platform. By tracking live activities, work hours, and engagement
            levels, teams can identify bottlenecks and improve workflows. With
            tools like customizable dashboards and inactivity alerts, you can
            ensure that your team stays focused, organized, and on track to meet
            deadlines.
          </div>
        </div>
        <div className=" bg-[#dddddd] hover:bg-[#D5F486] rounded-[5px] px-[30px] py-[20px] dropdown-menu mb-[20px] hover:mb-0">
          <div className="flex justify-between items-center gap-[30px] ">
            <p className="text-[#444851] text-[16px] font-[400]">
              3. What kind of customer support is available?
            </p>
            <img
              className="w-[24px] h-[24px] img-rotate "
              src={down_arrow_icon}
              alt=""
            />
          </div>
          <div className="dropdown-menu hidden dropdown w-[90%] mx-auto mt-[30px] text-[16px] font-[400] text-[#5E5E5E] bg-gray-100 p-[25px]">
            Intense Team enhances productivity by providing real-time
            monitoring, task management, and performance analytics all in one
            platform. By tracking live activities, work hours, and engagement
            levels, teams can identify bottlenecks and improve workflows. With
            tools like customizable dashboards and inactivity alerts, you can
            ensure that your team stays focused, organized, and on track to meet
            deadlines.
          </div>
        </div>
        <div className=" bg-[#dddddd] hover:bg-[#D5F486] rounded-[5px] px-[30px] py-[20px] dropdown-menu mb-[20px] hover:mb-0">
          <div className="flex justify-between items-center gap-[30px] ">
            <p className="text-[#444851] text-[16px] font-[400]">
              4. How does Intense Team help improve team productivity?
            </p>
            <img
              className="w-[24px] h-[24px] img-rotate"
              src={down_arrow_icon}
              alt=""
            />
          </div>
          <div className="dropdown-menu hidden dropdown w-[90%] mx-auto mt-[30px] text-[16px] font-[400] text-[#5E5E5E] bg-gray-100 p-[25px]">
            Intense Team enhances productivity by providing real-time
            monitoring, task management, and performance analytics all in one
            platform. By tracking live activities, work hours, and engagement
            levels, teams can identify bottlenecks and improve workflows. With
            tools like customizable dashboards and inactivity alerts, you can
            ensure that your team stays focused, organized, and on track to meet
            deadlines.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qna;
