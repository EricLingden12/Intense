import React from "react";
import logo_icon from "../../Assets/icons/Group (2).svg";
import logo_icon2 from "../../Assets/icons/Intense.svg";
import rightarrow_icon from "../../Assets/icons/Vector 9.svg";

const SmFooter = () => {
  return (
    <div className="bg-[#041B0B] w-[95%] mx-auto mt-[65px] py-[55px] px-[40px] rounded-[30px] mb-[40px]">
      <div className="pb-[50px]">
        <div className=" lg:flex hidden items-center justify-between ">
          <h1 className=" text-[45px] font-[500] text-[#fff] ">
            Start Using Intense Teams
          </h1>
          <img className="w-[124px] h-[1]" src={rightarrow_icon} alt="" />
        </div>
        <hr className="lg:flex hidden border-1 border-[#fff] h-[1px] w-[100%] my-[40px]" />
        <div className="md:flex grid items-start justify-between mb-[60px] ">
          <div className="md:mb-0 mb-[40px]">
            <div className="flex items-center gap-2">
              <img className=" w-[29px] h-[37px] " src={logo_icon} />
              <img
                className=" w-[118px] h-[23px] "
                src={logo_icon2}
                alt="Logo"
              />
            </div>
            <p className=" mt-[20px] text-[18px] font-[400] text-[#B8B8B8]  ">
              Kathmandu Nepal, Vrit Tech
            </p>
          </div>

          <div className="md:flex grid grid-cols-1 items-start gap-[85px]">
            {footerdata.map((item) => {
              return (
                <div className="grid grid-cols-1">
                  <h6 className=" text-[24px] font-[500] text-[#fff] mb-[16px] ">
                    {item.title}
                  </h6>
                  <ul>
                    <li className="text-[18px] font-[400] text-[#B8B8B8] mb-[12px] ">
                      {item.description1}
                    </li>
                    <li className="text-[18px] font-[400] text-[#B8B8B8] mb-[12px] ">
                      {item.description2}
                    </li>
                    <li className="text-[18px] font-[400] text-[#B8B8B8] mb-[12px] ">
                      {item.description3}
                    </li>
                    <li className="text-[18px] font-[400] text-[#B8B8B8] mb-[12px] ">
                      {item.description4}
                    </li>
                    <li className="text-[18px] font-[400] text-[#B8B8B8] mb-[12px] ">
                      {item.description5}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <p className=" md:text-[18px] text-[12px] font-[400] text-[#fff] float-right ">
          Copyright 2023 ©Intense Team
        </p>
      </div>
    </div>
  );
};

const footerdata = [
  {
    title: `Company`,
    description1: `About`,
    description2: `Leadership`,
    description3: `Blog`,
    description4: `Careers`,
    description5: `Referral Program`,
    description6: `Community`,
  },
  {
    title: `Product`,
    description1: `Overview`,
    description2: `Features`,
    description3: `Pricing`,
    description4: `Documentation`,
    description5: `Tools & Integration`,
    description6: `Realeses`,
  },
  {
    title: `Support`,
    description1: `Help centre`,
    description2: `FAQ`,
    description3: `Contact`,
    description4: `Press`,
    description5: `Status`,
  },
  {
    title: `Industry Solutions`,
    description1: `Apparel & Fashion`,
    description2: `Health & Beauty`,
    description3: `Food & Beverage`,
    description4: `Manufacturing`,
    description5: `Automotive`,
  },
  {
    title: `Legal`,
    description1: `Legal Notice`,
    description2: `Privacy Policy`,
    description3: `Terms of Use`,
  },
  {
    title: `Social`,
    description1: `Instagram`,
    description2: `Twitter`,
    description3: `Facebook`,
    description4: `LinkedIn`,
    description5: `Github`,
  },
];

export default SmFooter;
