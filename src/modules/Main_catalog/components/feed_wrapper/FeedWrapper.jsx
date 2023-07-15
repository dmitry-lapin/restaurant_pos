import React from "react";

const FeedWrapper = ({children}) => {
    return(
        <div className="flex flex-col space-y-4">
            {children}
        </div>
    );
}

export default FeedWrapper;