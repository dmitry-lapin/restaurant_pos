import React from "react";
import userImage from "../../../../assets/common_images/userImage.png"

const UserData = () => {
    const userInformation = {
        name: "Homer Simpson",
        position: "waiter"
    }

    return (
        <div className="flex justify-between lg:justify-between md:justify-center bg-zinc-900 hover:bg-zinc-800 border-2 border-transparent hover:border-2 hover:border-zinc-900 mx-3 rounded-2xl duration-100 p-2 cursor-pointer mb-0 md:mb-3 lg:mb-0">
            <div className="flex space-x-3">
                <img src={userImage} className="w-14 h-fit rounded-xl self-center" alt="User" />
                <div className=" truncate block md:hidden lg:block">
                    <p className="text-white font-semibold text-md xl:text-lg">{userInformation.name}</p>
                    <p className="text-gray-300 font-normal truncate text-sm xl:text-normal">{userInformation.position}</p>
                </div>
            </div>
            <div className="block md:hidden lg:block self-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="md:h-8 md:w-8 xl:h-10 xl:w-10 text-white hover:text-red-500 duration-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </div>
        </div>
    );
}

export default UserData;