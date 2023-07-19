import React from 'react';
import Categories from './components/categories_feed/categories';
import SelectedCategory from './components/categories_feed/SelectedCategory';
import ModuleHeaderName from '../../UI/ModuleHeaderName';
import TextHeader from '../../UI/textHeader';

const Catalog = () => {


  return (
    <div className="w-full md:w-8/12 bg-gray-200 space-y-4">
      <ModuleHeaderName bgColor="bg-white">
        {<TextHeader text="Food & Drinks" color="text-black" size="text-lg md:text-xl" />}
      </ModuleHeaderName>
      <Categories />
      <SelectedCategory />
    </div>
  );
};

export default Catalog;