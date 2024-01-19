interface IServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ title, description }) => {
  return (
    <article className='p-8 bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-300 rounded-xl'>
      <h3 className='font-bold text-2xl tracking-wide capitalize mb-4'>
        {title}
      </h3>
      <p className='text-lg leading-8 tracking-wider'>{description}</p>
    </article>
  );
};
export default ServiceCard;
