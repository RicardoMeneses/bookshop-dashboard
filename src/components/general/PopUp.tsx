import { PopUpProps } from '@/interfaces';

const PopUp: React.FC<PopUpProps> = ({ children, open }) => {
  return (
    <div
      className={`flex backdrop-blur-sm transition-all overflow-scroll duration-500 fixed top-0 left-0 w-full h-full z-50 bg-black/75 items-center justify-center ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default PopUp;
