import React from "react";

const ModuleHeaderName = ({bgColor, className, children}) => {
    const componentClasses = "flex justify-between w-full h-24 py-4 px-6 flex items-center " + bgColor;

    return(
        <div className={componentClasses}>
            {children}
        </div>
    );
}

export default ModuleHeaderName;