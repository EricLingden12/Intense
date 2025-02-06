import React from "react";
import roof_icon from "../../Assets/icons/Object.svg";
import note_icon from "../../Assets/icons/Group (1).svg";
import right_arrow_icon from "../../Assets/Icons/Right.svg";
import bag_icon from "../../Assets/icons/Object (1).svg";
import clock_icon from "../../Assets/icons/Object (2).svg";
const LgDiscoverFooter = () => {
  return (
    <div className="lg:block mb-[100px] hidden h-[500px] bg-[#F8FDEA] rounded-[12px] relative font-m footer-discover">
      <img src={roof_icon} alt="" />
      <div className="absolute right-0 top-[54px]">
        <img src={note_icon} alt="" />
      </div>

      <div className=" w-[700px] mx-auto text-center ">
        <h1 className=" text-[52px] font-[700] text-[#313131)] ">
          Discover a Better Way to Manage Your Team
        </h1>
        <p className="text-[16px] font-[400] text-[#313131] mb-[40px] ">
          Track your team&#x27;s progress and improve productivity with Intense
          Team.
        </p>
        <button className=" bg-[#18A23F] py-[14px] px-[20px] flex items-center gap-[3px] rounded-[8px] text-[16px] font-[500] text-white cursor-pointer mx-auto active:bg-[#3f6449] ">
          Request a Demo
          <img src={right_arrow_icon} />
        </button>
      </div>
      <div className="flex justify-around mx-auto mt-[24px]">
        <img src={bag_icon} alt="" />
        <img src={clock_icon} alt="" />
      </div>
    </div>
  );
};

export default LgDiscoverFooter;
