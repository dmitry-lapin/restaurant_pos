import React from "react";
import TextHeader from "../../UI/textHeader";

const TeamComponent = () => {
    return(
        <div className="flex flex-1 flex-col bg-zinc-100 dark:bg-zinc-800">
            <div className='sticky bg-opacity-90 top-0 flex justify-between items-center py-3 md:h-24 px-5 bg-zinc-200 dark:bg-stone-950'>
                <TextHeader text="Team" color="text-zinc-950 dark:text-gray-300" size="text-sm md:text-xl" />
            </div>
            <div className="p-5">
                
            </div>
        </div>
    );
}

export default TeamComponent;