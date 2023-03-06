import Link from 'next/link';
import { useState } from 'react';
import { RiHome3Line, RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <aside
      className={`z-50 transition-all duration-500 fixed top-0 w-80 h-full overflow-y-auto border-r border-gray-800 p-8 flex flex-col justify-between lg:left-0 ${
        open ? 'left-0' : '-left-full'
      } `}
    >
      <div>
        {/* Logo */}
        <h1 className='text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10'>Logo</h1>
        <ul>
          <li>
            <Link
              href='/'
              className='text-gray-300 flex items-center gap-4 hover:bg-gray-300 py-3 px-4 rounded-2xl transition-colors'
            >
              <RiHome3Line />
              Libros
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-gray-300 flex items-center gap-4 hover:bg-gray-300 py-3 px-4 rounded-2xl transition-colors'
            >
              <RiHome3Line />
              Libros
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-gray-300 flex items-center gap-4 hover:bg-gray-300 py-3 px-4 rounded-2xl transition-colors'
            >
              <RiHome3Line />
              Libros
            </Link>
          </li>
          <li>
            <Link
              href='/'
              className='text-gray-300 flex items-center gap-4 hover:bg-gray-300 py-3 px-4 rounded-2xl transition-colors'
            >
              <RiHome3Line />
              Libros
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link
              href='/'
              className='text-gray-300 flex items-center gap-4 hover:bg-gray-300 py-3 px-4 rounded-2xl transition-colors'
            >
              <RiHome3Line />
              Libros
            </Link>
          </li>
        </ul>
      </div>
      {/* Boton menu movil */}
      <button
        onClick={toggleMenu}
        className='z-50 lg:hidden fixed bottom-8 right-6 p-2 text-lg rounded-full'
      >
        {open ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </aside>
  );
};

export default SideBar;
