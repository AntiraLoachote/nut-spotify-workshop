import React from 'react';
import MenuBotton from '../MenuButton';
import { FaHome, FaPlayCircle, FaStar, FaColumns } from 'react-icons/fa';
export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-52">
      <MenuBotton title="Home" icon={<FaHome />} path={'/'} />
      <MenuBotton title="Feed" icon={<FaColumns />} path={'/feed'} />
      <div>profile</div>
      <MenuBotton title="Player" icon={<FaPlayCircle />} path={'/player'} />
      <MenuBotton title="Favorites" icon={<FaStar />} path={'/favorites'} />
    </div>
  );
}
