import React from "react";
import DishOrder from "./components/DishOrder/DishOrder";
import { useSelector} from 'react-redux';
import emptyCart from "../../../../../assets/common_icons/nothing_in_cart.gif"

const OrdersFeed = () => {
  const dishes = useSelector((state) => state.OrdersFeed.SelectedDishes);

    return (
      <div className="px-3 py-4 bg-zinc-900 rounded-2xl mx-2 basis-4/12">
        <div className="overflow-y-scroll scroll-styling h-96">
            <div className="space-y-3.5 px-3 h-full">
            {dishes.length === 0 ? (
              <div className="flex flex-col justify-center items-center h-full space-y-4">
                <img src={emptyCart} className="w-64 h-64" alt="Logo" />
                <p className="text-white text-xl font-semibold underline underline-offset-3 decoration-2 decoration-green-500">Your cart is empty!</p>
              </div>
            ) : (
              dishes.map((dish, index) => (
                <DishOrder key={index} dish={dish} />
              ))
            )}
            </div>
        </div>
      </div>
    );
  };

export default OrdersFeed;