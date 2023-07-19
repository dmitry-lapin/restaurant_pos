import React from "react";
import NormalBtn from "../../UI/normalBtn";
import trashImg from "../../assets/icons/delete.png"
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import CommonOrderDetails from "./components/CommonOrderDetails/CommonOrderDetails";
import OrdersFeed from "./components/CommonOrderDetails/OrdersFeed/OrdersFeed";
import TotalPrice from "./components/TotalPrice/TotalPrice";
import PaymentOptions from "./components/PaymentOptions/PaymentOptions";

const OrderDetails = () => {
    return(
        <div className="bg-black lg:w-4/12">
            <div className="flex flex-col h-full">
                <ModuleHeaderName bgColor="bg-zinc-900">
                    <TextHeader text="Order details" color="text-white" size="text-xl"></TextHeader>
                    <NormalBtn><img className="w-8 h-8" src={trashImg} alt="deleteOrder" /></NormalBtn>
                </ModuleHeaderName>
                <CommonOrderDetails/>
                <OrdersFeed />
                <TotalPrice />
                <PaymentOptions />
            </div>
        </div>
    );
}

export default OrderDetails;