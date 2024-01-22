interface ICareerLayoutCardProps {
  image1?: string;
  title: string;
  description: string;
  image2?: string;
  isHidden1?: boolean;
  isHidden2?: boolean;
}

const CareerLayoutCard: React.FC<ICareerLayoutCardProps> = ({
  image1,
  image2,
  title,
  description,
  isHidden1,
  isHidden2,
}) => {
  return (
    <article className='shadow-lg lg:shadow-none flex flex-col gap-6 lg:flex-row last:justify-between w-full p-12 last:w-full'>
      {image1 && (
        <div className={`${isHidden1 ? 'hidden md:block' : ''}`}>
          <img src={image1} alt={title} className={`w-full object-cover`} />
        </div>
      )}

      <div>
        <h3 className='font-bold text-2xl mb-4 uppercase'>{title}</h3>
        <p className='text-lg tracking-widest max-w-[400px]'>{description}</p>
      </div>

      {image2 && (
        <div className={isHidden2 ? 'hidden md:block' : ''}>
          <img src={image2} alt={title} className={`w-full object-cover `} />
        </div>
      )}
    </article>
  );
};
export default CareerLayoutCard;
