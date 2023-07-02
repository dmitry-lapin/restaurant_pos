import React from "react";

const Logo = ({params}) => {
    return(
            <p className={"logo text-center self-center text-white text-gradient hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-green-500 to-cyan-500 duration-150 cursor-pointer " + params}>GodDish!</p>
    );
}

export default Logo;