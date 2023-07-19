import React, { useState } from 'react';
import Sidemenu from './components/Sidemenu/Sidemenu';
import InfoContainer from './components/InfoContainer/InfoContainer';
import MainLogo from '../../UI/MainLogo';
import ModuleHeaderName from '../../UI/ModuleHeaderName';
import MenuTogglerBtn from '../../UI/MenuTogglerBtn';
import MenuWrapper from './components/MenuWrapper/MenuWrapper';
import CheckoutBtn from '../../UI/CheckoutBtn';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  let menuStyling = `flex flex-col md:flex w-full md:flex-col md:h-screen bg-stone-950 md:w-3/12 xl:w-3/12 2xl:w-2/12 md:space-y-3 ${isMenuOpen ? "h-screen space-y-10 absolute top-0 left-0 md:static" : ""}`;

  return (
    <div className={menuStyling}>
      <ModuleHeaderName bgColor="bg-zinc-900">
        <MenuTogglerBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <MainLogo />
        <CheckoutBtn />
      </ModuleHeaderName>
      {isMenuOpen && (
        <MenuWrapper>
          <Sidemenu />
          <InfoContainer />
        </MenuWrapper>
      )}
    </div>
  );
};

export default Sidebar;