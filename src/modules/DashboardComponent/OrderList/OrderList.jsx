import React from "react";

const OrderList = () => {
    const orders = [
      {
        no: '# 1',
        id: '#12345',
        date: '11 Sep, 2023',
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
        no: '# 2',
        id: '#12346',
        date: '11 Sep, 2023',
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
      'no': 'No.',
      'date': 'Date',
      'table': 'Table',
      'price': 'Price',
      'btnDetails': 'Actions'
    };
  
    const categoryKeys = Object.keys(categories);
  
    return (
      <div className="w-full md:w-7/12 border bg-white rounded-2xl border-zinc-300">
        <div className="flex justify-between px-5 py-4">
          <p className="font-semibold text-xl">Order List</p>
          <a href="/orders" className="font-medium">View all</a>
        </div>
        <div className="flex flex-row bg-gray-200 px-5 py-3 border-y border-zinc-300">
          {categoryKeys.map((categoryKey, index) => (
            <div
              key={index}
              className={`flex flex-col items-start text-center pr-3 flex-1`}
            >
              <p className="text-zinc-500 text-sm font-medium">{categories[categoryKey]}</p>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {orders.map((order, orderIndex) => (
            <div
              key={orderIndex}
              className="flex flex-row items-center py-2 px-5 duration-100 border-y border-transparent hover:bg-zinc-100 hover:border-zinc-200"
            >
              {categoryKeys.map((categoryKey, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className={`flex flex-col flex-1 items-start pr-3`}
                >
                  <p className="text-sm font-medium">{order[categoryKey]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default OrderList;