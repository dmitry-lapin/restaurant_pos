import React from 'react';
import Sidebar from '../modules/Sidebar/Sidebar';
import TeamComponent from '../modules/TeamComponent/TeamComponent';

const TeamPage = () => {
    return(
        <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
            <TeamComponent />
        </div>
    );
};

export default TeamPage;