import React from 'react';
import Sidemenu from './components/Sidemenu/Sidemenu';
import InfoContainer from './components/InfoContainer/InfoContainer';
import MainLogo from '../../UI/MainLogo';
import ModuleHeaderName from '../../UI/ModuleHeaderName';

const Sidebar = () => {
  
  return (
    <div className="flex h-screen bg-black lg:w-2/12 flex-col">
      <ModuleHeaderName bgColor="bg-zinc-900">
        <MainLogo />
      </ModuleHeaderName>
      <Sidemenu />
      <InfoContainer />
    </div>
  );
};

export default Sidebar;