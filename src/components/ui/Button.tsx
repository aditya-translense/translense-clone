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
      className={`bg-clr-yellow px-[50px] py-[15px] rounded-tl-[3px] rounded-br-[3px] rounded-bl-[15px] rounded-tr-[15px] uppercase  font-normal ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
