import React from "react";

const ModuleHeaderName = ({bgColor, children}) => {
    const componentClasses = "flex justify-between h-24 px-6 flex items-center " + bgColor;

    return(
        <div className={componentClasses}>
            {children}
        </div>
    );
}

export default ModuleHeaderName;