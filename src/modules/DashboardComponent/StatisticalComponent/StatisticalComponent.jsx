import React from "react";
import { calculateDifferenceInPercents } from "../../../app/helpers/calculateDifference";

const StatisticalComponent = ({ element }) => {
  const valueDifference = calculateDifferenceInPercents(element.value,element.previousMonthValue);
  let svg;
  let textColor;

  if (valueDifference > 0) {
    svg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22"
        />
      </svg>
    );
    textColor = "text-green-600";
  } else if (valueDifference < 0) {
    svg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-red-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898"
        />
      </svg>
    );
    textColor = "text-red-600";
  }

  return (
    <div className="rounded-2xl flex flex-col flex-1 p-4 items-center space-y-3 border-1 border border-zinc-300 bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-950 justify-between h-full">
      <div className="w-full flex flex-row justify-between text-zinc-950 dark:text-gray-300">
        <p className="font-medium text-md">{element.name}</p>
        <span className="">{element.icon}</span>
      </div>
      <div className="w-full flex flex-row justify-between">
        <p className={`text-zinc-950 dark:text-gray-300 font-semibold text-xl `}>{ typeof(element.value) === 'number' ? element.value.toFixed(2) : element.value }</p>
        <span className="flex-row space-x-1 items-center hidden xl:flex">
          {svg}
          <p className={`self-center text-center ${textColor}`}>
            {valueDifference}%
          </p>
        </span>
      </div>
    </div>
  );
};

export default StatisticalComponent;
