interface IServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ title, description }) => {
  return (
    <article className='px-8 py-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg'>
      <h3 className='font-bold text-2xl tracking-wider capitalize mb-6'>
        {title}
      </h3>
      <p className='text-lg leading-loose tracking-wider'>{description}</p>
    </article>
  );
};
export default ServiceCard;
