import React from "react";

const MenuWrapper = ({ children }) => {
    return(
        <div className="flex flex-col h-full">
            {children}
        </div>
    );
}

export default MenuWrapper;