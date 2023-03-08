import { DashboardLayoutProps } from '@/interfaces';
import { useState } from 'react';
import Header from '../general/Header';
import SideBar from '../general/SideBar';
import AddBook from '../modals/AddBook';

const Dashboard: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [openAddBook, setOpenAddBook] = useState(false);
  const handleOpen = () => {
    setOpenAddBook(!openAddBook);
  };
  return (
    <div className='min-h-screen'>
      <SideBar />
      <Header setOpen={handleOpen} />
      <main className='lg:pl-[260px] p-8 pt-36 md:pt-28'>{children}</main>

      <AddBook open={openAddBook} setOpen={handleOpen} isNew={false} />
    </div>
  );
};

export default Dashboard;
