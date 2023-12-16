import React from "react";

const SaveTabsBtn = () => { 
    return(
        <div className="flex space-x-6 items-center font-medium text-zinc-950 dark:text-gray-300">
            <button className="capitalize">
                cancel
            </button>
            <button className="capitalize self-start bg-indigo-600 py-3 px-5 rounded-lg text-gray-200 hover:bg-indigo-500 duration-100" onClick={() => ({})}>
                save
            </button>
        </div>
    );
}

export default SaveTabsBtn;