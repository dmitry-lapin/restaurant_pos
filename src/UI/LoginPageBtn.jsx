import React from "react";

const LoginPageBtn = ({children, restParams}) => {
    let styling = "flex flex-row items-center justify-center space-x-1 text-center rounded-md font-medium py-2.5 w-9/12 hover:ring-2 hover:ring-offset-1 duration-100 " + restParams;
    
    return(
        <button className={styling}>{children}</button>
    );
}

export default LoginPageBtn;