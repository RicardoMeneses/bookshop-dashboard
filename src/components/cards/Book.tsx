import { RiHeartFill, RiHeartLine, RiEyeLine, RiDeleteBin3Line } from 'react-icons/ri';

const Book = () => {
  return (
    <div className='flex flex-col items-center justify-center mb-5'>
      <div className='w-3/4 h-60 relative group transition-all'>
        <div className='absolute top-3 left-0 bg-white shadow-sm rounded-tr-md rounded-br-md w-16 h-6 flex items-center justify-center'>
          <RiHeartFill className='text-red-800 text-lg' />
        </div>
        <img
          src='https://m.media-amazon.com/images/I/71WDmR4x0zL.jpg'
          alt='imagen'
          className='h-full w-full object-contain'
        />
        <div className='absolute top-5 flex transition-all duration-700 flex-col scale-0 gap-2 -right-7 group-hover:right-3 group-hover:scale-100'>
          <div className='w-7 h-7 bg-white flex justify-center items-center rounded-full cursor-pointer'>
            <RiHeartLine />
          </div>
          <div className='w-7 h-7 bg-white flex justify-center items-center rounded-full cursor-pointer'>
            <RiEyeLine />
          </div>
          <div className='w-7 h-7 bg-white flex justify-center items-center rounded-full cursor-pointer'>
            <RiDeleteBin3Line />
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h1 className='font-bold leading-5 mt-3'>Los secretos de la mente millonaria</h1>
        <p className='text-sm mt-2'>Autor Apellido</p>
      </div>
    </div>
  );
};

export default Book;