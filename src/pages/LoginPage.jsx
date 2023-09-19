import React from 'react';
import LoginModule from '../modules/Login_page/LoginModule';

const LoginPage = () => {
    return(
        <div className="flex flex-row h-full bg-gradient-to-r from-zinc-200 to-stone-500">
            <LoginModule />
        </div>
    );
};

export default LoginPage;