import React from "react";
import Logo from './logo';

const MainLogo = ({params = "text-xl font-bold text-black dark:text-white"}) => {
    return(
        <div className="flex md:h-24 items-center justify-start md:justify-center">
            <Logo params={params}/> 
        </div>
    );
}

export default MainLogo;