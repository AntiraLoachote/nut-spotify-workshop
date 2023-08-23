import React from 'react';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

export default function MenuBotton({ title, icon, path }) {
  return (
    <div>
      <Link to={path}>
        <div className="flex flex-col items-center">
          <IconContext.Provider value={{ size: '24px' }}>
            {icon}
          </IconContext.Provider>
          <p className="pt-2">{title}</p>
        </div>
      </Link>
    </div>
  );
}
