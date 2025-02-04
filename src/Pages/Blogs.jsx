import React from "react";
import { useState } from "react";

// import LgFooter from "../Components/Footer/LgFooter";
// import LandingFooter from "../Components/Footer/LandingFooter";
// import SmDiscoverFooter from "../Components/Footer/SmDiscoverFooter";
// import FooterDiscover from "../Components/Footer/FooterDiscover";

import search_icon from "../assets/icons/search-lg.jpg";
import bg_image from "../assets/Images/image copy.png";
import down_arrow_icon from "../assets/icons/Icon.svg";
import right_arrow_icon from "../assets/icons/Group 47806 (1).jpg";
import left_arrow_icon from "../assets/icons/Group 47806 (2).jpg";

import blog_image1 from "../assets/Images/38eb87ab0767453f896c85eb489edb8b.jpeg";
import blog_image2 from "../assets/Images/ba9f69ca06e4a5a61da2a5006690a632.jpeg";
import blog_image3 from "../assets/Images/da084bdffb5909731be829d659b96fe1.jpeg";
import blog_image4 from "../assets/Images/3705b5a463c87568427cf344ed48eebb.jpeg";
import blog_image5 from "../assets/Images/74bda90daac862efbeab4f36251d9372.jpeg";
import blog_image6 from "../assets/Images/cec4b4ca476e5a93b0a6f53ec5fdc580.jpeg";
import blog_image7 from "../assets/Images/4a8602a2429d4c246fcc48952103be1d.jpeg";
import blog_image8 from "../assets/Images/2e695da52516b7b5b2cdc8d79a3c93d6.jpeg";
import blog_image9 from "../assets/Images/04eccf8c7c2bd69cdfc5338716bfa833.jpeg";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPage = Math.ceil(blogsdata.length / itemsPerPage);

  const lsatItem = currentPage * itemsPerPage;
  const firstItem = lsatItem - itemsPerPage;
  const currentItem = blogsdata.slice(firstItem, lsatItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      {/* header */}
      <div className="mb-[100px]">
        <div className="relative">
          <img
            className="w-[100%] lg:h-[500px] h-[400px]"
            src={bg_image}
            alt=""
          />
        </div>
        <div className="absolute top-[17%] left-[15%] right-[15%] ">
          <div className="text-[#fff] text-center w-[100%] md:mb-[50px] mb-[20px] ">
            <p className="text-[16px] font-[500] mb-[30px] underline underline-offset-8">
              Home / Blogs
            </p>
            <h3 className="lg:block hidden lg:text-[50px] font-[700] w-[100%] leading-[70px] landing-hero ">
              Insights, Efficiency, Success: Your Ultimate Guide to Smarter Team
              Management
            </h3>
            <h3 className="lg:hidden block text-[35px] font-[700] w-[100%] leading-[45px] landing-hero ">
              Read blogs that will give you Insights, Efficiency, Success
            </h3>
          </div>
          <div className="flex items-center mx-auto bg-[#fff] border-[5px] border-[#b3b3b33b] xl:w-[60%] lg:w-[65%] md:w-[60%] w-[80%] lg:py-[12px] py-[8px] px-[16px] rounded-[12px] mb-[30px] ">
            <img className="w-[20px] h-[20px] me-3" src={search_icon} alt="" />
            <input
              className=" w-[100%] text-[18px] font-[500] border-0 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      {/* categories */}
      <div className="container flex items-start justify-center gap-3 mx-auto mb-[30px]">
        <p className="text-[16px] font-[400] pt-1">Categories:</p>
        <ul className="flex items-center w-[80%] gap-3 text-[14px] font-[500] overflow-x-auto pb-5 ">
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Recent
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Pricing&nbsp;plan
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            How&nbsp;to&nbsp;use
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Integration
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Privacy
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Time
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Registration
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Productivity
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            System&nbsp;Design
          </li>
          <li className="bg-[#cdead8] px-[12px] py-[8px] rounded-[60px] cursor-pointer hover:bg-[#d7e9df]">
            Launch
          </li>
        </ul>
      </div>
      {/* Blogs */}
      <div className="lg:container w-[90%] grid mx-auto justify-between xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 mb-[50px]">
        {currentItem.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[400px] h-[400px] md:w-[350px] md:h-[380px] mx-auto rounded-[16px] blog-container"
            >
              <p className="relative">
                <img
                  className="w-[400px] h-[250px] md:w-[396px] md:h-[243px] object-cover rounded-[16px] mb-[15px]"
                  src={item.image}
                  alt=""
                />
                <span className="absolute bottom-[15px] left-[15px] text-[12px] font-[400] bg-[white] px-3 py-1 rounded-[18px]">
                  06 Feb
                </span>
              </p>
              <div className="flex items-start justify-between gap-8 text-[20px] font-[400] mx-[10px]">
                <p className="text-[18px] md:text-[20px] font-[500] md:w-[287px] leading-[28px] w-[266px]">
                  {item.title}
                </p>
                <p className="w-[40px] h-[40px] md:w-[44px] rounded-full rotate-[-90deg] blog-arrow">
                  <img
                    className="w-[25px] h-[25px] mx-auto mt-[7px]"
                    src={down_arrow_icon}
                    alt=""
                  />
                </p>
              </div>
              <hr className="m-[10px] border-1 border-[#7E7E7E]" />
              <p className="text-[#ADADAD] text-[14px] font-[400] mx-[10px]">
                {item.footer}
              </p>
            </div>
          );
        })}
      </div>
      {/* buttons previous and next */}
      <div className="flex items-center justify-center gap-[10px] mb-[100px] ">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex items-center gap-2 text-[#0A421A] text-[17px] font-[500]"
        >
          <img src={left_arrow_icon} alt="" />
          Previous
        </button>

        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPage}
          className="flex items-center gap-2 text-[#0A421A] text-[17px] font-[500]"
        >
          Next
          <img src={right_arrow_icon} alt="" />
        </button>
      </div>
      {/* <FooterDiscover />
      <SmDiscoverFooter />
      <div className="block lg:hidden">
        <LandingFooter />
      </div>
      <LgFooter /> */}
    </div>
  );
};

const blogsdata = [
  {
    id: 1,
    image: blog_image1,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 2,
    image: blog_image2,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 3,
    image: blog_image3,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 4,
    image: blog_image4,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 5,
    image: blog_image5,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 6,
    image: blog_image6,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 7,
    image: blog_image7,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 8,
    image: blog_image8,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
  {
    id: 9,
    image: blog_image9,
    title: `Maximize Team Productivity with Actionable Insights`,
    footer: `Bebull Sapkota . 6 min . Time Management`,
  },
];

export default Blogs;
