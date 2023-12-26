import React from "react";

export const PageHeaderName = ({children}) => {
    return(
        <div className="flex justify-between w-full bg-zinc-200 dark:bg-stone-950 px-6 py-9">
            <p className="text-lg md:text-xl font-bold text-zinc-950 dark:text-gray-300 capitalize">{children}</p>
        </div>
    );
}