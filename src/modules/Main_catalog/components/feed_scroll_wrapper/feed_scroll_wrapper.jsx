import React from "react";


const FeedScrollWrapper = ({children}) => {
    return(
            <div className="py-3 px-5 bg-white rounded-lg mx-2">
                <div className="flex rounded-md overflow-x-scroll scroll-styling scroll-smooth px-3 py-2">
                    <div className="flex flex-shrink-0 space-x-3 my-2">
                        {children}
                    </div>
                </div>
        </div>
    );
}

export default FeedScrollWrapper;