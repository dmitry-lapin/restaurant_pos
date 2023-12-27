import React from "react";
import CloseButton from '../assets/common_icons/close.png';

const CloseBtn = ({onClick}) => {
    return(
        <button onClick={onClick} className="">
            <img src={CloseButton} alt="close_btn" className="w-7 h-7 md:w-10 md:h-10"/>
        </button>
    );
}

export default CloseBtn;