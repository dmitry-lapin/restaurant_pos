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
  let style = "flex items-center justify-center min-w-[40px] md:min-w-[60px] rounded-3xl px-4 py-2.5 font-semibold shadow-md hover:shadow-lg duration-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700";
  style += isSelected ? " bg-zinc-400 hover:bg-zinc-400 dark:bg-zinc-600 text-zinc-950 dark:text-gray-300" : " bg-gray-200 hover:bg-gray-300 text-zinc-950 dark:text-gray-300";

  return (
    <button onClick={handleSelectCategory} className={style}>
      <img src={image} alt="Pasta Icon" className="mr-2 w-6 h-6 md:w-7 md:h-7" />
      <span className="text-sm md:text-lg">{name}</span>
    </button>
  );
};

export default CategoryBtn;