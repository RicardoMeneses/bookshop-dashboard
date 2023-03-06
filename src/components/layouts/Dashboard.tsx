import { DashboardLayoutProps } from '@/interfaces/dashboard.interface';
import Header from '../general/Header';
import SideBar from '../general/SideBar';

const Dashboard: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <SideBar />
      <Header />
      <main className='lg:pl-[260px] p-8 pt-36 md:pt-28'>{children}</main>
    </div>
  );
};

export default Dashboard;
