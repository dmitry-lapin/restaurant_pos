import React from "react";
import FeedScrollWrapper from "../feed_scroll_wrapper/feed_scroll_wrapper";

const CategoryFeed = ({toWork, scroll=true}) => {
    return(
        <FeedScrollWrapper scroll={scroll}>
            {toWork}
        </FeedScrollWrapper>
    );
}

export default CategoryFeed;