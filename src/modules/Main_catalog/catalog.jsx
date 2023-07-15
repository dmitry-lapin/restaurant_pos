import React from 'react';
import Categories from './components/categories_feed/categories';
import SelectedCategory from './components/categories_feed/SelectedCategory';
import ModuleHeaderName from '../../UI/ModuleHeaderName';
import TextHeader from '../../UI/textHeader';

const Catalog = () => {


  return (
    <div className="lg:w-7/12 bg-gray-200 space-y-4">
      <ModuleHeaderName bgColor="bg-white">
        {<TextHeader text="Default" color="text-black" size="text-xl" />}
      </ModuleHeaderName>
      <Categories />
      <SelectedCategory />
    </div>
  );
};

export default Catalog;