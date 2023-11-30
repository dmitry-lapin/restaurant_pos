import React, { useContext } from "react";


const FeedScrollWrapper = ({children, scroll=true}) => {
    
    return(
            <div className="py-1.5 md:py-3 px-2 md:px-5 bg-zinc-300 dark:bg-zinc-900 rounded-lg mx-2">
                <div className={`flex rounded-md px-3 py-2 ` +  (scroll ? ` overflow-x-scroll scroll-styling scroll-smooth ` : `  `) }>
                    <div className="flex flex-shrink-0 space-x-3 my-2">
                        {children}
                    </div>
                </div>
        </div>
    );
}

export default FeedScrollWrapper;