import React from "react";
import Sidebar from "../modules/Sidebar/Sidebar";
import Catalog from "../modules/Main_catalog/catalog";
import OrderDetails from "../modules/Order_details/OrderDetails";

function FoodPage() {
    return (
      <div className="lg:flex">
        <Sidebar/>
        <Catalog />
        <OrderDetails />
      </div>
    );
  }
  
  export default FoodPage;