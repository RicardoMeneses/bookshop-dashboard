import { SelectProps } from '@/interfaces';
import { useField } from 'formik';

const Select: React.FC<SelectProps> = ({ label, placeholder, options, ...props }) => {
  const [field, meta] = useField(props);
  const { name } = props;

  return (
    <div className='flex flex-col mt-4'>
      <label htmlFor={name} className='text-sm mb-1'>
        {label}
      </label>
      <select
        className={`border rounded-md text-gray-600 p-2 ${
          meta.touched && meta.error ? 'border-red-500' : ''
        }`}
        {...field}
        {...props}
      >
        <option value=''>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className='text-red-500 text-xs mt-1'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Select;
