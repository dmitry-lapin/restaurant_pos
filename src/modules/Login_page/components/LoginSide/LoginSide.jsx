import React from "react";
import LoginLogo from "./components/LoginLogo";
import LoginForm from "./components/LoginForm";

const LoginSide = () => {
    return(
        <div className="w-full md:w-1/2 h-screen pl-2 py-2 flex-col">
            <div className="rounded-3xl md:rounded-r-none md:rounded-l-3xl bg-white h-full space-y-8 py-8">
                <LoginLogo/>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginSide;