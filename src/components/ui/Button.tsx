interface IButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({
  text,
  className,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`bg-clr-yellow px-[50px] py-[15px] rounded-tl-[3px] rounded-br-[3px] rounded-bl-[15px] rounded-tr-[15px] capitalize font-normal ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
