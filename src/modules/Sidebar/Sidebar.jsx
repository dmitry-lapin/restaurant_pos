import React from 'react';
import Sidemenu from './components/Sidemenu/Sidemenu';
import InfoContainer from './components/InfoContainer/InfoContainer';
import MainLogo from '../../UI/MainLogo';

const Sidebar = () => {
  

  return (
    <div className="flex h-screen bg-black lg:w-2/12 flex-col">
      <MainLogo />
      <Sidemenu />
      <InfoContainer />
    </div>
  );
};

export default Sidebar;