import React, { useState, useEffect } from 'react';
import Sidemenu from './components/Sidemenu/Sidemenu';
import InfoContainer from './components/InfoContainer/InfoContainer';
import MainLogo from '../../UI/MainLogo';
import ModuleHeaderName from '../../UI/ModuleHeaderName';
import MenuTogglerBtn from '../../UI/MenuTogglerBtn';
import MenuWrapper from './components/MenuWrapper/MenuWrapper';
import CheckoutBtn from '../../UI/CheckoutBtn';
import UserData from './components/userData/userData';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';

import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  let menuStyling = `flex flex-col md:flex w-full md:flex-col md:h-screen bg-zinc-200 dark:bg-stone-950 md:w-fit lg:w-3/12 md:space-y-3 border-r border-r-1 dark:border-zinc-950 border-zinc-300 ${isMenuOpen ? "h-screen space-y-10 absolute top-0 left-0 md:static z-10 " : ""}`;

  return (
    <div className={menuStyling}>
      <ModuleHeaderName bgColor="bg-zinc-400 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 duration-100">
        <MenuTogglerBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <MainLogo />
        {location.pathname === '/food_catalog' && <CheckoutBtn displayOnBig={false} />}
      </ModuleHeaderName>
      {isMenuOpen && (
        <MenuWrapper>
          <Sidemenu />
          <div>
            <div className="flex mx-3 space-x-3">
              <UserData />
              <ThemeToggler />
            </div>
            <InfoContainer />
          </div>
        </MenuWrapper>
      )}
    </div>
  );
};

export default Sidebar;