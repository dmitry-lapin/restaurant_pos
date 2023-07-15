import React from "react";
import TextHeader from "../../../../UI/textHeader";
import CategoryFeed from "./Category_feed";
import FeedWrapper from "../feed_wrapper/FeedWrapper";
import CategoryBtn from "../../../../UI/CategoryBtn";
import { categoriesData } from "../../../../common_data";

const Categories = () => {
    
    return(
        <FeedWrapper>
            <TextHeader text="Categories" color="text-black" categoryTopic={true}/>
            <CategoryFeed toWork={
                categoriesData.map((category, index) => (
                    <CategoryBtn key={index} name={category.name} image={category.image} />
                ))
            }/>
        </FeedWrapper>
    );
}

export default Categories;