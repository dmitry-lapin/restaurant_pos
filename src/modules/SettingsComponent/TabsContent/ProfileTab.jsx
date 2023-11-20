import React, { useState } from "react";

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
    <div className="divide-y divide-zinc-300">
      {fields.map(({ label, state, value }, index) => (
        <div className="flex items-center justify-between" key={state}>
          <div>
            <p className="font-semibold text-normal">{label}</p>
            <p>{value}</p>
          </div>
          {editableField === state ? (
            <>
              <input
                type="text"
                value={data[state]}
                onChange={(e) => handleFieldChange(state, e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button onClick={() => handleEdit(state)}>Edit</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
