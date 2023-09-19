import React from "react";
import TextHeader from "../../../../../UI/textHeader";
import TextInput from "../../../../../UI/TextInput";
import LoginPageBtn from "../../../../../UI/LoginPageBtn";
import LoginOptions from "./LoginOptions";
import GoogleIcon from "../../../../../assets/login_icons/google_icon.png"

const LoginForm = () => {
    return(
        <div className="flex flex-col items-center  lg:px-20 xl:px-32">
            <TextHeader text="Login"/>
            <TextHeader text="We suggest using the email address you use at work." color="text-zinc-500" size="text-md" restParams="font-normal px-10 text-center" />
            <div className="w-9/12 font-medium mt-10">
                <p className="mb-1">Email</p>
                <TextInput placeholder="yourmail@domain.com" isPassword={false}/>
            </div>
            <div className="w-9/12 font-medium mt-5">
                <p className="mb-1">Password</p>
                <TextInput placeholder="Password here" isPassword={true}/>
                <p className="text-zinc-500 text-end hover:text-violet-600 duration-100 cursor-pointer mt-1">Forgot password</p>
            </div>
            <LoginPageBtn restParams={"mt-6 bg-violet-500 hover:bg-violet-600 text-white ring-violet-600"}>Login</LoginPageBtn>
            <p className="font-semibold my-8">OR</p>
            <LoginOptions>
                <LoginPageBtn restParams={"hover:bg-zinc-100 border border-zinc-500 text-black ring-zinc-500"}><img alt="google_icon" className="w-7 h-7" src={GoogleIcon} /><p>Continue with Google</p></LoginPageBtn>
            </LoginOptions>
        </div>
    );
}

export default LoginForm;