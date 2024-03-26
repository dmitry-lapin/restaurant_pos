import React, { useState, useEffect } from "react";

import { signInWithEmailAndPassword } from "firebase/auth"; //Firebase Sign in method.
import { auth } from "../../../../../firebase_config"; // auth logic.
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import TextHeader from "../../../../../UI/textHeader";
import LoginPageBtn from "../../../../../UI/LoginPageBtn";
import LoginOptions from "./LoginOptions";
import GoogleIcon from "../../../../../assets/login_icons/google_icon.png"

import { useNavigate } from "react-router-dom"; // Navigate method (Routing).

import { setUID } from "./slices/AuthReducer";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const auth = getAuth();

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setEmail('');
        setPassword('');
    },[])

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/food_catalog")
            dispatch(setUID(user.uid));
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage('Invalid email or password. Please try again.');
            console.log(errorCode, errorMessage);
            setTimeout(() => {
                setErrorMessage('');
            }, 5000); 
        });
        
    }

    const onForgetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            console.log(errorCode);
            errorCode === 'auth/missing-email' ?
    (() => {
        setErrorMessage('Missing email!');
        setTimeout(() => {
            setErrorMessage('');
        }, 5000);
    })() :
    setErrorMessage('');

        })
    }

    return(
        <main>
            <section>
                <form>
                    <div className="flex flex-col items-center  lg:px-20 xl:px-32">
                        <TextHeader text="Login"/>
                        <TextHeader text="We suggest using the email address you use at work." color="text-zinc-500" size="text-md" restParams="font-normal px-10 text-center" />
                        <div className="w-9/12 font-medium mt-10"> {/*start of email field*/}
                            <p className="mb-1">Email</p>
                            <div className="relative">
                                <input 
                                    className={`placeholder:italic placeholder:text-slate-600 block bg-white w-full rounded-md py-2.5 px-3 shadow-sm focus:outline-none focus:border-purple-600 focus:ring-purple-600 focus:ring-1 sm:text-sm ` + (errorMessage !== '' ? ' border border-red-500 ' : ' border border-slate-300 ')}
                                    placeholder="yourmail@domain.com"
                                    type="email" 
                                    name="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                    autoComplete="off"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none w-6 h-6">
                                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>
                            </div>
                        </div> {/*end of email field*/}
                        <div className="w-9/12 font-medium mt-5"> {/*start of password field*/}
                            <p className="mb-1">Password</p>
                            <div className="relative">
                                <input
                                    className={`placeholder-italic placeholder-text-slate-600 block bg-white w-full rounded-md py-2.5 px-3 shadow-sm focus:outline-none focus:border-purple-600 focus:ring-purple-600 focus:ring-1 sm:text-sm duration-100 ` + (errorMessage !== '' ? ' border border-red-500 ' : ' border border-slate-300 ')}
                                    placeholder="password here"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="off"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            onLogin(e);
                                        }
                                    }}
                                />
                                <button
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 hover:text-purple-600 duration-100">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 hover:text-purple-600 duration-100">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <p onClick={onForgetPassword} className="text-zinc-500 text-end hover:text-violet-600 duration-100 cursor-pointer mt-1">Forgot password</p>
                        </div> {/*end of password field*/}
                        <button onClick={onLogin} className="flex flex-row items-center justify-center space-x-1 text-center rounded-md font-medium py-2.5 w-9/12 hover:ring-2 hover:ring-offset-1 duration-100 mt-6 bg-violet-500 hover:bg-violet-600 text-white ring-violet-600">Login</button>
                        {errorMessage && <span class="w-9/12 mt-4 inline-flex items-center justify-center rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{errorMessage}</span>}
                        <p className="font-semibold my-8">OR</p>
                        <LoginOptions>
                            <LoginPageBtn restParams={"hover:bg-zinc-100 border border-zinc-500 text-black ring-zinc-500"}><img alt="google_icon" className="w-7 h-7" src={GoogleIcon} /><p>Continue with Google</p></LoginPageBtn>
                        </LoginOptions>
                    </div>
                </form>
            </section>
        </main>
    );
}

export default LoginForm;