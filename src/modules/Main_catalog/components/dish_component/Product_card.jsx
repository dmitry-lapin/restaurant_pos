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
    <div className="flex flex-col border dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md hover:shadow-xl duration-100 w-44 md:w-52">
      <div>
        <img src={dish.image} alt="Product" className="w-full h-32 md:h-40 rounded-t-2xl" />
      </div>
      <div className="flex flex-col justify-between px-2 mb-2 mt-2 md:mt-0 md:px-3 md:py-4 h-full text-zinc-950 dark:text-gray-300">
        <p className="text-sm md:text-md font-semibold mb-2">{dish.name}</p>
        <p className="text-gray-500 dark:text-zinc-400 text-xs md:text-sm">{dish.description}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-md font-semibold">$ {dish.price}</p>
          <AddReduceBtn action="+" bgColor="bg-zinc-200 dark:bg-zinc-700" onClick={handleAddToCart}/>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
  
export default ProductCard;