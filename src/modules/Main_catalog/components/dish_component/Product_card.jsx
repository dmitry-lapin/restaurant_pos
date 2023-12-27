import React from "react";
import AddReduceBtn from "../../../../UI/AddReduceBtn";
import { useDispatch } from "react-redux";
import { addDishToOrder } from "../../../Order_details/slices/OrdersFeedSlice";

import toast, { Toaster } from "react-hot-toast";
import Toast from "../../../../UI/Toast";

const ProductCard = ({ dish }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addDishToOrder(dish));
    toast.custom(<Toast type="dish"/>,{
      duration: 1000,
      position: 'bottom-center',
    });
  }

  return (
    <div className="flex flex-col space-y-3">
      <div className="relative flex items-center h-40 overflow-hidden rounded-2xl">
        <span className="absolute bg-blur backdrop-filter bg-white/50 backdrop-blur-sm rounded-full px-3.5 py-1.5 bottom-4 left-4 text-black font-medium">Available</span>
        <img src={dish.image} alt="Product" className="w-full h-full" />
      </div>
      <div className="flex flex-col text-zinc-950 dark:text-gray-300 px-1 space-y-1">
        <p className="text-sm md:text-base font-semibold">{dish.name}</p>
        <p className="text-gray-500 dark:text-zinc-400 text-xs md:text-sm">{dish.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">$ {dish.price}</p>
          <AddReduceBtn action="+" bgColor="bg-zinc-200 dark:bg-zinc-700" onClick={handleAddToCart}/>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
  
export default ProductCard;