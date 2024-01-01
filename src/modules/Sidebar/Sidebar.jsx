import React, { useState, useEffect } from 'react';
import Sidemenu from './components/Sidemenu/Sidemenu';
import InfoContainer from './components/InfoContainer/InfoContainer';
import MainLogo from '../../UI/MainLogo';
import MenuTogglerBtn from '../../UI/MenuTogglerBtn';
import MenuWrapper from './components/MenuWrapper/MenuWrapper';
import CheckoutBtn from '../../UI/CheckoutBtn';
import UserData from './components/userData/userData';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';

import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const location = useLocation();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  let menuStyling = `flex flex-col md:flex w-full md:flex-col md:h-screen bg-zinc-200 dark:bg-stone-950 md:w-fit lg:w-3/12 md:space-y-3 md:border-r md:border-r-1 dark:border-zinc-950 border-zinc-300 ${isMenuOpen ? "h-full absolute top-0 left-0 md:sticky z-10 " : ""}`;

  return (
    <div className={menuStyling}>
      <div className="flex items-center py-3 md:py-0 px-5 md:px-0 md:block bg-zinc-300 dark:bg-zinc-900">
        <MenuTogglerBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className='flex justify-between md:justify-normal md:block w-full'><MainLogo />
        {location.pathname === '/food_catalog' && <CheckoutBtn displayOnBig={false} />}
        </div>
      </div>
      {isMenuOpen && (
        <MenuWrapper>
          <Sidemenu />
          <div>
            <div className="flex flex-row md:flex-col lg:flex-row mx-3 space-x-3 md:space-x-0 lg:space-x-3 space-y-0 md:space-y-3 lg:space-y-0 mb-3 lg:mb-0">
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