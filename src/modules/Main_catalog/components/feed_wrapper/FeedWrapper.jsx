import React from "react";

const FeedWrapper = ({ children, foodCategory = false }) => {
    let style = "flex flex-col space-y-4";
    style += foodCategory ? " overflow-y-auto scroll-styling max-h-[50vh] md:max-h-[60vh] " : " overflow-y-auto";
  
    return <div className={style}>{children}</div>;
  };
  

export default FeedWrapper;