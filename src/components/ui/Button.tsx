interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`bg-clr-yellow px-10 py-4 rounded-tl-[3px] rounded-br-[3px] rounded-bl-[15px] rounded-tr-[15px] uppercase font-normal hover:scale-105 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
