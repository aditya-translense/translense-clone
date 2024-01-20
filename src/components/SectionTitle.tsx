interface ISectionTitleProps {
  className?: string;
  children: React.ReactNode;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={`font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#212529] capitalize text-center max-w-xl mx-auto ${className}`}
    >
      {children}
    </h2>
  );
};
export default SectionTitle;
