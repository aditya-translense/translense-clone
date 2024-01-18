interface ICareerFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const CareerFormInput: React.FC<ICareerFormInput> = ({
  label,
  name,
  type,
  value,
  onChange,
  id,
  placeholder,
  className,
  required,
}) => {
  return (
    <div className='flex flex-col gap-1  w-full'>
      <label className='capitalize text-sm tracking-wider' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`outline-none border-b border-b-gray-400 py-3 placeholder:text-gray-400 block w-full ${className}`}
        required={required}
      />
    </div>
  );
};
export default CareerFormInput;
