import React from "react";

const  TabWrapper = ({children}) => {
    return(
        <div className="flex flex-col">
                {children}
        </div>
    );
}

export default TabWrapper;