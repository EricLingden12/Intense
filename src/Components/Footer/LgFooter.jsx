import React from "react";
import logo_icon from "../../Assets/icons/Group.jpg";
import logo_icon2 from "../../Assets/icons/Intense (1).svg";

const LgFooter = () => {
  return (
    <div className="lg:block hidden w-[85%] mx-auto mb-[100px]">
      <div className="flex items-start justify-between mb-[50px]">
        {footerdata.map((item) => (
          <div className="grid gap-[10px] text-[#6B7280] text-[14px] font-[500]">
            <h4 className="text-black text-[16px] font-[500] ]">
              {item.title}
            </h4>
            <p>{item.description1}</p>
            <p>{item.description2}</p>
            <p>{item.description3}</p>
            <p>{item.description4}</p>
            <p>{item.description5}</p>
            <p>{item.description6}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between py-[15px] border-t-1 border-[#E5E7EB]">
        <div className="flex items-center gap-1">
          <img className="w-[20px] h-[24px]" src={logo_icon} alt="" />
          <img className="w-[76px] h-[16px]" src={logo_icon2} alt="" />
        </div>
        <p className="text-[#6B7280] text-[14px] font-[400]">
          © 2024 Designership. All rights reserved.
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

export default LgFooter;
