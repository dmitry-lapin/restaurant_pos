import React from "react";

export const PageHeaderName = ({children}) => {
    return(
        <div className="flex justify-between bg-zinc-200 dark:bg-stone-950 px-6 h-24 items-center">
            <p className="text-lg md:text-xl font-bold text-zinc-950 dark:text-gray-300 capitalize">{children}</p>
        </div>
    );
}