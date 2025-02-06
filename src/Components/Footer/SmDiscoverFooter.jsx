import React from "react";
import roof_icon from "../../Assets/Icons/Object (3).svg";
import note_icon from "../../Assets/Icons/Group (3).svg";
import right_arrow_icon from "../../Assets/Icons/Right.svg";

const SmDiscoverFooter = () => {
  return (
    <div className="block lg:hidden w-[100%] bg-[#F8FDEA] rounded-[12px] relative footer-discover">
      <img src={roof_icon} alt="" />
      <div className=" w-[70%] mx-auto text-center ">
        <h1 className=" text-[32px] font-[700] text-[#313131)] ">
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
      <img className="ms-[92%]" src={note_icon} alt="" />
    </div>
  );
};

export default SmDiscoverFooter;
