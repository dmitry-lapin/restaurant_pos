import React from "react";

const TabInput = ({name, placeholder, disabled=true}) => {
    return(
        <div className="flex flex-col space-y-1 flex-1">
            <p className="text-md font-medium">{name}</p>
            <input className="border border-gray-400 placeholder:font-medium placeholder:text-gray-500 block bg-gray-200 w-full rounded-md p-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" disabled={disabled} autoComplete="true" placeholder={placeholder} type="text" name={name}/>
        </div>
    );
}

export default TabInput;