import React from "react";
import Logo from "../../../../UI/logo";

const InfoContainer = () => {
    return(
        <div className="flex flex-col bg-zinc-900 m-3 rounded-lg p-4 space-y-4 mt-auto">
            <div className="flex space-x-3">
                <Logo params="font-semibold text-lg"/>
                <h1 className=" text-white text-center self-center font-semibold border-0 border-l-2 pl-3">POS</h1>
            </div>
            <ul className="flex text-xs text-white justify-between w-10/12">
                <li><p>Help Center</p></li>
                <li><p>Support</p></li>
                <li><p>Legal</p></li>
            </ul>
            <p className="text-gray-500 text-xs">GodDish! and GodDish POS is a registered brandmark of GodDish!<br/>Inc © 2022 </p>
        </div>
    );
}

export default InfoContainer;