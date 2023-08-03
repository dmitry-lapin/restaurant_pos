import React from "react";

const MenuItem = ({children, image}) => {
    return(
        <div className="flex flex-row items-center space-x-3">
            <img className="w-7 h-7 md:h-9 md:w-9 lg:w-7 lg:h-7" src={image}></img>
            {children}
        </div>
    );
}

export default MenuItem;