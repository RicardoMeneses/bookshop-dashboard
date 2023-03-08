import { InputProps } from '@/interfaces';
import { useField } from 'formik';

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { name, type = 'text' } = props;

  return (
    <div className='flex flex-col mt-2'>
      <label htmlFor={name} className='text-sm mb-1'>
        {label}
      </label>
      <input
        {...field}
        {...props}
        type={type}
        className={`border rounded-md h-8 text-gray-600 p-2 ${
          meta.touched && meta.error ? 'border-red-500' : ''
        }`}
      />
      {meta.touched && meta.error ? (
        <div className='text-red-500 text-xs mt-1'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
