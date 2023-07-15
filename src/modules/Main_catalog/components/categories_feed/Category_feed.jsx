import React from "react";
import { categoriesData } from "../../../../common_data";
import CategoryBtn from "../../../../UI/CategoryBtn";
import FeedScrollWrapper from "../feed_scroll_wrapper/feed_scroll_wrapper";

const CategoryFeed = ({toWork}) => {
    return(
        <FeedScrollWrapper>
            {toWork}
        </FeedScrollWrapper>
    );
}

export default CategoryFeed;