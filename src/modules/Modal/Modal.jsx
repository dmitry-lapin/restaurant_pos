import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../Order_details/slices/toggleModalSlice';
import CloseBtn from '../../UI/CloseBtn';
import { useSelector } from 'react-redux';
import Toast from '../../UI/Toast';

import { setOrderInformation } from '../Order_details/slices/OrderInformation';
import { setOrdersFeed } from '../Order_details/slices/OrdersFeedSlice';

import { database } from '../../firebase_config';
import { ref, set, onValue, get } from 'firebase/database';

import toast, { Toaster } from 'react-hot-toast';


const Modal = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`; //date to push it to database.
  
  
    const dispatch = useDispatch();
    const dishes = useSelector((state) => state.OrdersFeed.SelectedDishes); //selected dishes by users in array.
    const [orderCount, setOrderCount] = useState(0);
  
    //complete information about the order assembled in one object. 
    const orderTotal = useSelector((state) => state.OrderTotal);
    const ordersFeed = useSelector((state) => state.OrdersFeed);
  
    useEffect(() => {
      const ordersRef = ref(database, "orders");
      onValue(ordersRef, (snapshot) => { //i used it to get an database 'orders' length.
        if (snapshot.exists()) {
          const orderData = snapshot.val();
          const orderKeys = Object.keys(orderData);
          setOrderCount(orderKeys.length);
        } else {
          setOrderCount(0);
        }
      });
    }, []);
  
    let price = useSelector((state) => state.OrdersFeed.totalAmount); //total price of order.
    price = price.toFixed(2);
  
    const handleClose = () => {
      dispatch(toggleModal());
    }
  
    const handlePlaceOrder = () => {
        const newOrder = {
          ...orderTotal,
          ...ordersFeed,
        };
      
        const ordersRef = ref(database, `orders/${orderCount}`);
      
        set(ordersRef, newOrder)
          .then(() => {
            // Обновите статистику напрямую
            const statisticsRef = ref(database, `statistics/${year}-${month}`);
            
            // Сначала получите текущие статистические данные
            get(statisticsRef)
              .then((snapshot) => {
                const currentStatistics = snapshot.val() || {};
                const updatedStatistics = { ...currentStatistics };
      
                // Здесь вы можете обновить статистические данные, например, общую выручку и количество приобретенных блюд
                updatedStatistics.revenue = (updatedStatistics.revenue || 0) + parseFloat(price); // Парсим цену обратно в число
      
                dishes.forEach((dish) => {
                  updatedStatistics.dishes = updatedStatistics.dishes || {};
                  updatedStatistics.dishes[dish.name] = (updatedStatistics.dishes[dish.name] || 0) + dish.quantity;
                });
      
                // Затем установите обновленные статистические данные
                set(statisticsRef, updatedStatistics)
                  .then(() => {
                    console.log('Order placed successfully and statistics updated');
                    dispatch(toggleModal());
                    
                    // Очистите состояния Redux
                    dispatch(setOrdersFeed({
                      SelectedDishes: [],
                      totalAmount: 0
                    }));
                    dispatch(setOrderInformation({
                      paymentMethod: "Cash",
                      date: formattedDate,
                      waiter: "Homer Simpson",
                      table: null
                    }));
                  })
                  .catch((error) => {
                    console.error('Error updating statistics:', error);
                  });
              })
              .catch((error) => {
                console.error('Error getting current statistics:', error);
              });
          })
          .catch((error) => {
            console.error('Error placing order:', error);
          })
          .then(() => {
            toast.custom(<Toast type="order"/>,{
              duration: 1000,
              position: 'bottom-center',
            });
          });
      }
      
      






  

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-zinc-800 bg-opacity-75 backdrop-blur-sm">
      <div className="flex flex-col bg-zinc-900 px-4 py-5 md:rounded-2xl space-y-3 h-full w-full md:h-5/6 md:w-9/12 lg:w-7/12 xl:w-5/12">
        <div className='flex w-full justify-between items-center bg-zinc-800 rounded-2xl shadow-md px-8 py-4'>
          <p className='text-xl font-semibold text-white underline decoration-blue-500 decoration-2 underline-offset-2'>Order Summary</p>
          <CloseBtn onClick={handleClose} />
        </div>
        <div className="flex flex-grow space-x-3 h-full">
          <div className="bg-zinc-800 p-8 w-full rounded-2xl space-y-3">
            <div className="flex flex-row justify-between px-4">
              <p className="text-white font-semibold text-lg">Items</p>
              <p className="text-white font-semibold text-lg">Amount</p>
            </div>
            <div className="space-y-3 overflow-y-auto max-h-[60vh] md:max-h-[43vh] scroll-styling">
              {
                dishes.map((dish, index) => (
                  <div className="w-full flex justify-between" key={index}>
                    <div className="flex flex-row space-x-3 items-center">
                      <img src={dish.image} alt="dish_image" className="h-20 w-24 border border-zinc-500" />
                      <div className="flex flex-col text-white justify-evenly h-full">
                        <p className="font-semibold">{dish.name}</p>
                        <p className="">$ {dish.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center font-semibold text-xl text-white pr-6">
                      <p>x {dish.quantity}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 rounded-2xl py-4 px-8 text-white text-lg">
          <div className="flex justify-between">
            <div className="font-semibold text-zinc-300 flex text-center items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
              <p>Price:</p>
            </div>$ {price}</div>
        </div>
        <div className="flex justify-end text-white font-medium space-x-2">
          <button className="rounded-2xl bg-black py-4 w-full duration-100 hover:bg-neutral-950 shadow-lg" onClick={handlePlaceOrder}>Place</button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Modal;
