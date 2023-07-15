import React from "react";

const MenuItem = ({children, image}) => {
    return(
        <div className="flex flex-row items-center space-x-3">
            <img className="w-7 h-7" src={image}></img>
            {children}
        </div>
    );
}

export default MenuItem;