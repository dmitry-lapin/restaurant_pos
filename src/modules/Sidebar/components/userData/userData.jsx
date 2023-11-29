import React from "react";
import { userInformation } from '../../../../common_data';

const UserData = () => {
    
    return (
        <div className="flex-1 bg-zinc-900 hover:bg-zinc-800 rounded-2xl duration-100 py-2 pl-2 pr-4">
            <div className="flex space-x-3">
                <img src={userInformation.image} className="w-14 h-fit rounded-xl self-center" alt="User" />
                <div className=" truncate block md:hidden lg:block">
                    <p className="text-white font-semibold text-md xl:text-lg">{userInformation.name}</p>
                    <p className="text-gray-300 font-normal truncate text-sm xl:text-normal">{userInformation.position}</p>
                </div>
            </div>
        </div>
    );
}

export default UserData;