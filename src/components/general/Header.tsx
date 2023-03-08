import { HeaderProps } from '@/interfaces';
import { useRouter } from 'next/router';
import { RiSearchLine, RiAddCircleLine } from 'react-icons/ri';

const Header: React.FC<HeaderProps> = ({ setOpen, title }) => {
  const router = useRouter();
  return (
    <header
      className={`fixed z-10 bg-white shadow-lg lg:pl-[260px] w-full flex flex-col md:flex-row items-center ${
        title ? 'justify-center' : 'justify-end'
      } p-5 gap-4`}
    >
      {router.pathname.includes('/libro/') ? (
        <p className=' text-2xl font-bold text-center'>{title}</p>
      ) : (
        <button
          className='flex gap-2 items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-2 px-3 transition-all hover:scale-110 hover:shadow-2xl rounded-full'
          onClick={setOpen}
        >
          <RiAddCircleLine /> Nuevo libro
        </button>
      )}
    </header>
  );
};

export default Header;
