import { FaHome, FaPlayCircle, FaStar, FaColumns } from 'react-icons/fa'
import Profile from '../Profile'
import MenuButton from '../MenuButton'

export default function Sidebar() {
  return (
    <div className="flex flex-col w-28 shadow-lg rounded-lg  p-4 bg-gradient-to-l from-green-500 ">
      <MenuButton title="Libraly" icon={<FaHome />} path={'/libraly'} />
      <MenuButton title="Feed" icon={<FaColumns />} path={'/feed'} />
      <Profile />
      <MenuButton title="Player" icon={<FaPlayCircle />} path={'/player'} />
      <MenuButton title="Favorites" icon={<FaStar />} path={'/favorites'} />
    </div>
  )
}
