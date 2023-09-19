import React from "react";
import FeedScrollWrapper from "../feed_scroll_wrapper/feed_scroll_wrapper";

const CategoryFeed = ({toWork}) => {
    return(
        <FeedScrollWrapper>
            {toWork}
        </FeedScrollWrapper>
    );
}

export default CategoryFeed;