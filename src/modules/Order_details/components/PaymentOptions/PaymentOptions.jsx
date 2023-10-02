import React from "react";
import PaymentBtn from "../../../../UI/PaymentBtn";
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../slices/toggleModalSlice';
import { toggleVisibility } from "../../slices/OrderDetailsSlice";
import { setPaymentMethod } from "../../slices/OrderInformation";

const PaymentOptions = () => {
    const dispatch = useDispatch();
    const selectedPaymentMethod = useSelector(state => state.OrderTotal.paymentMethod);
    let isFeedEmpty = useSelector(state => state.OrdersFeed.SelectedDishes);
    let isTableSelected = useSelector(state => state.OrderTotal.table)
    isFeedEmpty = isFeedEmpty.length;

    const handleToggleModal = () => {
        dispatch(toggleModal());
        dispatch(toggleVisibility());
    }

    const handlePaymentMethod = (value) => {
        dispatch(setPaymentMethod(value));
    }

    return (
        <div className="flex flex-col bg-zinc-900 h-fit mb-2 mx-2 rounded-2xl p-4 space-y-4 basis-2/12">
            <div className="flex flex-row space-x-3">
                {["Cash", "Debit", "Crypto"].map((value, index) => (
                    <PaymentBtn
                        key={index}
                        onClick={() => handlePaymentMethod(value)}
                        className={`${
                            selectedPaymentMethod === value ? 'bg-white hover:bg-white text-zinc-900 ' : 'bg-zinc-800 hover:bg-zinc-700'
                        } text-white basis-1/3 h-11`}
                    >
                        {value}
                    </PaymentBtn>
                ))}
            </div>
            <hr className="border border-zinc-500"/>
            <button
                onClick={handleToggleModal}
                className={`text-black bg-slate-100 hover:bg-slate-200 duration-100 rounded-2xl font-semibold text-2xl h-16 ${
                    isFeedEmpty === 0 || isTableSelected == null ? 'disabled:opacity-50 disabled:pointer-events-none' : ''
                    }`}
                disabled={isFeedEmpty === 0 || isTableSelected == null}
            >
                <p>Place order</p>
            </button>
        </div>
    );
}

export default PaymentOptions;