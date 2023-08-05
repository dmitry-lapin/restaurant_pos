import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory } from '../modules/Main_catalog/components/slices/SelectedCategorySlice';

const CategoryBtn = ({ name="", image }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.Categories.selectedCategory);

  const handleSelectCategory = () => {
    dispatch(setSelectedCategory(name));
  };

  const isSelected = selectedCategory === name;
  let style = "flex items-center justify-center min-w-[40px] md:min-w-[60px] rounded-3xl px-4 py-2.5 font-semibold shadow-md hover:shadow-lg duration-100 bg-gray-200 hover:bg-gray-300";
  style += isSelected ? " bg-gray-400 hover:bg-gray-500 text-black" : " bg-gray-200 hover:bg-gray-300 text-black";

  return (
    <button onClick={handleSelectCategory} className={style}>
      <img src={image} alt="Pasta Icon" className="mr-2 w-6 h-6 md:w-7 md:h-7" />
      <span className="text-sm md:text-lg">{name}</span>
    </button>
  );
};

export default CategoryBtn;