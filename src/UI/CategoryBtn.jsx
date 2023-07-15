import React from "react";

const CategoryBtn = ({ name="", image }) => {
    return (
      <button className="flex items-center justify-center min-w-[60px] rounded-3xl bg-gray-200 px-4 py-2.5 font-semibold hover:bg-gray-300 shadow-md hover:shadow-lg duration-100">
        <img src={image} alt="Pasta Icon" className="mr-2 w-7 h-7" />
        <span>{name}</span> 
      </button>
    );
  };

export default CategoryBtn;