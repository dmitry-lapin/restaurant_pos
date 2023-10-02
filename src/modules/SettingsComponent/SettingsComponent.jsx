import React from "react";
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import Tabs from "./Tabs/Tabs";
import { userInformation } from "../../common_data";
import General from "./TabsContent.jsx/GeneralTab";
import Profile from "./TabsContent.jsx/ProfileTab";
import Security from "./TabsContent.jsx/SecurityTab";
import Email from "./TabsContent.jsx/EmailTab";

const SettingsComponent = () => {
    const tabs = [
        { label: 'General', content: <General /> },
        { label: 'Profile', content: <Profile /> },
        { label: 'Security', content: <Security /> },
        { label: 'Team', content: 'Содержимое вкладки 3' },
        { label: 'Email', content: <Email /> },
        { label: 'Notifications', content: 'Содержимое вкладки 3' },
      ];

    return(
        <div className="flex flex-1 flex-col bg-gray-200">
            <ModuleHeaderName bgColor="bg-white">
                <TextHeader text="Settings" color="text-black" size="text-xl" />
            </ModuleHeaderName>
            <div className="p-4 flex flex-col flex-grow">
                <div className="relative w-full flex items-end h-52 bg-gradient-to-r from-sky-600 to-gray-200">
                    <div className="absolute -bottom-20 flex flex-row ml-8 w-fit rounded-full space-x-3">
                        <div className="w-36 p-1 rounded-full bg-gray-200"><img className="rounded-full" src={userInformation.image} alt="user_image"/></div>
                        <div className="flex flex-col justify-end pb-2">
                            <p className="text-2xl font-bold">{userInformation.name}</p>
                            <p className="text-lg font-medium">{userInformation.position}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-28 flex flex-col flex-grow">
                    <Tabs tabsData={tabs}/>
                </div>
            </div>
        </div>
    );
}

export default SettingsComponent;