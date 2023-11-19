import React from "react";

const TabWrapper = ({children, name, description}) => {
    return(
        <div className="flex flex-col">
            <div className="">

            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default TabWrapper;