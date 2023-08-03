import React from 'react';
import LoginBgImage from "../assets/common_images/login_bg.jpg"

const LoginPage = () => {
    return(
        <div className="flex flex-row h-full">
            <div className="lg:w-1/2 bg-zinc-100 h-screen">
                <p>there is some text</p>
            </div>
            <div className="lg:w-1/2 h-screen">
                <p>some other text</p>
            </div>
        </div>
    );
};

export default LoginPage;