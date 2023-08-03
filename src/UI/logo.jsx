import React from "react";

const Logo = ({ params }) => {
    return (
      <p className={"logo text-center self-center text-white text-gradient hover:text-blue-400 duration-150 cursor-pointer " + params}>
        <span className="hidden md:inline lg:hidden">GD!</span>
        <span className="lg:inline md:hidden">GodDish!</span>
      </p>
    );
  };

export default Logo;