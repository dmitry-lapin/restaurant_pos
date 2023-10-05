import React, { useEffect, useState } from "react";
import ProductCard from "../dish_component/Product_card";
import FeedWrapper from "../feed_wrapper/FeedWrapper";
import TextHeader from "../../../../UI/textHeader";
import CategoryFeed from "./Category_feed";
import { useSelector } from "react-redux";
import { database } from "../../../../firebase_config";
import { ref, onValue, off } from "firebase/database";

const SelectedCategory = () => {
  const [dishes, setDishes] = useState({});
  const selectedCategory = useSelector((state) => state.Categories.selectedCategory);

  useEffect(() => {
    const dishesRef = ref(database, "dishes");
    
    onValue(dishesRef, (snapshot) => {
      const data = snapshot.val();
      setDishes(data || {});
    });

    return () => {
      off(dishesRef, "value");
    };
  }, []);

  const filteredDishes = selectedCategory === "All" ? Object.keys(dishes) : [selectedCategory];

  return (
    <>
      <TextHeader text="Selected Category" size="text-md md:text-lg p-4" />
      <div className="mb-4 p-3">
        <FeedWrapper foodCategory={true}>
          {filteredDishes.map((category, index) => (
            <React.Fragment key={index}>
              <TextHeader
                text={category}
                categoryTopic={true}
                size="ml-2 text-md md:text-lg border border-l-4 border-l-blue-500"
              />
              <CategoryFeed
                toWork={dishes[category] ? (
                  dishes[category].map((data, key) => (
                    <ProductCard key={key} dish={data} />
                  ))
                ) : null}
              />
            </React.Fragment>
          ))}
        </FeedWrapper>
      </div>
    </>
  );
};

export default SelectedCategory;
