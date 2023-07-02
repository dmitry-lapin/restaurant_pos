import React from "react";
import { Link } from 'react-router-dom';

const Sidemenu = () => {

    return(
        <ul className="flex flex-col text-gray-300 font-semibold m-3 space-y-3">
            {[
                ['Dashboard', '/dashboard'],
                ['Food & Drinks', '/food_catalog'],
                ['Messages', '/messages'],
                ['Bills', '/bills'],
                ['Settings', '/settings']
            ].map(([title, url]) => (
                <Link to={url} className="">{title}</Link>
            ))}
        </ul>
    );
}

export default Sidemenu;