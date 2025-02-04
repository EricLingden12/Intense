import React, { useState } from "react";
import logo_icon from "../Assets/icons/Group (2).svg";
import logo_icon2 from "../Assets/icons/Intense.svg";

const Login = () => {
  const [toggle, setToggle] = useState("Login");
  return (
    <div className="w-[400px] my-[30px] py-[30px] px-[50px] mx-[auto] bg-[#041B0B] rounded-[24px] ">
      <div className="flex items-center justify-center gap-2">
        <img className=" w-[29px] h-[37px] " src={logo_icon} />
        <img className=" w-[118px] h-[23px] " src={logo_icon2} alt="Logo" />
      </div>

      <h1 className="text-white text-[25px] text-center font-[700] my-[40px] underline underline-offset-7">
        {toggle}
      </h1>
      <div className="w-[100%] grid gap-[20px] px-[20px] text-blxck">
        {toggle === "Sign Up" ? (
          <input
            className="bg-gray-200 text-[17px] font-[500] px-[15px] py-[5px] outline-0 border-0 rounded-[14px]"
            type="text"
            placeholder="Username"
          />
        ) : (
          <></>
        )}

        <input
          className="bg-gray-200 text-[17px] font-[500] px-[15px] py-[5px] outline-0 border-0 rounded-[14px]"
          type="email"
          placeholder="Email"
        />
        <input
          className="bg-gray-200 text-[17px] font-[500] px-[15px] py-[5px] outline-0 border-0 rounded-[14px]"
          type="password"
          placeholder="Password"
        />
        <div className="flex items-center gap-2 text-white">
          <input className="" type="checkbox" />
          <p className="text-[14px]">Terms and Conditions</p>
        </div>
        <button
          type="submit"
          className="text-white text-[18px] font-[700] bg-[#18A23F] rounded-[14px] py-[8px] px-[15px] cursor-pointer"
        >
          {toggle}
        </button>
        <p className="text-white text-[14px] font-[400]">
          forgot password ?
          <span className="text-[15px] text-blue-200 font-[600] cursor-pointer">
            click here
          </span>
        </p>
        <div className="text-white text-[16px] font-[500]">
          {toggle === "Login" ? (
            <p>
              Don't have an account ?
              <span
                onClick={() => setToggle("Sign Up")}
                className="cursor-pointer text-[17px] font-[600]"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Already have an account ?
              <span
                onClick={() => setToggle("Login")}
                className="cursor-pointer text-[17px] font-[600]"
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
