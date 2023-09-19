import React, { useState } from 'react';

export default function Tabs({tabsData}) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
  
    return (
      <div>
        <div className="flex bg-gray-100">
          {tabsData.map((tab, index) => {
            return (
              <button
                key={index}
                className={`flex flex-1 py-2 border-b-2 transition-colors duration-100 justify-center hover:bg-gray-300 ${
                  index === activeTabIndex
                    ? 'border-gray-400 text-black font-medium bg-gray-300 shadow-lg'
                    : 'border-gray-300 hover:border-transparent text-gray-500 font-normal'
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="">
          <p>{tabsData[activeTabIndex].content}</p>
        </div>
      </div>
    );
  }