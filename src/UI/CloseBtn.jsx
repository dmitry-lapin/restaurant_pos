import React from "react";
import CloseButton from '../assets/common_icons/close.png';

const CloseBtn = ({onClick}) => {
    return(
        <button onClick={onClick} className=" text-md duration-100 px-4 py-2 rounded-full hover:shadow-lg bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700">
            <img src={CloseButton} alt="close_btn" className="w-10 h-10"/>
        </button>
    );
}

export default CloseBtn;