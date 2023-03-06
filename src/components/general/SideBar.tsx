import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RiHome3Line, RiMenu3Fill, RiCloseLine, RiHeartLine } from 'react-icons/ri';

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const activeClass = 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white';

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <aside
      className={`z-50 bg-white transition-all duration-500 fixed top-0 w-60 h-full overflow-y-auto border-r border-gray-300 p-8 lg:left-0 ${
        open ? 'left-0' : '-left-full'
      } `}
    >
      {/* Título */}
      <h1 className=' uppercase font-bold text-2xl tracking-[5px] mb-10 text-center'>Librería</h1>
      {/* Links */}
      <ul>
        <li>
          <Link
            href='/'
            className={`${
              router.pathname === '/' ? activeClass : ''
            } mb-3 flex items-center gap-4 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white py-2 px-3 rounded-2xl transition-colors`}
          >
            <RiHome3Line />
            Libros
          </Link>
        </li>
        <li>
          <Link
            href='/favoritos'
            className={`${
              router.pathname === '/favoritos' ? activeClass : ''
            } mb-3 flex items-center gap-4 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white py-2 px-3 rounded-2xl transition-colors`}
          >
            <RiHeartLine />
            Favoritos
          </Link>
        </li>
      </ul>
      {/* Botón menú móvil */}
      <button
        onClick={toggleMenu}
        className='z-50 lg:hidden bg-gradient-to-r from-sky-500 to-indigo-500 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full'
      >
        {open ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </aside>
  );
};

export default SideBar;
