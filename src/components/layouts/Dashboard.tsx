import { DashboardLayoutProps } from '@/interfaces/dashboard.interface';
import Header from '../Header';
import SideBar from '../SideBar';

const Dashboard: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <SideBar />
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
