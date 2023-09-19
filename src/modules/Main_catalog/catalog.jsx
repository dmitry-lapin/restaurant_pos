import React from 'react';
import Categories from './components/categories_feed/categories';
import SelectedCategory from './components/categories_feed/SelectedCategory';
import ModuleHeaderName from '../../UI/ModuleHeaderName';
import TextHeader from '../../UI/textHeader';
import CheckoutBtn from '../../UI/CheckoutBtn';

const Catalog = () => {

  return (
    <div className="w-full flex flex-1 flex-col md:w-10/12 lg:w-9/12 bg-gray-200 pb-4">
      <ModuleHeaderName bgColor="bg-white">
        <TextHeader text="Food & Drinks" color="text-black" size="text-xl" />
        <CheckoutBtn displayOnBig={true} bgColor="hover:bg-zinc-200"/>
      </ModuleHeaderName>
      <Categories />
      <SelectedCategory />
    </div>
  );
};

export default Catalog;