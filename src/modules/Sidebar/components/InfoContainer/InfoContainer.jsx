import React from "react";
import AuthorShipLogo from "../../../../assets/common_icons/authorship.png"

const InfoContainer = () => {
    return(
        <div className="flex flex-col items-center bg-zinc-900 rounded-2xl mx-3 mb-3 mt-3 space-y-3 md:hidden lg:flex">
            
            <div className="bg-zinc-900 w-full px-4 py-3 rounded-2xl text-white font-normal text-sm md:text-xs flex space-x-3 items-center">
                <img className="w-8 h-8" src={AuthorShipLogo} alt="Authorship logo"/>
                <h1>Designed by Lapin Dmytro, design by Ronas IT</h1>
            </div>
        </div>
    );
}

export default InfoContainer;