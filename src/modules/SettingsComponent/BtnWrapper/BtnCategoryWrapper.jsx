import React from "react";

const BtnCategoryWrapper = ({ category, icon, description, onClick }) => {
    return (
      <button className="group border border-gray-300 rounded-lg px-4 py-3 duration-100 hover:border-indigo-300" onClick={() => onClick(category)}>
        <div className="flex items-center flex-row space-x-3">
            <div className="flex justify-center duration-100 h-9 w-9 group-hover:text-indigo-600">{icon}</div>
            <div className="flex flex-col text-start">
                <p className="font-semibold capitalize text-md group-hover:text-indigo-600 duration-100">{category}</p>
                <p className="text-xs text-zinc-500 group-hover:text-inherit font-normal">{description}</p>
            </div>
        </div>
      </button>
    );
  };

export default BtnCategoryWrapper;