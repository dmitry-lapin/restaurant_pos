import React from "react";
import TabInput from "../../../UI/tabInput";
import { userInformation } from "../../../common_data";

const Profile = () => {
    return(
        <div className="flex flex-col flex-1 space-y-10">
            <div className="flex flex-row">
                <div className="flex font-semibold w-4/12 items-start text-lg space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p>Personal information</p>
                </div>
                <div className="w-8/12 space-y-6">
                    <div className="flex flex-row space-x-16">
                        <TabInput name="First name" placeholder={userInformation.generalInfo.firstName}/>
                        <TabInput name="Last name" placeholder={userInformation.generalInfo.secondName}/>
                    </div>
                    <div className="flex flex-row space-x-16">
                        <TabInput name="Email" placeholder={userInformation.generalInfo.email}/>
                        <div className="flex flex-row flex-1 space-x-2 items-end">
                            <button className="space-x-1 border border-zinc-400 flex px-3 py-2.5 rounded-lg font-medium text-zinc-600 hover:bg-zinc-400 hover:shadow-lg duration-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <p>Verify</p>
                            </button>
                            <span className="border border-red-500 flex px-3 py-2.5 rounded-lg font-medium text-red-500 space-x-1 text-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>Email not verified</p>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="flex flex-row">
                <div className="flex font-semibold w-4/12 items-start text-lg space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                    <p>Address</p>
                </div>
                <div className="w-8/12 space-y-6">
                    <div className="flex flex-row space-x-16">
                        <TabInput name="Country" placeholder={userInformation.generalInfo.country}/>
                        <TabInput name="City/State" placeholder={userInformation.generalInfo.city}/>
                    </div>
                    <div className="flex flex-row space-x-16">
                        <TabInput name="House Address" placeholder={userInformation.generalInfo.address}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Profile;