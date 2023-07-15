import React from "react";

const NormalBtn = ({ children, color="text-black", bgColor="bg-zinc-700", hoverBg="hover:bg-zinc-800", className}) => {
    let styleElem = "text-lg font-semibold border border-zinc-900 duration-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg " + color + " " + bgColor + " " + hoverBg + " " + className;

    return (
      <button className={styleElem}>
        {children}
      </button>
    );
  };

export default NormalBtn;