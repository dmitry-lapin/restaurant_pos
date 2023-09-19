import React from "react";
import CloseButton from '../assets/common_icons/close.png';

const CloseBtn = ({onClick}) => {
    return(
        <button onClick={onClick} className=" border border-zinc-900 text-md font-semibold duration-100 px-4 py-2 rounded-full shadow-md hover:shadow-lg text-black bg-zinc-700 hover:bg-zinc-800">
            <img src={CloseButton} alt="close_btn" className="w-10 h-10"/>
        </button>
    );
}

export default CloseBtn;