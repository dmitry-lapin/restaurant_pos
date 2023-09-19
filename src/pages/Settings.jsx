import React from 'react';
import Sidebar from "../modules/Sidebar/Sidebar";
import SettingsComponent from '../modules/SettingsComponent/SettingsComponent';

const Settings = () => {
    return(
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar/>
            <SettingsComponent />
      </div>
    );
};

export default Settings;