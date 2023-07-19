import React from "react";
import CheckoutImg from "../assets/common_icons/checkout.png"

const CheckoutBtn = () => {
    return(
        <div className="hover:bg-zinc-800 duration-100 p-2 rounded cursor-pointer md:hidden">
            <img className="w-10 h-10" src={CheckoutImg} alt="Checkout image"/>
        </div>
    );
}

export default CheckoutBtn;