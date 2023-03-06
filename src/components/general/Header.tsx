import { RiSearchLine, RiAddCircleLine } from 'react-icons/ri';

const Header = () => {
  return (
    <header className='fixed bg-white shadow-lg lg:pl-[260px] w-full flex flex-col md:flex-row items-center justify-between p-5 gap-4'>
      <form className='relative  w-full md:w-2/4'>
        <RiSearchLine className='text-gray-500 absolute top-3 left-2' />
        <input
          type='text'
          className=' bg-gray-100 outline-none text-gray-600 py-2 pl-8 pr-4 rounded-full w-full'
          placeholder='Buscar'
        />
      </form>
      <button className='flex gap-2 items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-2 px-3 transition-all hover:scale-110 hover:shadow-2xl rounded-full'>
        <RiAddCircleLine /> Nuevo libro
      </button>
    </header>
  );
};

export default Header;
