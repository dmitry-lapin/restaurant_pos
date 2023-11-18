import React from "react";
import TabInput from "../../../UI/tabInput";
import { userInformation } from "../../../common_data";
import SaveTabsBtn from "../../../UI/SaveChangesTabsBtn";

const Profile = () => {
    return(
        <>
        <div className="flex flex-row space-x-20">
            <div className="flex flex-col w-4/12 space-y-3">
                <div className="flex font-semibold items-start text-lg space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>Personal information</p>
                </div>
                <div className=" space-y-6">
                    <div className="flex flex-row space-x-16">
                        <TabInput name="Name" placeholder={userInformation.generalInfo.firstName + " " + userInformation.generalInfo.secondName}/>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <TabInput name="Email" placeholder={userInformation.generalInfo.email}/>
                        <span className="pl-4 text-red-600 text-xs">Email is not confirmed.</span>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col flex-1 space-y-3">
                <div className="flex font-semibold items-start text-lg space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                    <p>Address</p>
                </div>
                <div className=" space-y-6">
                    <div className="flex flex-row space-x-16">
                        <TabInput name="Country" placeholder={userInformation.generalInfo.country}/>
                        <TabInput name="City / State" placeholder={userInformation.generalInfo.city}/>
                    </div>
                    <div className="flex flex-row space-x-16">
                        <TabInput name="House Address" placeholder={userInformation.generalInfo.address}/>
                    </div>
                </div>
            </div>
        </div>
        <SaveTabsBtn />
        </>
    );
}

export default Profile;