import React from "react";
import AddReduceBtn from "../../../../UI/AddReduceBtn";

const ProductCard = ({ dish }) => {
    return (
      <div className="flex flex-col border bg-zinc-100 rounded-2xl shadow-md hover:shadow-xl duration-100 w-44 md:w-52">
        <div>
          <img src={dish.image} alt="Product" className="w-full h-32 md:h-40 rounded-t-2xl" />
        </div>
        <div className="flex flex-col justify-between px-2 my-2 md:px-3 md:py-4 h-full">
          <p className="text-sm md:text-md font-semibold">{dish.name}</p>
          <p className="text-gray-500 text-xs md:text-sm">{dish.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-md font-semibold">$ {dish.price}</p>
            <AddReduceBtn action="+" bgColor="bg-white"/>
          </div>
        </div>
      </div>
    );
  };
  

export default ProductCard;