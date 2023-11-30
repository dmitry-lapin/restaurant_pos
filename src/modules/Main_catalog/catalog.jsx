import React from 'react';
import Categories from './components/categories_feed/categories';
import SelectedCategory from './components/categories_feed/SelectedCategory';
import ModuleHeaderName from '../../UI/ModuleHeaderName';
import TextHeader from '../../UI/textHeader';
import CheckoutBtn from '../../UI/CheckoutBtn';

const Catalog = () => {

  return (
    <div className="w-full flex flex-1 flex-col md:w-10/12 lg:w-9/12 bg-zinc-100 dark:bg-zinc-800  pb-4">
      <ModuleHeaderName bgColor="bg-zinc-200 dark:bg-stone-950">
        <TextHeader text="Food & Drinks" color="text-zinc-950 dark:text-gray-300" size="text-xl" />
        <CheckoutBtn displayOnBig={true} bgColor="hover:bg-zinc-300 dark:hover:bg-stone-800"/>
      </ModuleHeaderName>
      <Categories />
      <SelectedCategory />
    </div>
  );
};

export default Catalog;