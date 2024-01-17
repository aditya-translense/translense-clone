interface ISectionTitleProps {
  text: string;
  className?: string;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({ text, className }) => {
  return (
    <h2
      className={`font-bold text-[42px] leading-tight text-[#212529] text-center max-w-2xl mx-auto ${className}`}
    >
      {text}
    </h2>
  );
};
export default SectionTitle;
