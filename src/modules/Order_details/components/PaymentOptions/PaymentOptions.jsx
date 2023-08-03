import React from "react";
import NormalBtn from "../../../../UI/normalBtn";

const PaymentOptions = () => {
    return(
        <div className="flex flex-col bg-zinc-900 h-fit mb-2 mx-2 rounded-2xl p-4 space-y-4 basis-2/12">
            <div className="flex flex-row space-x-3">
                {["Cash", "Debit", "Crypto"].map((value, index) => (
                    <NormalBtn key={index} color="text-white" bgColor="bg-zinc-800" hoverBg="hover:bg-zinc-700" className="basis-1/3 h-11">{value}</NormalBtn>
                ))}
            </div>
            <hr className="border border-zinc-500"/>
            <button className="text-black bg-slate-100 hover:bg-slate-200 duration-100 rounded-2xl font-semibold text-2xl h-16">Place order</button>
        </div>
    );
}

export default PaymentOptions;