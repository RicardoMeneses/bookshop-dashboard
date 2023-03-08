import Book from '@/components/cards/Book';
import Dashboard from '@/components/layouts/Dashboard';
import api from '@/services/api';
import { BookValues, HomeProps } from '@/interfaces';
import { GetServerSideProps } from 'next';
import { BsBookshelf } from 'react-icons/bs';

export default function Home({ books }: HomeProps) {
  return (
    <Dashboard>
      {books.length ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
          {books.map((book: BookValues) => (
            <Book book={book} key={book._id} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col h-full w-full justify-center items-center'>
          <BsBookshelf className='text-8xl' />
          <p className='mt-4 text-2xl'>Aún no tienes libros agregados</p>
        </div>
      )}
    </Dashboard>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const books = await api.get('/books');
    return {
      props: {
        books,
      },
    };
  } catch (err) {
    return {
      props: {
        books: [],
      },
    };
  }
};
