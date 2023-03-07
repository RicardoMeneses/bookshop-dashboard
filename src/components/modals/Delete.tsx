import PopUp from '../general/PopUp';
import { DeleteProps } from '@/interfaces';
import { RiCloseCircleLine, RiDeleteBin3Line } from 'react-icons/ri';
import api from '@/services/api';
import { useRouter } from 'next/router';

const Delete: React.FC<DeleteProps> = ({ openDelete, setOpenDelete, id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    await api.delete(`/books/${id}`);
    setOpenDelete();
    if (router.pathname.includes('/libro/')) {
      router.push('/');
      return;
    }
    window.location.reload();
  };
  return (
    <PopUp open={openDelete}>
      <div className=' h-60 w-96 bg-white rounded-md px-8 py-5 relative text-center'>
        <RiCloseCircleLine
          className='absolute top-3 right-3 text-2xl cursor-pointer'
          onClick={setOpenDelete}
        />
        <RiDeleteBin3Line className='mx-auto text-5xl text-red-600' />
        <p className='text-xl mt-3'>¿Estás seguro que deseas eliminar este libro?</p>
        <p className='text-sm mt-1'>Está accion no se puede revertir</p>
        <div className='flex gap-10 mt-5 items-center justify-center'>
          <button className=' outline rounded-full px-2 py-1' onClick={setOpenDelete}>
            Cancelar
          </button>
          <button
            className='outline outline-red-600 text-red-600 rounded-full px-2 py-1'
            onClick={handleDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </PopUp>
  );
};

export default Delete;
