import React from "react";

const BtnCategoryWrapper = ({ category, onClick }) => {
    return (
      <button className="border bg-zinc-50 rounded" onClick={() => onClick(category)}>
        {category}
      </button>
    );
  };

export default BtnCategoryWrapper;