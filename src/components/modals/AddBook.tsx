import PopUp from '../general/PopUp';
import * as Yup from 'yup';
import Input from '../utils/form/Input';
import { BookValues, AddBookProps } from '@/interfaces';
import { RiCloseCircleLine } from 'react-icons/ri';
import { Formik } from 'formik';
import Textarea from '../utils/form/Textarea';
import Select from '../utils/form/Select';

const AddBook: React.FC<AddBookProps> = ({ open, setOpen }) => {
  const initialValues: BookValues = {
    title: '',
    author: '',
    synopsis: '',
    imgUrl: '',
    publisher: '',
    language: '',
    numberOfPages: '0',
    publicationDate: '',
    isFavourite: false,
  };

  return (
    <PopUp open={open}>
      <div className='bg-white rounded-md p-5 w-96 relative'>
        <RiCloseCircleLine
          className='absolute top-3 right-3 text-2xl cursor-pointer text-gray-400'
          onClick={setOpen}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            title: Yup.string().required('Este campo es obligatorio'),
            author: Yup.string().required('Este campo es obligatorio'),
            synopsis: Yup.string().required('Este campo es obligatorio'),
            publisher: Yup.string().required('Este campo es obligatorio'),
            language: Yup.string().required('Este campo es obligatorio'),
            numberOfPages: Yup.string().required('Este campo es obligatorio'),
            gender: Yup.string().required('Este campo es obligatorio'),
            publicationDate: Yup.string().required('Este campo es obligatorio'),
            isFavourite: Yup.boolean(),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <Input name='title' label='Título' placeholder='Título' />
              <Input name='author' label='Autor' placeholder='Autor' />
              <Textarea name='synopsis' label='Sinopsis' placeholder='Sinopsis' />
              <Input name='publisher' label='Editor' placeholder='Editor' />
              <Input name='imgUrl' label='Imagen' placeholder='Url de la imagen' />
              <Select
                name='language'
                label='Lenguaje'
                placeholder='Selecciona un lenguaje'
                options={[
                  { value: 'english', label: 'Inglés' },
                  { value: 'spanish', label: 'Español' },
                ]}
              />
              <Input name='numberOfPages' label='Número de páginas' type='number' />
              <Input name='publicationDate' label='Fecha de publicación' type='date' />
            </form>
          )}
        </Formik>
      </div>
    </PopUp>
  );
};

export default AddBook;
