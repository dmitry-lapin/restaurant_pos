import React from "react";

const PaymentBtn = ({children, onClick, className}) => {
    return(
        <button className={className + ` text-md font-semibold duration-100 px-4 py-2 rounded-full`} onClick={onClick}>
        {children}
      </button>
    );
}

export default PaymentBtn;