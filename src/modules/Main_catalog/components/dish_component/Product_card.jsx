import React from "react";
import AddReduceBtn from "../../../../UI/AddReduceBtn";
import { useDispatch } from "react-redux";
import { addDishToOrder } from "../../../Order_details/slices/OrdersFeedSlice";
import NotificationImage from "../../../../assets/common_icons/success_notification.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ dish }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addDishToOrder(dish));
    const toastContent = (
      <div className="flex space-x-2">
        <img src={NotificationImage} alt="Notification" className="w-12 h-12"/>
        <p>
          {dish.name} was added to cart.
        </p>
      </div>
    );
  
    toast(toastContent, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="flex flex-col border bg-zinc-100 rounded-2xl shadow-md hover:shadow-xl duration-100 w-44 md:w-52">
      <div>
        <img src={dish.image} alt="Product" className="w-full h-32 md:h-40 rounded-t-2xl" />
      </div>
      <div className="flex flex-col justify-between px-2 mb-2 mt-2 md:mt-0 md:px-3 md:py-4 h-full">
        <p className="text-sm md:text-md font-semibold mb-2">{dish.name}</p>
        <p className="text-gray-500 text-xs md:text-sm">{dish.description}</p>
        <div className="flex items-center justify-between mt-3">
          <p className="text-md font-semibold">$ {dish.price}</p>
          <AddReduceBtn action="+" bgColor="bg-white" onClick={handleAddToCart}/>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
  
export default ProductCard;