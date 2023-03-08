import Dashboard from '@/components/layouts/Dashboard';
import Delete from '@/components/modals/Delete';
import api from '@/services/api';
import { reduceText } from '@/helpers';
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { RiHeartLine, RiEditLine, RiDeleteBin3Line, RiLoader5Line } from 'react-icons/ri';
import { BookAsProps } from '@/interfaces';
import AddBook from '@/components/modals/AddBook';

const ProductDetail: React.FC<BookAsProps> = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAddBook, setOpenAddBook] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    imgUrl,
    synopsis,
    title,
    _id,
    author,
    publicationDate,
    numberOfPages,
    language,
    publisher,
    isFavorite,
    slug,
  } = book;

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  const handleLike = async () => {
    setLoading(true);
    await api.put(`books/${slug}`, { isFavorite: !isFavorite });
    window.location.reload();
    setLoading(false);
  };

  const handleOpen = () => {
    setOpenAddBook(!openAddBook);
  };

  const languages: Record<string, string> = {
    english: 'Inglés',
    spanish: 'Español',
  };

  return (
    <Dashboard title={title}>
      <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/3 h-[500px]'>
          <img src={imgUrl} alt={title} className='w-full h-full object-contain' />
        </div>
        <div className='w-full md:w-1/2 lg:w-2/3 text-center md:text-start'>
          <p className='text-gray-500 font-bold'>{author}</p>
          <p className='mt-4 w-full lg:w-3/4'>
            {reduceText(synopsis, showMore)}
            {synopsis.length > 400 && (
              <span
                className='text-blue-600 underline ml-2 cursor-pointer'
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? 'Ver menos' : 'Ver más'}
              </span>
            )}
          </p>
          <p className='mt-5 font-bold'>
            Editora: <span className=' font-normal'>{publisher}</span>
          </p>
          <p className='font-bold'>
            Lenguaje: <span className=' font-normal'>{languages[language]}</span>
          </p>
          <p className='font-bold'>
            Número de páginas: <span className=' font-normal'>{numberOfPages}</span>
          </p>
          <p className='font-bold'>
            Fecha de publicación: <span className=' font-normal'>{publicationDate}</span>
          </p>
          <div className='flex gap-2 mt-5'>
            <button
              className='flex items-center text-sm lg:text-base justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full p-3 shadow hover:shadow-md'
              onClick={handleLike}
            >
              {loading ? (
                <RiLoader5Line className=' animate-spin' />
              ) : (
                <>
                  <RiHeartLine /> {isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                </>
              )}
            </button>
            <button
              className='flex items-center text-sm lg:text-base justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full p-3 shadow hover:shadow-md'
              onClick={handleOpen}
            >
              <RiEditLine /> Editar
            </button>
            <button
              className='flex items-center text-sm lg:text-base justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full p-3 shadow hover:shadow-md'
              onClick={handleOpenDelete}
            >
              <RiDeleteBin3Line /> Eliminar
            </button>
          </div>
        </div>
      </div>
      <Delete openDelete={openDelete} setOpenDelete={handleOpenDelete} id={_id} />
      <AddBook open={openAddBook} setOpen={handleOpen} isNew={false} book={book} />
    </Dashboard>
  );
};

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const book = await api.get(`/books/${context.params?.slug}`);
    if (!book) {
      return {
        redirect: {
          destination: '/',
        },
      };
    }
    return {
      props: {
        book,
      },
    };
  } catch (err) {
    return {
      props: {
        book: {},
      },
    };
  }
};
