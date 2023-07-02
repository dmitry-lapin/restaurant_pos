import React from "react";
import Logo from './logo';

const MainLogo = () => {
    return(
        <div className="flex bg-zinc-900 h-24 logo items-center justify-center">
            <Logo params="text-3xl font-bold"/>
        </div>
    );
}

export default MainLogo;