import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker"; 
import { setDate } from "../../slices/OrderInformation";
import { toggleModal } from "./../../slices/toggleTableModalSlice"
import { toggleVisibility } from "../../slices/OrderDetailsSlice";

const CommonOrderDetails = () => {
    const dispatch = useDispatch();
    const tableNumber = useSelector(state => state.OrderTotal.table);

    const [value, setValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date().setMonth(11) 
        }); 
        
    const handleValueChange = (newValue) => {
        setValue(newValue);
        dispatch(setDate(newValue.endDate));
    }

    const handleTableChange = () => {
        dispatch(toggleModal());
        dispatch(toggleVisibility());
    }

    return(
        <div className="p-7 font-semibold flex justify-between">
            <div className="flex flex-row space-x-3 items-center">
                <button onClick={handleTableChange} className="text-white text-lg capitalize">Table {tableNumber}</button>
            </div>
            <div className="w-1/2">
                <Datepicker
                    primaryColor={"orange"}
                    useRange={false}
                    asSingle={true}
                    value={value}
                    onChange={handleValueChange}
                />
            </div>
        </div>
    );
}

export default CommonOrderDetails;