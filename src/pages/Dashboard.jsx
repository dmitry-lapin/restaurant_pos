import React from 'react';
import Sidebar from "../modules/Sidebar/Sidebar";
import DashboardComponent from '../modules/DashboardComponent/DashboardComponent';

const Dashboard = () => {

    return(
    <div className="flex flex-col md:flex-row h-screen">
        <Sidebar/>
        <DashboardComponent />
  </div>);
};

export default Dashboard;