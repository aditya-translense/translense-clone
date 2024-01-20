interface ICheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  interest: string;
  formData: {
    interestedArea: string[];
  };
}
const Checkbox: React.FC<ICheckbox> = ({
  formData,
  onChange,
  label,
  interest,
}) => {
  const isChecked = formData.interestedArea.includes(interest);
  return (
    <label
      htmlFor={`interestedArea_${interest}`}
      className='cursor-pointer duration-300 transition-all text-sm capitalize hover:border-gray-900 p-2 flex items-center justify-center border border-gray-400 rounded-full'
    >
      <input
        type='checkbox'
        name='interestedArea'
        value={interest}
        id={`interestedArea_${interest}`}
        checked={isChecked}
        className='appearance-none'
        onChange={onChange}
      />
      {label}
    </label>
  );
};
export default Checkbox;
