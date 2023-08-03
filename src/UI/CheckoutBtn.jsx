import React from "react";
import CheckoutImg from "../assets/common_icons/checkout.png"

import { useDispatch } from 'react-redux';
import { toggleVisibility } from "../modules/Order_details/slices/OrderDetailsSlice";

const CheckoutBtn = ({displayOnBig, bgColor="hover:bg-zinc-800"}) => {
    const dispatch = useDispatch();

    const handleCheckoutClick = () => {
        dispatch(toggleVisibility());
    };

    let styling = "duration-100 p-2 rounded cursor-pointer" + (displayOnBig ? " hidden md:block " : "block md:hidden ") + bgColor;
    return(
        <div className={styling} onClick={handleCheckoutClick} >
            <img className="w-10 h-10" src={CheckoutImg} alt="Checkout"/>
        </div>
    );
}

export default CheckoutBtn;