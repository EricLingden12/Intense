import React from "react";

import rahul_sharma from "../../Assets/Images/Rahul Sharma - Frontend Developer 1.png";

const Industry = () => {
  return (
    <div className="mb-[100px] lg:block hidden">
      <div className="lg:w-[80%]  mx-auto  ">
        <div className=" mb-[50px] text-center mx-auto">
          <p className="inline-block text-[16px] text-[#4D4D4D] font-[500] bg-[#DFF1C2] py-[5px] px-[18px] border-1 border-[#84CC16] rounded-[6px] mb-[30px]">
            Industry
          </p>
          <h1 className="landing-hero mx-auto lg:w-[85%] xl:w-[70%] text-[48px] font-[700] leading-[50px]">
            See how companies in different industries use Intense
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <p className="xl:text-[20px] lg:text-[15px] text-[#4D4D4D] font-[500] border-b-[1px] border-[#99D53E]">
            Tech & Software Development
          </p>
          <p className="xl:text-[20px] lg:text-[15px] text-[#4D4D4D] font-[500]">
            Freelancers & Contractors
          </p>
          <p className="xl:text-[20px] lg:text-[15px] text-[#4D4D4D] font-[500]">
            Education Providers
          </p>
          <p className="xl:text-[20px] lg:text-[15px] text-[#4D4D4D] font-[500]">
            Healthcare & Medical Research
          </p>
        </div>
      </div>
      <div className="w-[100%] border-[1px] border-[#99D53E] rounded-[15px] py-[40px]">
        <div className="flex justify-between items-center w-[80%] mx-auto mb-[30px] ">
          <img
            className=" w-[330px] h-[400px] rounded-[20px] "
            src={rahul_sharma}
            alt=""
          />
          <div>
            <p className="text-[24px] font-[500] text-[#5E5E5E] mb-[15px]">
              At Vrit Tech
            </p>
            <p className=" w-[700px] text-[18px] text-[#363636] font-[400] mb-[40px]">
              "Intense Team has been a game-changer for our remote software
              development team. With its real-time activity tracking and
              detailed performance analytics, we can now identify bottlenecks
              quickly and optimize our workflow. It&#x27;s made project
              management smoother and has significantly boosted our team&#x27;s
              productivity."
            </p>
            <p className="float-right text-[#5E5E5E] text-[18px] font-[500]">
              -Rahul Sharma, Engineering Manager
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <p className="w-[12px] h-[12px] bg-[#9FB5A8] rounded-full"></p>
          <p className="w-[18px] h-[18px] bg-[#B6EC2E] rounded-full"></p>
          <p className="w-[12px] h-[12px] bg-[#9FB5A8] rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default Industry;
