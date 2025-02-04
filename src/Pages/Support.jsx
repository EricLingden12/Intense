import React from "react";
import Qna from "../Components/Qna";
import LgFooter from "../Components/Footer/LgFooter";
import SmFooter from "../Components/Footer/SmFooter";
import SmDiscoverFooter from "../Components/Footer/SmDiscoverFooter";
import LgDiscoverFooter from "../Components/Footer/LgDiscoverFooter";

import bg_image from "../assets/Images/image copy.png";
import search_icon from "../assets/icons/search-lg.jpg";
import user_icon from "../assets/icons/user-01.svg";
import arrow_icon from "../assets/icons/Icon.svg";
import news_icon from "../assets/icons/newspaper.svg";
import bg_image_2 from "../assets/Images/image copy 2.png";

const Support = () => {
  return (
    <div>
      {/* header */}
      <div className="mb-[100px] ">
        <div className="relative">
          <img
            className="w-[100%] lg:h-[500px] h-[400px]"
            src={bg_image}
            alt=""
          />
        </div>
        <div className="absolute top-[17%] left-[15%] right-[15%] ">
          <div className="text-[#fff] text-center w-[100%] md:mb-[50px] mb-[30px] ">
            <p className="text-[16px] font-[500] mb-[30px] underline underline-offset-8">
              Home / Support
            </p>
            <h3 className=" lg:text-[50px] text-[35px] font-[700] w-[100%] mb-[15px] leading-[40px] landing-hero ">
              Support, find solutions faster
            </h3>
            <p className="lg:text-[20px] text-[15px] font-[400]">
              We are most helpful when you ask a dedicated Question ?
            </p>
          </div>
          <div className="flex items-center mx-auto bg-[#fff] border-[5px] border-[#b3b3b33b] xl:w-[60%] lg:w-[65%] md:w-[60%] w-[80%] lg:py-[12px] py-[8px] px-[16px] rounded-[12px] mb-[30px] ">
            <img className="w-[20px] h-[20px] me-3" src={search_icon} alt="" />
            <input
              className=" w-[100%] text-[18px] font-[500] border-0 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="lg:flex hidden items-center justify-center gap-[15px] text-[#fff] text-[16px] font-[400] ">
            <p className="">Common searches</p>
            <p className="px-[12px] py-[8px] bg-[#FFFFFF33] rounded-[60px] ">
              Pricing plan
            </p>
            <p className="px-[12px] py-[8px] bg-[#FFFFFF33] rounded-[60px] ">
              How to use
            </p>
            <p className="px-[12px] py-[8px] bg-[#FFFFFF33] rounded-[60px] ">
              Integration
            </p>
            <p className="px-[12px] py-[8px] bg-[#FFFFFF33] rounded-[60px] ">
              Privacy
            </p>
          </div>
        </div>
      </div>
      {/* categories */}
      <div className="md:container w-[90%] mx-auto mb-[100px]">
        <div className="text-center text-[black] mb-[30px]">
          <p className="text-[45px] font-[500]">Filter by categories</p>
          <p className="text-[18px] font-[400]">
            Browse knowledge base article according to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px]">
          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>

          <div className=" bg-gray-100 rounded-[8px] px-[20px] py-[30px]">
            <div className="flex items-center justify-between">
              <img className="w-[30px] h-[30px]" src={user_icon} alt="" />
              <p className="text-[20px] text-[#5E5E5E] font-[500]">
                About Admin function
              </p>
              <img
                className="w-[20px] h-[20px] rotate-[-90deg]"
                src={arrow_icon}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between my-[40px]">
              <p className="flex items-center gap-2 text-[14px] font-[500] text-gray-600">
                <img className="w-[20px] h-[20px]" src={news_icon} alt="" />
                17 articles
              </p>
              <p className="text-[14px] font-[500] text-gray-600">
                Posted 6 month ago
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[60px]">
        <img src={bg_image_2} alt="" />
      </div>
      <Qna />
      <LgDiscoverFooter />
      <SmDiscoverFooter />
      <div className="block lg:hidden">
        <SmFooter />
      </div>
      <LgFooter />
    </div>
  );
};

export default Support;
