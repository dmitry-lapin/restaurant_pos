// UserData.js
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { database } from "../../../../firebase_config";
import { ref, onValue, off } from "firebase/database";
import { getAuth } from "firebase/auth";
import { SignOutUser } from "./helpers/signoutUser";
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const UserData = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userUID = user.uid;

    const [userInfo, setUserInfo] = useState({ name: '', role: '', image: '' }); // to keep all the userData which i do need for this component.
    const navigate = useNavigate(); 

    const onSignOut = () => {
        SignOutUser(navigate); 
    }

    useEffect(() => {
        if (userUID) {
            const userRef = ref(database, `users/${userUID}`);
            onValue(userRef, (snapshot) => {
                if (snapshot.exists()) {
                    setUserInfo(snapshot.val());
                } else {
                    // Обработка случая, когда данных пользователя нет в базе
                }
            });

            return () => {
                off(userRef); // Отписываемся от прослушивания при размонтировании компонента
            };
        }
    }, [userUID]);

    return (
        <div className="flex w-full justify-normal md:justify-center lg:justify-normal items-center space-x-3 md:space-x-0 lg:space-x-3 rounded-2xl p-2 bg-zinc-300 hover:bg-opacity-75 dark:bg-zinc-900 dark:hover:bg-zinc-800 duration-100">
            <img src={userInfo.profile_picture} className="object-cover w-14 h-10 rounded-xl " alt="User" />
            <div className="truncate block md:hidden lg:block">
                <p className="text-zinc-950 dark:text-gray-300 font-semibold text-md xl:text-lg">{userInfo.name}</p>
                <p className="text-zinc-950 dark:text-gray-300 font-normal truncate text-sm xl:text-normal">{userInfo.role}</p>
            </div>
            <button onClick={onSignOut}><p className="text-white">exit</p></button>
        </div>
    );
}

export default UserData;
