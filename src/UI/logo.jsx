import React from "react";
import LogoImage from "../assets/common_icons/Logo.png";

const Logo = ({ params }) => {
  let textStyling = "hover:glow duration-100 cursor-pointer " + params;
    return (
      <div className="flex space-x-3">
        <div className="hidden md:flex items-center">
          <img src={LogoImage} alt="Logo" className="h-16 md:h-12 lg:h-16"/>
        </div>
        <div className="flex md:hidden lg:flex flex-col self-center">
          <p className={textStyling}>Homer's Pub</p>
          <p className="hidden xl:block text-zinc-800 dark:text-red-600 text-sm">Sip, Savor, Repeat!</p>
        </div>
      </div>
    );
  };

export default Logo;