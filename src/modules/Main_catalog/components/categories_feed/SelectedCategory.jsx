import React from "react";
import ProductCard from "../dish_component/Product_card";
import FeedWrapper from "../feed_wrapper/FeedWrapper";
import { productData } from "../../../../common_data";
import TextHeader from "../../../../UI/textHeader";
import CategoryFeed from "./Category_feed";

const SelectedCategory = () => {
    return(
        <FeedWrapper>
            <TextHeader text="Selected Category" categoryTopic={true}/>
            <CategoryFeed toWork={
                Object.entries(productData).map(([key, data]) => (
                    <ProductCard key={key} dish={data} />
                ))
            }/>
        </FeedWrapper>
    );
}

export default SelectedCategory;