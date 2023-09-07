import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  // useEffect((=>{

  // }))

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass className="text-black cursor-pointer" />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2  bg-transparent outline-none text-black"
        />
      </div>
      <div>
        {theme == "dark" ? (
          <HiSun
            className="text-[35px] cursor-pointer
          bg-gray-200 text-black p-1 rounded-full "
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        ) : (
          <HiMoon
            className="text-[35px] cursor-pointer bg-slate-200  text-black p-1 rounded-full"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
