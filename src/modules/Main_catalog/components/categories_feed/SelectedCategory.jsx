import React from "react";
import ProductCard from "../dish_component/Product_card";
import FeedWrapper from "../feed_wrapper/FeedWrapper";
import { productData } from "../../../../common_data";
import TextHeader from "../../../../UI/textHeader";
import CategoryFeed from "./Category_feed";

import { useSelector} from 'react-redux';

const SelectedCategory = () => {
    const selectedCategory = useSelector((state) => state.Categories.selectedCategory);
    const filteredDishes = selectedCategory === 'All' ? Object.keys(productData) : [selectedCategory];
  
    return (
      <FeedWrapper foodCategory={true}>
        {filteredDishes.map((category, index) => (
          <React.Fragment key={index}>
            <TextHeader text={category} categoryTopic={true} size="text-md md:text-lg" />
            <CategoryFeed toWork={productData[category].map((data, key) => <ProductCard key={key} dish={data} />)} />
          </React.Fragment>
        ))}
      </FeedWrapper>
    );
  };

export default SelectedCategory;