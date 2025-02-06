import React from "react";

const PricingPlan = () => {
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto mb-[100px] ">
      <div className=" mb-[50px] text-center mx-auto">
        <p className="inline-block text-[16px] text-[#4D4D4D] font-[500] bg-[#DFF1C2] py-[5px] px-[18px] border-1 border-[#84CC16] rounded-[6px] mb-[30px]">
          Pricing Plans
        </p>
        <h1 className="landing-hero mx-auto lg:w-[85%] xl:w-[70%] text-[48px] font-[700] leading-[50px]">
          What it costs for productivity?
        </h1>
      </div>

      <div className="flex items-center justify-center gap-4">
        <p className="text-[#686868)] text-[16px] font-[400]">Monthly</p>
        <p className="w-[55px] h-[28px] bg-[#3FB260] rounded-[20px] px-1 pt-1 ">
          <p className="w-[20px] h-[20px] bg-white rounded-full float-right"></p>
        </p>
        <p className="text-[#686868)] text-[16px] font-[400]">Annually</p>
      </div>

      <div className="w-[100%] lg:flex md:grid justify-center lg:mt-0  mt-[30px]">
        <div className="lg:flex lg:flex-row flex flex-col-reverse lg:w-[70%] md:w-[90%] mx-auto lg:me-[20px] gap-[20px] text-white">
          <div className="lg:w-[48%] md:w-[80%] sm:w-[60%] w-[80%] h-[550px] mx-auto border-1 border-[#A6DEB6] bg-[#F3FAF5] rounded-[15px] px-[40px] text-black">
            <p className="text-[25px] font-[700] mt-[40px]">Basic Plan</p>
            <p className="text-[16px] font-[500] ">
              For companies that are seeking for productivity and growth
            </p>
            <p className="text-[25px] font-[700] my-[30px]">
              $19/month per user
            </p>
            <ul className="list-disc text-[17px] font-[500]">
              <li>Time Tracking</li>
              <li>Activity Monitoring</li>
              <li>Basic Reporting</li>
              <li>Email Support</li>
            </ul>
          </div>
          <div className="lg:w-[55%] md:w-[80%] sm:w-[60%] w-[80%] mx-auto h-[600px] rounded-[15px] border-1 border-[#A6DEB6] bg-[#4B7456] px-[40px] pb-[50px] lg:mt-[30px] mt-0">
            <p className="my-[30px] xl:w-[50%] lg:w-[55%] w-[50%] text-center text-[12px] font-[500] text-black mx-auto rounded-[6px] bg-[#F8FDEA] py-[4px] px-[12px] ">
              Most popular
            </p>
            <p className="text-[25px] font-[700] inline-block">Basic Plan</p>
            <p className="text-[16px] font-[500] ">
              For companies that are seeking for productivity and growth
            </p>
            <p className="text-[25px] font-[700] my-[30px]">
              $19/month per user
            </p>
            <ul className="list-disc text-[17px] font-[500] mb-[30px]">
              <li>Time Tracking</li>
              <li>Activity Monitoring</li>
              <li>Basic Reporting</li>
              <li>Email Support</li>
            </ul>
            <button className="text-[#154B2C] text-[16px] font-[700] bg-[#B6EC2E] text-center py-[10px] rounded-[6px] w-[100%] active:bg-[#112018]  active:text-white mb-[30px]">
              Sign UP
            </button>
          </div>
        </div>
        <div className="lg:w-[30%]">
          <div className="lg:w-[100%] md:w-[72%] sm:w-[60%] w-[80%] lg:mt-0 mt-[20px] mx-auto h-[550px] rounded-[15px] border-1 border-[#A6DEB6] bg-[#F3FAF5] px-[40px]">
            <p className="text-[25px] font-[700] mt-[40px]">Basic Plan</p>
            <p className="text-[16px] font-[500] ">
              For companies that are seeking for productivity and growth
            </p>
            <p className="text-[25px] font-[700] my-[30px]">
              $19/month per user
            </p>
            <ul className="list-disc text-[17px] font-[500]">
              <li>Time Tracking</li>
              <li>Activity Monitoring</li>
              <li>Basic Reporting</li>
              <li>Email Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
