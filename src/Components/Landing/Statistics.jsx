import React from "react";
import asiean_girl_img from "../../assets/Images/statestic/asian-female-getting-things-done-from-the-comfort-2024-10-16-14-23-36-utc 1.png";
import line_icon from "../../assets/Images/statestic/Linnnnne.png";
import laptop_img from "../../assets/Images/statestic/MASK.png";
import trensingUp_icon from "../../assets/Images/statestic/trending-up.svg";
import vector_line_icon from "../../assets/Images/statestic/Vector 12.svg";
const Statistics = () => {
  return (
    <div>
      <div className="lg:w-[80%] w-[90%] lg:mt-[100px] mt-[600px] mx-auto mb-[100px] ">
        <div className=" mb-[50px] text-center mx-auto">
          <p className="inline-block text-[16px] text-[#4D4D4D] font-[500] bg-[#DFF1C2] py-[5px] px-[18px] border-1 border-[#84CC16] rounded-[6px] mb-[30px]">
            Statistics
          </p>
          <h1 className="landing-hero mx-auto lg:w-[85%] xl:w-[70%] text-[48px] font-[700] leading-[50px]">
            Our impact in numbers
          </h1>
        </div>

        <div className="lg:flex grid gap-[20px]">
          <div className="lg:w-[60%] md:w-[70%] w-[90%] lg:mx-0 mx-auto">
            <div className="flex gap-[20px] items-center mb-[25px] ">
              <div className="w-[50%] md:block hidden relative ">
                <img className="w-[330px] h-[275px]" src={laptop_img} alt="" />
                <p className="absolute bg-[#0D2E1B] p-[20px] rounded-full top-[-25px] right-[10px] ">
                  <img
                    className=" w-[40px] h-[40px]"
                    src={trensingUp_icon}
                    alt=""
                  />
                </p>
              </div>
              <div className="bg-[#F0F0F0] h-[275px] mx-auto rounded-[10px] px-[30px] py-[10px] md:w-[50%] w-[90%]">
                <p className="text-[#0D2E1B] text-[70px] font-[700] mt-[-15px] mb-[20px]">
                  150+
                </p>
                <p className="mb-[20px]">
                  some big companies that we work with, and trust us very much
                </p>
                <img className="w-[211px]" src={line_icon} alt="" />
              </div>
            </div>
            <div className="md:flex hidden justify-between bg-[#041B0B] px-[30px] pt-[40px] rounded-[13px]">
              <div className="w-[75%] ">
                <p className="flex items-center gap-2 text-[#E8EDEA] mb-[30px] text-[14px] font-[500]">
                  <img src={vector_line_icon} alt="" />
                  Enhance productivity/team efficiency.
                </p>
                <p className="text-[#E8EDEA] text-[32px] font-[500] leading-[40px]">
                  Boost Productivity, Streamline Workflow
                </p>
              </div>
              <div className="w-[25%] h-[150px] mt-[40px] relative ">
                <p className="absolute bottom-0 left-0 w-[30%] h-[50px] bg-[#BAE289] rounded-t-[4px]"></p>
                <p className="absolute bottom-0 left-[35%] w-[30%] h-[80px] bg-[#99CF63] rounded-t-[4px]"></p>
                <p className="absolute bottom-0 right-0 w-[30%] h-[120px] bg-[#77B248] rounded-t-[4px]"></p>
              </div>
            </div>
          </div>

          <div className="lg:w-[40%] md:w-[70%] w-[90%] lg:mx-0 mx-auto relative">
            <img
              className="rounded-[15px] md:h-[530px]"
              src={asiean_girl_img}
              alt=""
            />
            <div className="absolute top-[50px] left-[30px]">
              <p className="text-[#D8F53D] text-[70px] font-[700] ">42%</p>
              <p className="text-[#D8F53D] text-[16px] font-[500] w-[100%]">
                productivity increase reported
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
