interface ICardProps {
  img: string;
  name: string;
  designation: string;
  info: string;
}

const AboutCard: React.FC<ICardProps> = ({ img, name, designation, info }) => {
  return (
    <article className='rounded-lg overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300'>
      <img src={img} alt={name} className='h-80 block-img' />
      <div className='p-6 leading-10'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <span className='text-sm tracking-wide font-semibold uppercase '>
          ( {designation})
        </span>
        <p className='text-lg tracking-wide'>{info}</p>
      </div>
    </article>
  );
};
export default AboutCard;
