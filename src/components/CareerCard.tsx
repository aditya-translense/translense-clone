interface ICardProps {
  title: string;
  info: string;
  image: string;
  className: string;
}

const CareerCard: React.FC<ICardProps> = ({
  title,
  info,
  image,
  className,
}) => {
  return (
    <article
      className={`relative text-white flex flex-col px-6 text-center  flex-1 items-center justify-center h-[400px] ${className}`}
    >
      <img
        src={image}
        alt=''
        className='block object-cover absolute w-full h-full'
      />
      <h3 className='mb-4 font-bold tracking-widest text-5xl'>{title}</h3>
      <p className='font-semibold text-lg'>{info}</p>
    </article>
  );
};

export default CareerCard;
