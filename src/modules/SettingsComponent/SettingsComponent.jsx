import React, { useState } from "react";
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import { userInformation } from "../../common_data";
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

  const categories = ['profile', 'notifications', 'email'];

    return(
        <div className="flex flex-1 flex-col bg-gray-200">
            <ModuleHeaderName bgColor="bg-white">
                <TextHeader text="Settings" color="text-black" size="text-xl" />
            </ModuleHeaderName>

            <div className="self-center flex-1 py-10 w-10/12">
                {!activeCategory && (

                <div className="space-x-6">
                    {categories.map((category) => (
                        <BtnCategoryWrapper key={category} category={category} onClick={openCategory} />
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