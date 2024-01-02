import React from "react";
import LoginBgImage from "../../../../assets/common_images/login_bg2.jpg";

const ImageSide = () => {
    return (
        <div className="relative w-0 md:w-1/2 h-screen pr-2 md:py-2">
            <img
                src={LoginBgImage}
                alt="Login_background"
                className="w-full h-full object-cover md:rounded-r-3xl md:border md:border-zinc-400"
            />

            
        </div>
    );
}

export default ImageSide;
