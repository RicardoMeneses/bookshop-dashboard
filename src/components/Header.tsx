import { RiSearchLine } from 'react-icons/ri';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between p-8 gap-4'>
      <nav className='order-1 md:order-none'>
        <Link href='/'>Hola</Link>
      </nav>
      <form className='relative'>
        <RiSearchLine className='text-gray-500 absolute top-3 left-2' />
        <input
          type='text'
          className=' bg-gray-100 outline-none text-gray-300 py-2 pl-8 pr-4 rounded-full w-full'
          placeholder='Buscar'
        />
      </form>
    </header>
  );
};

export default Header;
