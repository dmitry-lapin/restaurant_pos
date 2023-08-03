import React from "react";
import DishOrder from "./components/DishOrder/DishOrder";

const OrdersFeed = () => {
    return (
      <div className="px-3 py-4 bg-zinc-900 rounded-2xl mx-2 basis-4/12">
        <div className="overflow-y-scroll scroll-styling h-96">
            <div className="space-y-3.5 px-3">
            {[1, 2, 3, 4, 5, 6].map((index) => (
                <DishOrder key={index} />
            ))}
            </div>
        </div>
      </div>
    );
  };

export default OrdersFeed;