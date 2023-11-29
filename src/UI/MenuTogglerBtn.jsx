import React from "react";

const MenuTogglerBtn = ({ isMenuOpen, toggleMenu }) => {
    return (
        <button className="md:hidden m-3 rounded duration-100 p-2" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-zinc-950 dark:text-gray-300 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>   
        </button>
      );
}

export default MenuTogglerBtn;