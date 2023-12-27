import React, { useState } from "react";
import SaveTabsBtn from "../../../UI/SaveChangesTabsBtn";

const UserProfile = () => {
  const fields = [
    { label: "Legal Name", state: "legalName", value: "John Doe" },
    { label: "Email Address", state: "email", value: "john.doe@example.com" },
    { label: "Phone Number", state: "phoneNumber", value: "123-456-7890" },
    { label: "Address", state: "address", value: "123 Main St, City" },
  ];

  const [editableField, setEditableField] = useState(null);
  const [data, setData] = useState({
    legalName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, City",
  });

  const handleEdit = (field) => {
    setEditableField(field);
  };

  const handleSave = () => {
    setEditableField(null);
  };

  const handleCancel = () => {
    setEditableField(null);
  };

  const handleFieldChange = (field, value) => {
    setData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <>
      <p className="text-gray-600 dark:text-zinc-300 text-sm">
        Edit your personal information and manage account details.
      </p>
    <div className="space-y-12">
    <div className="divide-y divide-zinc-300 dark:divide-zinc-950">
      {fields.map(({ label, state, value }, index) => (
        <div className="flex justify-between py-3" key={state}>
          <div className="space-y-1">
            <p className="text-zinc-950 dark:text-gray-300 font-semibold text-normal">{label}</p>
            {editableField === state ? (
              <input
              type="text"
              value={data[state]}
              onChange={(e) => handleFieldChange(state, e.target.value)}
              className="border border-zinc-300 rounded px-1.5 py-0.5 focus:outline-none focus:border-indigo-600 focus:shadow-md"
            />
            
            ) : (
              <p className="text-gray-600 dark:text-zinc-400 font-medium">{data[state]}</p>
            )}
          </div>
          {editableField === state ? (
            <div className="flex items-end">
              <div className="flex flex-row space-x-1 mr-4">
                <button className="bg-indigo-600 text-white px-2 py-1 rounded-md h-fit text-md font-medium duration-100" onClick={handleSave}>Save</button>
                <button className="text-zinc-950 dark:text-gray-300" onClick={handleCancel}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-auto ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <button className="text-zinc-950 dark:text-gray-300 hover:underline font-semibold duration-100" onClick={() => handleEdit(state)}>Edit</button>
          )}
        </div>
      ))}
    </div>

    <SaveTabsBtn />
    </div>
    </>
  );
};

export default UserProfile;
