import React, { useState, useEffect, useRef } from "react";
import TextHeader from "../../../../UI/textHeader";

import CategoryBtn from "../../../../UI/CategoryBtn";

import { ref, onValue, off } from "firebase/database";
import { database } from "../../../../firebase_config";

const Categories = () => {
    const scrollContainer = useRef(null);

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const categoriesRef = ref(database, "categories");
        
        onValue(categoriesRef, (snapshot) => {
          const data = snapshot.val();

          if (data) {
            const categoriesArray = Object.values(data);
            setCategories(categoriesArray);
          } else {
            setCategories([]);
          }
        });
    
        return () => {
          off(categoriesRef, "value");
        };

        
        
      }, []);

      const scroll = (direction) => {
        const scrollAmount = 220; // Можно настроить
        if(scrollContainer.current) {
            const scrollLeft = direction === 'left' ? -scrollAmount : scrollAmount;
            scrollContainer.current.scrollBy({ left: scrollLeft, behavior: 'smooth' });
        }
    };
    return(
        <>
            <TextHeader text="Categories" color="text-zinc-950 dark:text-gray-300" categoryTopic={true} size="text-md md:text-lg p-4"/>
            <div className="flex items-center py-1.5 md:py-3 mx-2 px-1.5 md:px-5 bg-zinc-300 dark:bg-zinc-900 rounded-lg">
            <button onClick={() => scroll('left')} className="text-black dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div ref={scrollContainer} className="flex flex-grow overflow-x-scroll rounded-md mx-3 py-2 scrollbar-hide">
                    <div className="flex flex-shrink-0 space-x-3 my-2">
                        {categories.map((category, index) => (
                            <CategoryBtn key={index} name={category.name} image={category.image} />
                        ))}
                    </div>
                </div>
                <button onClick={() => scroll('right')} className="text-black dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
            </div>
        </>
    );
}

export default Categories;
