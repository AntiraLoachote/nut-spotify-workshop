import { FaHome, FaPlayCircle, FaStar, FaColumns } from 'react-icons/fa';
import Profile from '../Profile';
import MenuBotton from '../MenuButton';

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-evenly w-28">
      <MenuBotton title="Libraly" icon={<FaHome />} path={'/libraly'} />
      <MenuBotton title="Feed" icon={<FaColumns />} path={'/feed'} />
      <Profile />
      <MenuBotton title="Player" icon={<FaPlayCircle />} path={'/player'} />
      <MenuBotton title="Favorites" icon={<FaStar />} path={'/favorites'} />
    </div>
  );
}
