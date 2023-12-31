import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTableNumber } from "../Order_details/slices/OrderInformation";
import { toggleModal } from "../Order_details/slices/toggleTableModalSlice";

function TableNumberModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ToggleTableModal.isToggleModalVisible);
  const [inputText, setInputText] = useState('');
  const [isValid, setIsValid] = useState(false);

  const closeModal = () => {
    dispatch(toggleModal());
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    const isNumeric = /^[0-9]*$/.test(text); // Проверка, что введены только цифры
    setIsValid(isNumeric && text.trim() !== '');
  };

  const handleSelect = () => {
    if (isValid) {
      dispatch(setTableNumber(inputText));
      closeModal();
    }
  };

  return (
    <div className={`modal ${isOpen ? 'fixed inset-0 z-50 bg-zinc-800 bg-opacity-75 backdrop-blur-sm flex justify-center items-center' : 'hidden'}`}>
      <div className="modal-content bg-zinc-200 dark:bg-zinc-900 text-zinc-950 dark:text-gray-300 p-6 rounded-2xl flex-col text-center w-10/12 md:w-6/12 lg:w-5/12 xl:w-3/12 space-y-3 md:space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-center text-md md:text-xl font-semibold">Table number</p>
          <button onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 hover:text-red-500 duration-100">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-black">
          <input
            className={`placeholder:text-sm md:placeholder:text-md placeholder:italic placeholder:text-slate-600 block bg-white w-full border-2 ${isValid ? 'border-sky-500' : 'border-red-500'} rounded-md py-1.5 px-1.5 md:py-2.5 md:px-3 shadow-sm focus:outline-none md:text sm:text-sm`}
            placeholder="Select a table number"
            type="text"
            name="data_field"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button className={`text-sm md:text-md font-semibold rounded-xl w-full py-1 md:py-2 border-2 hover:text-gray-300 dark:hover:text-slate-800 ${isValid ? 'border-sky-500 hover:bg-sky-500 ' : ' border-red-500 hover:bg-red-500'} duration-100`} onClick={handleSelect}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableNumberModal;
