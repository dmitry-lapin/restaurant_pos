import React from 'react';
import Categories from './components/categories_feed/categories';
import SelectedCategory from './components/categories_feed/SelectedCategory';
import TextHeader from '../../UI/textHeader';
import CheckoutBtn from '../../UI/CheckoutBtn';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Catalog = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div className="w-full flex flex-1 flex-col md:w-10/12 lg:w-9/12 bg-zinc-100 dark:bg-zinc-800">
      <div className='sticky bg-opacity-90 top-0 flex justify-between items-center py-3 md:h-24 px-5 bg-zinc-200 dark:bg-stone-950'>
        <TextHeader text="Food & Drinks" color="text-zinc-950 dark:text-gray-300" size="text-sm md:text-xl" />
        <CheckoutBtn displayOnBig={true}/>
      </div>
      <div className='px-2'>
        <Categories />
        <SelectedCategory />
      </div>
    </div>
  );
};

export default Catalog;