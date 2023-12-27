import React from "react";

const BtnCategoryWrapper = ({ category, icon, description, onClick }) => {
    return (
      <button className="group border  rounded-lg px-4 py-3 duration-100 border-1 border-zinc-300 hover:border-zinc-400 bg-gray-200  hover:bg-gray-300 text-zinc-950 dark:text-gray-300 dark:bg-zinc-900 dark:border-zinc-950 dark:hover:bg-zinc-900" onClick={() => onClick(category)}>
        <div className="flex items-center flex-row space-x-3">
            <div className="flex justify-center duration-100 h-8 w-8 md:h-9 md:w-9 group-hover:text-indigo-600">{icon}</div>
            <div className="flex flex-col text-start">
                <p className="font-semibold capitalize text-sm md:text-md group-hover:text-indigo-600 duration-100">{category}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-inherit font-normal">{description}</p>
            </div>
        </div>
      </button>
    );
  };

export default BtnCategoryWrapper;