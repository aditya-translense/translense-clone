interface ICardProps {
  title: string;
  subtitle: string;
  info: string;
  icon: string;
}

const WhyUsCard: React.FC<ICardProps> = ({ title, subtitle, info, icon }) => {
  return (
    <article className='relative shadow-lg p-12 bg-[#F4F5F6] transition-all duration-300 hover:shadow-xl rounded-md'>
      <img
        src={icon}
        className='h-16 w-16 absolute top-4 -left-0 -translate-x-1/2 '
      />
      <h2 className='text-lg font-semibold tracking-wider capitalize'>
        {title}
      </h2>
      <h3 className='text-lg tracking-wider capitalize my-6'>{subtitle}</h3>
      <p className='tracking-wider leading-5'>{info}</p>
    </article>
  );
};
export default WhyUsCard;
