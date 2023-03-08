import { BookAsProps } from '@/interfaces';
import api from '@/services/api';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  RiHeartFill,
  RiHeartLine,
  RiEyeLine,
  RiDeleteBin3Line,
  RiLoader5Line,
} from 'react-icons/ri';
import Delete from '../modals/Delete';

const Book: React.FC<BookAsProps> = ({ book }) => {
  const [like, setLike] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const { title, slug, imgUrl, author, isFavorite, _id } = book;
  const router = useRouter();

  const seeBook = () => {
    router.push(`/libro/${slug}`);
  };

  const handleLike = async () => {
    setLike(!like);
    setLoading(true);
    await api.put(`books/${slug}`, { isFavorite: !isFavorite });
    window.location.reload();
    setLoading(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  return (
    <div className='flex flex-col items-center mb-5'>
      <div className='w-3/4 h-60 relative transition-all'>
        <div className='relative h-full group'>
          <img src={imgUrl} alt={title} className='h-full w-full object-contain' />
          {(isFavorite || like) && (
            <div className='absolute bottom-8 md:bottom-6 left-0 bg-white shadow-sm rounded-tr-md rounded-br-md w-16 h-6 flex items-center justify-center'>
              <RiHeartFill className='text-red-800 text-lg' />
            </div>
          )}
          <div className='absolute top-9 md:top-5 flex transition-all duration-700 flex-col scale-0 gap-2 -right-7 group-hover:right-3 group-hover:scale-100'>
            <div
              className='w-7 h-7 bg-white flex justify-center items-center rounded-full cursor-pointer'
              onClick={handleLike}
            >
              {loading ? (
                <RiLoader5Line className=' animate-spin' />
              ) : (
                <>
                  {like || isFavorite ? <RiHeartFill className='text-red-400' /> : <RiHeartLine />}
                </>
              )}
            </div>
            <div
              className='w-7 h-7 bg-white flex justify-center items-center rounded-full cursor-pointer'
              onClick={seeBook}
            >
              <RiEyeLine />
            </div>
            <div
              className='w-7 h-7 bg-white flex justify-center items-center rounded-full cursor-pointer'
              onClick={handleOpenDelete}
            >
              <RiDeleteBin3Line />
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <h1 className='font-bold leading-5 mt-3'>{title}</h1>
        <p className='text-sm mt-2'>{author}</p>
      </div>
      <Delete openDelete={openDelete} setOpenDelete={handleOpenDelete} id={_id} />
    </div>
  );
};

export default Book;
