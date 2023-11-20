import React from "react";

const TabWrapper = ({children, name, description}) => {
    return(
        <div className="flex flex-col">
            <div className="">
                <p className="text-zinc-600">{description}</p>
            </div>
                {children}
        </div>
    );
}

export default TabWrapper;