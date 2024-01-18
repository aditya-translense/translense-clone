interface ICardProps {
  img: string;
  name: string;
  designation: string;
  info: string;
}

const AboutCard: React.FC<ICardProps> = ({ img, name, designation, info }) => {
  return (
    <article className=' rounded-md overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300'>
      <div>
        <img src={img} alt={name} className='block w-full' />
      </div>
      <div className='p-6 leading-10'>
        <h3 className='text-2xl mb-2 font-bold'>{name}</h3>
        <h4 className='text-lg tracking-wide mb-4 '>{designation}</h4>
        <p className='text-lg tracking-wider'>{info}</p>
      </div>
    </article>
  );
};
export default AboutCard;
