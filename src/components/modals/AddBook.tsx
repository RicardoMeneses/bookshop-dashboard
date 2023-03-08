import PopUp from '../general/PopUp';
import * as Yup from 'yup';
import Input from '../utils/form/Input';
import Textarea from '../utils/form/Textarea';
import Select from '../utils/form/Select';
import api from '@/services/api';
import { AddBookValues, AddBookProps } from '@/interfaces';
import { RiCloseCircleLine } from 'react-icons/ri';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

const AddBook: React.FC<AddBookProps> = ({ open, setOpen }) => {
  const initialValues: AddBookValues = {
    title: '',
    author: '',
    synopsis: '',
    imgUrl: '',
    publisher: '',
    language: '',
    numberOfPages: 0,
    publicationDate: '',
    isFavorite: false,
  };

  const closeModal = (resetForm: Function) => {
    setOpen();
    resetForm();
  };

  return (
    <PopUp open={open}>
      <div className='bg-white rounded-md p-5 w-96 h-[700px] md:w-[450px] md:h-auto overflow-scroll relative'>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            title: Yup.string().required('Este campo es obligatorio'),
            author: Yup.string().required('Este campo es obligatorio'),
            synopsis: Yup.string().required('Este campo es obligatorio'),
            publisher: Yup.string().required('Este campo es obligatorio'),
            language: Yup.string().required('Este campo es obligatorio'),
            imgUrl: Yup.string()
              .matches(
                /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                'Debe ser una url valida de imagen [jpg|gif|png|jpeg]'
              )
              .required('Este campo es obligatorio'),
            numberOfPages: Yup.number()
              .min(1, 'El númer de páginas debe ser mayor a 0')
              .required('Este campo es obligatorio'),
            publicationDate: Yup.string().required('Este campo es obligatorio'),
            isFavorite: Yup.boolean(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            api
              .post('books', values)
              .then((res) => {
                setOpen();
                window.location.reload();
                toast.success('Libro agregado correctamente');
              })
              .catch((err) => {
                setSubmitting(false);
                toast.error('No se pudo agregar el libro :(');
              });
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <RiCloseCircleLine
                className='absolute top-3 right-3 text-2xl cursor-pointer text-gray-400'
                onClick={closeModal.bind(null, formik.resetForm)}
              />
              <h1 className='text-center font-bold'>Agregar nuevo libro</h1>
              <Input name='title' label='Título' placeholder='Título' />
              <Input name='author' label='Autor' placeholder='Autor' />
              <Textarea name='synopsis' label='Sinopsis' placeholder='Sinopsis' />
              <Input name='publisher' label='Editor' placeholder='Editor' />
              <Input name='imgUrl' label='Imagen' placeholder='Url de la imagen' />
              <div className='flex items-center justify-center gap-1'>
                <div className='w-2/3'>
                  <Select
                    name='language'
                    label='Lenguaje'
                    placeholder='Selecciona un lenguaje'
                    options={[
                      { value: 'english', label: 'Inglés' },
                      { value: 'spanish', label: 'Español' },
                    ]}
                  />
                </div>
                <div className='w-1/3'>
                  <Input name='numberOfPages' label='# de páginas' type='number' />
                </div>
              </div>
              <Input name='publicationDate' label='Fecha de publicación' type='date' />

              <div className='flex gap-3 justify-around mt-5'>
                <button
                  className='outline py-2 px-3 rounded-full text-gray-400'
                  onClick={closeModal.bind(null, formik.resetForm)}
                  disabled={formik.isSubmitting}
                >
                  Cancelar
                </button>
                <button
                  type='submit'
                  className=' outline py-2 px-3 rounded-full'
                  disabled={formik.isSubmitting}
                >
                  Guardar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </PopUp>
  );
};

export default AddBook;
