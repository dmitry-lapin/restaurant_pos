import React, { useState } from "react";
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import General from "./TabsContent/GeneralTab";
import Profile from "./TabsContent/ProfileTab";
import Security from "./TabsContent/SecurityTab";
import Email from "./TabsContent/EmailTab";

import BtnCategoryWrapper from "./BtnWrapper/BtnCategoryWrapper"; //Wrapper for setting category button.

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
          (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>),
        description: 'View your general details',
    },
    {
      category: 'profile',
      icon: 
        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>),
      description: 'View your profile',
    },
    {
      category: 'email',
      icon: 
        (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>),
      description: 'View your notifications settings',
    },
    {
        category: 'security',
        icon: 
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>),
        description: 'View your security rules',
    },
  ];

    return(
        <div className="flex flex-1 flex-col bg-gray-200">
            <ModuleHeaderName bgColor="bg-white">
                <TextHeader text="Settings" color="text-black" size="text-xl" />
            </ModuleHeaderName>

            <div className="self-center flex-1 py-10 w-10/12">
                {!activeCategory && (

                <div className="grid grid-cols-3 gap-5">
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

            { activeCategory === 'profile' && <Profile /> }
            { activeCategory === 'notifications' && <Security /> }
            { activeCategory === 'email' && <Email /> }

            { activeCategory && <button onClick={goBack}>Back</button> }
            </div>
        </div>
    );
}

export default SettingsComponent;