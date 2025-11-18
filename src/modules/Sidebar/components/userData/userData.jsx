import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { database } from "../../../../firebase_config";
import { ref, onValue, off } from "firebase/database";
import { getAuth } from "firebase/auth";
import { SignOutUser } from "./helpers/signoutUser";
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { Link } from "react-router-dom";

const UserData = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userUID = user.uid;

    const [isDataDisplayed, setIsDataDisplayed] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: '', role: '', image: '' }); // to keep all the userData which i do need for this component.
    const navigate = useNavigate(); 

    const onSignOut = () => {
        SignOutUser(navigate); 
    }

    const displayUserData = () => {
        setIsDataDisplayed(!isDataDisplayed);
    }

    useEffect(() => {
        if (userUID) {
            const userRef = ref(database, `users/${userUID}`);
            onValue(userRef, (snapshot) => {
                if (snapshot.exists()) {
                    setUserInfo(snapshot.val());
                } else {
                }
            });

            return () => {
                off(userRef);
            };
        }
    }, [userUID]);

    return (
        <div className="relative flex w-full">
            <div onClick={displayUserData} className="flex w-full justify-normal md:justify-center lg:justify-normal items-center space-x-3 md:space-x-0 lg:space-x-3 rounded-2xl p-2 bg-zinc-300 dark:bg-zinc-900 duration-100">
                <div className="ml-5 truncate block md:hidden lg:block">
                    <p className="text-zinc-950 dark:text-gray-300 font-semibold text-md xl:text-lg">{userInfo.name}</p>
                    <p className="text-zinc-950 dark:text-gray-400 font-normal truncate text-sm xl:text-normal">{userInfo.role}</p>
                </div>
            </div>
            {isDataDisplayed && (
                <div className="flex flex-col space-y-2 absolute bottom-20 rounded-xl bg-zinc-300 dark:bg-zinc-900 p-4 w-full text-zinc-950 dark:text-gray-300">         
                    <p className="text-lg font-medium">Hey, {userInfo.name}!</p>
                    <ul className="list-none space-y-1">
                        <li><Link to={'/settings'} className="text-sm">Profile settings</Link></li>
                        <li><Link to={'/settings'} className="text-sm">Team</Link></li>
                    </ul>                    
                    <button onClick={onSignOut} className="text-red-500 w-fit">Logout</button>
                </div>
            )}
        </div>
    );
}

export default UserData;
