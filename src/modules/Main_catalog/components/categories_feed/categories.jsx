import React, { useState, useEffect } from "react";
import TextHeader from "../../../../UI/textHeader";
import CategoryFeed from "./Category_feed";
import FeedWrapper from "../feed_wrapper/FeedWrapper";
import CategoryBtn from "../../../../UI/CategoryBtn";

import { ref, onValue, off } from "firebase/database";
import { database } from "../../../../firebase_config";

const Categories = () => {
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

    return(
        <FeedWrapper>
            <TextHeader text="Categories" color="text-zinc-950 dark:text-gray-300" categoryTopic={true} size="text-md md:text-lg pt-4"/>
            <CategoryFeed toWork={
                categories.map((category, index) => (
                    <CategoryBtn key={index} name={category.name} image={category.image} />
                ))
            }/>
        </FeedWrapper>
    );
}

export default Categories;
