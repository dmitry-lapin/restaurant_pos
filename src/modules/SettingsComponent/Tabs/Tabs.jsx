import React, { useState } from 'react';

export default function Tabs({tabsData}) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    return (
      <>
        <div className="flex md:w-full lg:w-8/12 xl:w-7/12">
          {tabsData.map((tab, index) => {
            return (
              <button
                key={index}
                className={`flex flex-1 py-2 border-b-2 transition-colors duration-100 justify-center hover:border-sky-600 text-xs md:text-sm lg:text-md ${
                  index === activeTabIndex
                    ? 'border-sky-600 text-black font-medium'
                    : 'border-sky-600 border-opacity-25 hover:border-opacity-75 text-gray-500 font-normal'
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col flex-grow w-10/12 self-start py-8 pl-10">
          {tabsData[activeTabIndex].content}
        </div>
      </>
    );
  }