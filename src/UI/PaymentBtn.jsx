import React from "react";

const PaymentBtn = ({children, onClick, className=" text-white "}) => {
    return(
        <button className={className + ` basis-1/3 h-11  border text-md border-zinc-900 text-md font-semibold duration-100  px-4 py-2 rounded-full shadow-md hover:shadow-lg`} onClick={onClick}>
        {children}
      </button>
    );
}

export default PaymentBtn;