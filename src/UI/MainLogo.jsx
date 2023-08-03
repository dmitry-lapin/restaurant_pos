import React from "react";
import Logo from './logo';

const MainLogo = () => {
    return(
        <div className="flex h-24 logo items-center justify-center w-full">
            <Logo params="text-3xl font-bold"/> 
        </div>
    );
}

export default MainLogo;