import React, { useState, useEffect } from "react";
import Sidebar from "../modules/Sidebar/Sidebar";
import Catalog from "../modules/Main_catalog/catalog";
import OrderDetails from "../modules/Order_details/OrderDetails";
import { useSelector } from "react-redux";
import Modal from "../modules/Modal/Modal";
import TableNumberModal from "../modules/TableNumberModal/TableNumberModal";

function FoodPage() {
    const [isOpen, setIsOpen] = useState(true);
    const modalVisibility = useSelector(state => state.ModalSlice.isModalVisible);

    useEffect(() => {
      setIsOpen(true);
    }, []);
    
    return (
      <div className="flex flex-col md:flex-row h-screen">
        {isOpen && <TableNumberModal />}
        <Sidebar/>
        <Catalog /> 
        <OrderDetails />
        {modalVisibility && <Modal />}
      </div>
    );
  }
  
  export default FoodPage;