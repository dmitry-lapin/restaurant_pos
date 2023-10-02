import React from 'react';
import NotificationGif from "../assets/common_icons/done.gif"

const Toast = ({type='dish'}) => {
  const options = {
    'dish': 'Dish was added.',
    'order': 'Order was placed succesfully.'
  }

  return (
    <div className='flex text-center space-x-2 font-light bg-white rounded-xl px-6 py-3 border border-zinc-300 shadow-md'>
      <img src={NotificationGif} className="w-6 h-6" alt="success animation" loop={false}/>
      <p>{options[type]}</p>
    </div>
  );
};

export default Toast;