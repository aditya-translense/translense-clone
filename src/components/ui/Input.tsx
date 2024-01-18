interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
}

const Input: React.FC<IFormInput> = ({ type, name, placeholder, icon }) => {
  return (
    <div className='bg-white rounded-xl flex-between gap-1 px-3 border-2 border-transparent focus-within:border-blue-300 focus-within:shadow-blue-300 shadow-xs'>
      {icon}
      <input
        type={type}
        name={name}
        className='block w-full rounded-3xl placeholder:capitalize border-0 outline-none p-3  text-gray-900 placeholder:text-gray-400 font-medium sm:text-sm sm:leading-6'
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
