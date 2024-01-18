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
  return (
    <article className='flex last:justify-between w-full p-12 last:w-full'>
      <div className=''>
        {image1 && (
          <img src={image1} alt={title} className='block w-full object-cover' />
        )}
      </div>
      <div>
        <h3 className='font-bold text-2xl mb-4 uppercase'>{title}</h3>
        <p className='text-lg tracking-widest max-w-[400px]'>{description}</p>
      </div>
      <div>
        {image2 && (
          <img src={image2} alt={title} className='block w-full object-cover' />
        )}
      </div>
    </article>
  );
};
export default CareerLayoutCard;
