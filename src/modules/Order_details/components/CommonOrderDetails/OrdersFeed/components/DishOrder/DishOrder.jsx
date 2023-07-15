import React, { useState } from "react";
import AddReduceBtn from "../../../../../../../UI/AddReduceBtn"
import { connect } from "react-redux";

import { increment, decrement } from "../../../../../../../store";

const DishOrder = (props) => {

    const dishData = { 
      name: "Spaghetti Bolognese",
      price: 12.49
    }

    return(
        <div className="rounded-2xl bg-zinc-800 py-3.5 px-5 space-y-5 shadow-md border border-zinc-900">
            <div className="flex flex-col">
                <p className="text-white text-md font-medium">{dishData.name}</p>
                <p className="text-zinc-500 text-md font-medium">$ {dishData.price}</p>
            </div>
            <div className="flex flex-row space-x-3">
                <AddReduceBtn action="+" color="text-white" bgColor="bg-zinc-700" hoverBg="hover:bg-zinc-600"/>
                <p className="flex items-center text-white font-semibold">{props.count}</p> 
                <AddReduceBtn action="-" color="text-white" bgColor="bg-zinc-700" hoverBg="hover:bg-zinc-600"/>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state
    }
}

const mapDispatchToProps = {
    apples: increment,
    oranges: decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(DishOrder);