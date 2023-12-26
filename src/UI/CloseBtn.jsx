import React from "react";
import CloseButton from '../assets/common_icons/close.png';

const CloseBtn = ({onClick}) => {
    return(
        <button onClick={onClick} className=" text-md duration-100 px-2 md:px-4 py-1 md:py-2 rounded-full hover:shadow-lg bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700">
            <img src={CloseButton} alt="close_btn" className="w-7 h-7 md:w-10 md:h-10"/>
        </button>
    );
}

export default CloseBtn;