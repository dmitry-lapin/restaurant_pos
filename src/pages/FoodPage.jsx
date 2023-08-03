import React from "react";
import Sidebar from "../modules/Sidebar/Sidebar";
import Catalog from "../modules/Main_catalog/catalog";
import OrderDetails from "../modules/Order_details/OrderDetails";

function FoodPage() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        <Sidebar/>
        <Catalog /> 
        <OrderDetails />
      </div>
    );
  }
  
  export default FoodPage;