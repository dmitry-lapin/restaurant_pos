import React from "react";
import CloseBtn from "../../UI/CloseBtn";
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import CommonOrderDetails from "./components/CommonOrderDetails/CommonOrderDetails";
import OrdersFeed from "./components/CommonOrderDetails/OrdersFeed/OrdersFeed";
import TotalPrice from "./components/TotalPrice/TotalPrice";
import PaymentOptions from "./components/PaymentOptions/PaymentOptions";

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { toggleVisibility } from "./slices/OrderDetailsSlice";

const OrderDetails = () => {
    const dispatch = useDispatch();

    const handleCheckoutClick = () => {
        dispatch(toggleVisibility());
    };

    const isVisible = useSelector((state) => state.OrderDetails.isVisible);

    if(!isVisible) {
        return(null);
    }

    return(
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-black bg-opacity-60 absolute inset-0 z-0"></div>
        <div className="bg-black w-full md:w-6/12 lg:w-4/12 xl:w-3/12 absolute right-0 h-full overflow-auto">
            <div className="flex flex-col h-full">
                <ModuleHeaderName bgColor="bg-zinc-900">
                    <TextHeader text="Order details" color="text-white" size="text-lg xl:text-xl"></TextHeader>
                    <CloseBtn onClick={handleCheckoutClick} />
                </ModuleHeaderName>
                <CommonOrderDetails/>
                <OrdersFeed />
                <TotalPrice />
                <PaymentOptions />
            </div>
        </div>
        </div>
    );
}

export default OrderDetails;