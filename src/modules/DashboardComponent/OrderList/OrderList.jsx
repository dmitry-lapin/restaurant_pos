import React from "react";

const OrderList = () => {
    const orders = [
      {
        no: '1',
        id: '#12345',
        date: '11-09-2023/20:43',
        table: '78',
        paymentMethod: 'Cash',
        price: '$ 20.74',
        btnDetails: 
        <button className="rounded-lg p-1 hover:bg-zinc-200 duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </button>
      },
      {
        no: '2',
        id: '#12346',
        date: '11-09-2023/18:22',
        table: '24',
        paymentMethod: 'Card',
        price: '$ 34.50',
        btnDetails: 
        <button className="rounded-lg p-1 hover:bg-zinc-200 duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </button>
      },
    ];
  
    const categories = {
      'no': 'No',
      'id': 'ID',
      'date': 'Date',
      'table': 'Table',
      'paymentMethod': 'Payment method',
      'price': 'Price',
      'btnDetails': 'Details'
    };
  
    const categoryKeys = Object.keys(categories);
  
    return (
      <div className="w-full md:w-8/12 border bg-white rounded-2xl p-5 border-zinc-300 space-y-4">
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Order List</p>
          <a href="#" className="font-medium">View all</a>
        </div>
        <div className="flex flex-row">
          {categoryKeys.map((categoryKey, index) => (
            <div
              key={index}
              className={`flex flex-col items-start text-center pr-3 flex-1`}
            >
              <p className="text-zinc-500 font-semibold">{categories[categoryKey]}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {orders.map((order, orderIndex) => (
            <div
              key={orderIndex}
              className="flex flex-row items-center py-2"
            >
              {categoryKeys.map((categoryKey, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className={`flex flex-col flex-1 items-start pr-3`}
                >
                  <p className="font-medium">{order[categoryKey]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default OrderList;