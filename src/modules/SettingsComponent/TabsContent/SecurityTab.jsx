import React, { useState } from "react";
import TextInput from '../../../UI/TextInput'
import SaveTabsBtn from "../../../UI/SaveChangesTabsBtn";

const Profile = ({password = "admin"}) => {
    const [editableField, setEditableField] = useState(null);
    const [inputPassword, setInputPassword] = useState(password);

    const handleFieldChange = () => {
        setEditableField(!editableField);
    };

    const handlePasswordChange = (e) => {
        setInputPassword(e.target.value);
    };

    return(
        <div className="flex flex-col w-1/2 space-y-6">
            <div className="flex p-3 items-center space-x-4 text-lg">
                <p className="font-medium">Password: </p>

                { editableField ?
                    <input className="text-base border border-zinc-300 rounded px-1.5 py-0.5 focus:outline-none focus:border-indigo-600 focus:shadow-md" type="text" name="changePasswordField" onChange={handlePasswordChange} value={inputPassword}/> :
                    <p className="text-center">{'*'.repeat(inputPassword.length)}</p>   
                }
                
                <button className="duration-100 hover:bg-gray-300  px-2 py-1 rounded" onClick={handleFieldChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                </button>
            </div>
            <SaveTabsBtn/>

        </div>
    );
}

export default Profile;