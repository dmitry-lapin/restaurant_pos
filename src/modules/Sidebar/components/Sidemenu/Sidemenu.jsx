import React from "react";
import { Link, useLocation } from 'react-router-dom';
import menuData from '../../../../common_data';
import MenuItem from "../../../../UI/MenuItem";

const Sidemenu = () => {
    const location = useLocation();
    let linkStyle = 'inline-block md:flex lg:inline-block justify-normal md:justify-center lg:justify-normal rounded-2xl duration-150 p-3';

    return (
      <ul className="flex flex-col text-gray-300 font-semibold m-3 space-y-3">
        {menuData.map(([title, url, image]) => (
          <Link to={url} key={url} className={ location.pathname === url ? ( linkStyle + ' border bg-zinc-800 border-zinc-900 ' ) : ( linkStyle + ' rounded-2xl hover:bg-zinc-800 duration-100' ) }>
            <MenuItem image={image}>
              <p className="md:hidden lg:block">{title}</p>
            </MenuItem>
          </Link>
        ))}
      </ul>
    );
  };
  
  export default Sidemenu;