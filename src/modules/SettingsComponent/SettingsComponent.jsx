import React from "react";
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import Tabs from "./Tabs/Tabs";
import TabsWrapper from "./Tabs/TabsWrapper";

const SettingsComponent = () => {
    const tabs = [
        { label: 'General', content: 'Содержимое вкладки 1' },
        { label: 'Profile', content: 'Содержимое вкладки 2' },
        { label: 'Password', content: 'Содержимое вкладки 3' },
        { label: 'Team', content: 'Содержимое вкладки 3' },
        { label: 'Email', content: 'Содержимое вкладки 3' },
        { label: 'Notifications', content: 'Содержимое вкладки 3' },
      ];

    return(
        <div className="flex flex-1 flex-col bg-gray-200">
            <ModuleHeaderName bgColor="bg-white">
                <TextHeader text="Settings" color="text-black" size="text-xl" />
            </ModuleHeaderName>
            <div className="p-4 flex flex-col flex-grow">
                <Tabs tabsData={tabs}/>
            </div>
        </div>
    );
}

export default SettingsComponent;