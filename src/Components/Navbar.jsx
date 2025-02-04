import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import nav_logo_icon from "../Assets/icons/Intense (1).svg";
import nav_logo2_icon from "../Assets/icons/Group (1).jpg";
import lang_icon from "../Assets/Icons/Language_logo.jpg";
import downarrow_icon from "../Assets/Icons/cheveron-down.jpg";
import login_icon from "../Assets/Icons/log-in-04.jpg";
import menu_icon from "../Assets/Icons/menu-02.jpg";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <nav className="py-[20px] bg-white z-[10] sticky top-0 font-poppins">
      <div className=" xl:w-[1216px] w-[90%] mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-1">
          <img className="w-[19px] h-[24px] " src={nav_logo2_icon} alt="" />
          <img className="w-[76px] h-[16px]" src={nav_logo_icon} alt="" />
        </NavLink>
        {/* for larger screens */}
        <div className="lg:flex items-center hidden ">
          <ul className="flex items-center lg:gap-[40px] md:gap-[20px] xl:me-[100px] lg:me-[40px] ">
            <li>
              <NavLink
                to="/features"
                className="text-[16px] font-[500] text-[#363636] cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="text-[16px] font-[500] text-[#363636] cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/download"
                className="text-[16px] font-[500] text-[#363636] cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
              >
                Download
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/support"
                className="text-[16px] font-[500] text-[#363636] cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
              >
                Support
              </NavLink>
            </li>
          </ul>

          <div className="lang-container">
            <div className="flex items-center gap-2 cursor-pointer relative ">
              <img src={lang_icon} className="w-[18] h-[18px] " />
              <p className="text-[15px] font-[700]">{language}</p>
              <img src={downarrow_icon} alt="" />
            </div>
            <div className="absolute bg-gray-200 hidden px-[25px] py-[20px] language cursor-pointer">
              <p onClick={() => setLanguage("English")}>English</p>
              <p onClick={() => setLanguage("Nepali")}>Nepali</p>
              <p onClick={() => setLanguage("Hindi")}>Hindi</p>
              <p onClick={() => setLanguage("French")}>French</p>
              <p onClick={() => setLanguage("Japinese")}>Japanese</p>
            </div>
          </div>

          <div className="mx-[20px] cursor-pointer">
            <NavLink to="/login_signup" className="flex items-center gap-2">
              <img className=" w-[20px] h-[20px] " src={login_icon} />
              <p className="text-[#0A4020] text-[16px] font-[700] ">Login</p>
            </NavLink>
          </div>

          <button className="bg-[#0A4020] text-[16px] font-[700] text-white py-[5px] px-[28px] rounded-[6px] cursor-pointer">
            Get Started
          </button>
        </div>
        {/* for smaller screens */}
        <div onClick={() => setMenu(!menu)} className="lg:hidden grid ">
          <div className="relative cursor-pointer">
            <img src={menu_icon} alt="" />
          </div>
          <div className={menu ? "block" : "hidden"}>
            <div className="absolute top-[50px] right-[5%] w-[90%] p-[30px] text-center bg-white border-b-1 border-black ">
              <div className="grid items-center gap-[20px] mx-auto  ">
                <ul className="grid items-center gap-[20px]">
                  <li>
                    <NavLink
                      to="/features"
                      className="text-[16px] font-[500] text-[#363636]cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
                    >
                      Features
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blogs"
                      className="text-[16px] font-[500] text-[#363636] cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/download"
                      className="text-[16px] font-[500] text-[#363636] cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
                    >
                      Download
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/support"
                      className="text-[16px] font-[500] text-[#363636] cursor-pointer hover:underline underline-offset-4 active:text-blue-600 focus:underline"
                    >
                      Support
                    </NavLink>
                  </li>
                </ul>
                <div className="flex mx-auto items-center gap-2 cursor-pointer hover:border-b-1 ">
                  <div className="lang-container">
                    <div className="flex items-center gap-2 cursor-pointer relative ">
                      <img src={lang_icon} className="w-[18] h-[18px] " />
                      <p className="text-[15px] font-[700]">{language}</p>
                      <img src={downarrow_icon} alt="" />
                    </div>
                    <div className="absolute bg-gray-200 hidden px-[25px] py-[20px] language cursor-pointer">
                      <p onClick={() => setLanguage("English")}>English</p>
                      <p onClick={() => setLanguage("Nepali")}>Nepali</p>
                      <p onClick={() => setLanguage("Hindi")}>Hindi</p>
                      <p onClick={() => setLanguage("French")}>French</p>
                      <p onClick={() => setLanguage("Japinese")}>Japanese</p>
                    </div>
                  </div>
                </div>
                <div className="mx-auto cursor-pointer hover:border-b-1 ">
                  <NavLink
                    to="/login_signup"
                    className="flex items-center gap-2"
                  >
                    <img className=" w-[20px] h-[20px] " src={login_icon} />
                    <p className="text-[#0A4020] text-[16px] font-[700] ">
                      Login
                    </p>
                  </NavLink>
                </div>
                <button className="bg-[#0A4020] w-[40%] mx-auto text-[16px] font-[700] text-white py-[5px] px-[28px] rounded-[6px] cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
