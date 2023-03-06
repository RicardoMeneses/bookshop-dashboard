import Dashboard from '@/components/layouts/Dashboard';
import Delete from '@/components/modals/Delete';
import { reduceText } from '@/helpers';
import { useState } from 'react';
import { RiHeartLine, RiEditLine, RiDeleteBin3Line } from 'react-icons/ri';

const ProductDetail = () => {
  const [showMore, setShowMore] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  return (
    <Dashboard>
      <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/3 h-[500px]'>
          <img
            src='https://m.media-amazon.com/images/I/71WDmR4x0zL.jpg'
            alt='libro'
            className='w-full h-full object-contain'
          />
        </div>
        <div className='w-full md:w-1/2 lg:w-2/3 text-center md:text-start'>
          <h1 className='text-4xl font-bold'>Los secretos de la mente millonaria</h1>
          <p className='text-gray-500'>Autor Apellido</p>
          <p className='mt-4 w-full lg:w-3/4'>
            {reduceText(
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est temporibus dolor eius repellat, dicta ullam iure nulla repellendus! Tempora atque saepe voluptatem facilis eaque impedit rerum similique unde! Ipsum totam beatae praesentium optio labore repellendus officiis dolorum repellat dolorem, ut ducimus minima asperiores corrupti qui illum molestiae delectus iste! Doloremque dolore laboriosam adipisci numquam, libero accusantium veritatis optio vero error iste eius expedita! Quidem dolor officiis beatae natus nemo tempore consequuntur quos obcaecati, blanditiis similique illum veniam modi officia alias qui repudiandae numquam. Amet totam dolorum non voluptates nihil nemo deserunt soluta iste atque repellendus, fugit vitae nisi expedita ipsam animi ut repellat laborum dicta doloribus omnis mollitia. Quod vel exercitationem nam consequuntur tenetur cupiditate, magnam minima doloribus delectus, ducimus voluptate rerum quae itaque quos laborum mollitia! Quia maiores saepe ex ducimus repudiandae recusandae eius consectetur perferendis debitis iste numquam optio est ea atque, blanditiis, nesciunt incidunt eveniet itaque laborum rerum aliquam facilis. Consectetur, expedita repudiandae rem necessitatibus debitis consequatur blanditiis nam ipsam amet id exercitationem tempore culpa cupiditate eaque animi nesciunt delectus voluptates illum quia itaque beatae, dignissimos maiores molestiae quis.',
              showMore
            )}
            <span
              className='text-blue-600 underline ml-2 cursor-pointer'
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Ver menos' : 'Ver más'}
            </span>
          </p>
          <p className='mt-5 font-bold'>
            Editora: <span className=' font-normal'>Editor</span>
          </p>
          <p className='font-bold'>
            Lenguaje: <span className=' font-normal'>Español</span>
          </p>
          <p className='font-bold'>
            Número de páginas: <span className=' font-normal'>974</span>
          </p>
          <p className='font-bold'>
            Género: <span className=' font-normal'>Acción</span>
          </p>
          <p className='font-bold'>
            Fecha de publicación: <span className=' font-normal'>18 de Enero 2022</span>
          </p>
          <div className='flex gap-2 mt-5'>
            <button className='flex items-center text-sm lg:text-base justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full p-3 shadow hover:shadow-md'>
              <RiHeartLine /> Añadir a favoritos
            </button>
            <button className='flex items-center text-sm lg:text-base justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full p-3 shadow hover:shadow-md'>
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
      <Delete openDelete={openDelete} setOpenDelete={handleOpenDelete} />
    </Dashboard>
  );
};

export default ProductDetail;
