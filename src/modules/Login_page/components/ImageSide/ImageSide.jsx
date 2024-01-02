import React from "react";
import LoginBgImage from "../../../../assets/common_images/login_bg2.jpg";

const ImageSide = () => {
    return (
        <div className="relative w-0 md:w-1/2 h-screen pr-2 md:py-2">
            {/* Фоновое изображение */}
            <img
                src={LoginBgImage}
                alt="Login_background"
                className="w-full h-full object-cover md:rounded-r-3xl md:border md:border-zinc-400"
            />

            {/* Блок с текстом и блюром */}
            <div className="hidden absolute inset-0 md:flex items-center justify-center text-white">
                <div className="w-3/4 h-1/4 backdrop-blur-lg bg-opacity-50 text-center">
                    <div className="flex flex-col text-black">
                        <p className="text-2xl font-semibold">text</p>
                        <p>text</p>
                        <p>text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageSide;
