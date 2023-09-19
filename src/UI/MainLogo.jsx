import React from "react";
import Logo from './logo';

const MainLogo = ({params = "text-xl font-bold text-white"}) => {
    return(
        <div className="flex h-24 logo items-center justify-center w-full">
            <Logo params={params}/> 
        </div>
    );
}

export default MainLogo;