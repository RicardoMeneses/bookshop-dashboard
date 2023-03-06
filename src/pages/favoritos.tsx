import Book from '@/components/cards/Book';
import Dashboard from '@/components/layouts/Dashboard';

const Favorites = () => {
  return (
    <Dashboard>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </Dashboard>
  );
};

export default Favorites;
