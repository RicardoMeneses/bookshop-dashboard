import { DashboardLayoutProps } from '@/interfaces/dashboard.interface';
import SideBar from '../SideBar';

const Dashboard: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className=' min-h-screen'>
      <SideBar />
      <div>{children}</div>
    </div>
  );
};

export default Dashboard;
