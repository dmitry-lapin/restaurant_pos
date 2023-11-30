import React from "react";
import { userInformation } from '../../../../common_data';

const UserData = () => {
    
    return (
            <div className="flex w-full justify-normal md:justify-center lg:justify-normal items-center space-x-3 md:space-x-0 lg:space-x-3 rounded-2xl p-2 bg-zinc-300 hover:bg-opacity-75 dark:bg-zinc-900 dark:hover:bg-zinc-800 duration-100">
                <img src={userInformation.image} className="w-14 h-10 rounded-xl " alt="User" />
                <div className="truncate block md:hidden lg:block">
                    <p className="text-zinc-950 dark:text-gray-300 font-semibold text-md xl:text-lg">{userInformation.name}</p>
                    <p className="text-zinc-950 dark:text-gray-300 font-normal truncate text-sm xl:text-normal">{userInformation.position}</p>
                </div>
            </div>
    );
}

export default UserData;