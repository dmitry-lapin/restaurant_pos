import React, { useState } from "react";
import { PageHeaderName } from "../../UI/PageHeaderName";
import TextHeader from "../../UI/textHeader";
import General from "./TabsContent/GeneralTab";
import Profile from "./TabsContent/ProfileTab";
import Security from "./TabsContent/SecurityTab";
import Notifications from "./TabsContent/NotificationsTab";

import BtnCategoryWrapper from "./BtnWrapper/BtnCategoryWrapper"; //Wrapper for setting category button.
import TabWrapper from "./TabsContent/TabWrapper";

const SettingsComponent = () => {
    const [activeCategory, setActiveCategory] = useState(null);

  const openCategory = (category) => {
    setActiveCategory(category);
  };

  const goBack = () => {
    setActiveCategory(null);
  };

  const categories = [
    {
        category: 'general',
        icon: 
          (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        </svg>
        
        
        
        ),
        description: 'View your general details',
    },
    {
      category: 'account',
      icon: 
        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
         </svg>),
      description: 'View your profile',
    },
    {
      category: 'notifications',
      icon: 
        (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
          <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clipRule="evenodd" />
        </svg>
      ),
      description: 'View your notifications settings',
    },
    {
        category: 'security',
        icon: 
            (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
             </svg>),
        description: 'View your security rules',
    },
  ];

    return(
        <div className="flex flex-1 flex-col bg-zinc-100 dark:bg-zinc-800">
            <PageHeaderName>
              Settings
            </PageHeaderName>

            <div className="self-center flex-1 py-5 md:py-10 w-10/12">
                {!activeCategory && (
                

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {categories.map(({ category, icon, description }) => (
                        <BtnCategoryWrapper
                            key={category}
                            category={category}
                            icon={icon}
                            description={description}
                            onClick={openCategory}
                        />
                    ))}
                </div>
                )}
            { activeCategory &&
             <div className="flex items-center space-x-5 mb-6 md:mb-10 text-zinc-950 dark:text-gray-300">
              <button className="hover:bg-zinc-300 dark:hover:bg-zinc-900 duration-100 p-1 rounded-xl " onClick={goBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                </svg>
              </button>
              <p className="capitalize font-semibold text-lg md:text-xl">{activeCategory}</p>
             </div> }
            { activeCategory === 'general' && <TabWrapper><General /></TabWrapper> }
            { activeCategory === 'account' && <TabWrapper><Profile /></TabWrapper> }
            { activeCategory === 'security' && <TabWrapper><Security /></TabWrapper> }
            { activeCategory === 'notifications' && <TabWrapper><Notifications /></TabWrapper> }
            </div>
        </div>
    );
}

export default SettingsComponent;