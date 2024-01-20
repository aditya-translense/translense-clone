interface ICareerLayoutCardProps {
  image1?: string;
  title: string;
  description: string;
  image2?: string;
}

const CareerLayoutCard: React.FC<ICareerLayoutCardProps> = ({
  image1,
  image2,
  title,
  description,
}) => {
  const isDotted1 = image1 && image1.includes('dotted');
  const isDotted2 = image2 && image2.includes('dotted');

  return (
    <article className='shadow-lg lg:shadow-none flex flex-col gap-6 lg:flex-row last:justify-between w-full p-12 last:w-full'>
      <div className=''>
        {image1 && (
          <img
            src={image1}
            alt={title}
            className={`w-full object-cover ${
              isDotted1 ? 'hidden lg:block' : 'block'
            }`}
          />
        )}
      </div>
      <div>
        <h3 className='font-bold text-2xl mb-4 uppercase'>{title}</h3>
        <p className='text-lg tracking-widest max-w-[400px]'>{description}</p>
      </div>
      <div>
        {image2 && (
          <img
            src={image2}
            alt={title}
            className={`w-full object-cover ${
              isDotted2 ? 'hidden lg:block' : 'block'
            }`}
          />
        )}
      </div>
    </article>
  );
};
export default CareerLayoutCard;
