import React from "react";

const FeedWrapper = ({children, foodCategory=false}) => {
    let style = "flex flex-col space-y-4 " + (foodCategory ? "overflow-y-scroll scroll-styling" : "");
    return(
        <div className={style}>
            {children}
        </div>
    );
}

export default FeedWrapper;