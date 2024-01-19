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
      className={`relative text-white flex flex-col px-6 text-center flex-auto items-center justify-center h-[400px] w-full lg:w-1/3 p-12 ${className}`}
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
