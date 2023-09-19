import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTableNumber } from "../Order_details/slices/OrderInformation";

function TableNumberModal() {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(true);
    const [inputText, setInputText] = useState('');
    const [isValid, setIsValid] = useState(false);
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleInputChange = (e) => {
      const text = e.target.value;
      setInputText(text);
      setIsValid(text.trim() !== '');
    };
  
    const handleSelect = () => {
      if (isValid) {
        dispatch(setTableNumber(inputText));
        closeModal();
      }
    };
  
    return (
      <div className={`modal ${isOpen ? 'fixed inset-0 z-50 bg-opacity-75 backdrop-blur-sm flex justify-center items-center' : 'hidden'}`}>
        <div className="modal-content bg-zinc-800 text-white p-6 rounded-2xl flex-col text-center w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-center text-xl font-semibold">Table number</p>
            <button onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-red-500 duration-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-black">
            <input
              className={`placeholder:italic placeholder:text-slate-600 block bg-white w-full border-2 ${isValid ? 'border-purple-600' : 'border-red-500'} rounded-md py-2.5 px-3 shadow-sm focus:outline-none sm:text-sm`}
              placeholder="Select a table number"
              type="text"
              name="data_field"
              value={inputText}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button className={`font-semibold rounded-xl w-full py-2 border-2 ${isValid ? 'border-purple-600 hover:bg-purple-600 hover:text-slate-800' : 'hover:text-zinc-800 border-red-500 hover:bg-red-500'} duration-100`} onClick={handleSelect}>Select</button>
          </div>
        </div>
      </div>
    );
  }
  

export default TableNumberModal;