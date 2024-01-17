import { SectionTitle, Button, ServiceCard } from '../components';
import { serviceCardInfo } from '../constants';
import serviceBgImg from '../assets/images/service-bg.svg';
import quotesIcon from '../assets/images/quotes.svg';
import dottedLineImg from '../assets/images/dotted-line.png';

const ServicesPage = () => {
  return (
    <>
      <section className='flex w-full relative bg-gray-100'>
        <article className='max-w-2xl pt-28 pl-20 text-start'>
          <SectionTitle text='Our Services' className='text-start text-6xl' />
          <p className='mt-6 font-bold tracking-wider text-2xl'>
            Every good company wants to provide excellent customer service, but
            it’s not always easy to balance that with other{' '}
            <span className='text-clr-yellow'>business needs and goals</span>.
            We at Translense focus on providing the best quality service and
            making it better everytime . We analyse the worlds requirements and
            try to come up with the best product . In the field of technology we
            have came very far and always try to come up with the latest and
            trending products .
          </p>
        </article>
        <article className='flex-1 block w-full '>
          <img src={serviceBgImg} alt='' className='w-full h-full ' />
        </article>
      </section>

      <section className='flex flex-col items-center py-24 bg-slate-white'>
        <SectionTitle text='Know our services' />
        <div className='flex max-w-5xl mt-16'>
          <article className='flex items-start gap-8'>
            <img src={quotesIcon} alt='quotes-icon' />
            <h2 className='text-2xl font-bold tracking-wider max-w-xl'>
              We know where our strengths lie and where we need to leverage
              additional expertise, so you get the best results.
            </h2>
          </article>
          <article>
            <p className='text-lg leading-snug tracking-wider'>
              From your very first interaction with us, everything we do is
              built around understanding your goals and the results that you
              really care about. Your goals are our guiding compass, and our
              collaborative approach means we’re able to identify new
              opportunities to improve your business.With our whole team backing
              you, you can’t go wrong.
            </p>
          </article>
        </div>
      </section>

      <section className='bg-gray-50 py-24'>
        <SectionTitle text='What We Do' />
        <div className='align-element mt-16  grid grid-cols-1 md:grid-cols-2 gap-8 '>
          {serviceCardInfo.map(({ id, title, description }) => {
            return (
              <ServiceCard key={id} title={title} description={description} />
            );
          })}
        </div>
        <div></div>
      </section>

      <section className='py-24'>
        <div className='align-element'>
          <div className='flex flex-col justify-start items-start relative mb-12'>
            <p className='text-clr-yellow capitalize'>Quick Contact</p>
            <SectionTitle
              text='Want to get our services ?'
              className='text-start w-full mx-0'
            />
            <img
              src={dottedLineImg}
              alt=''
              className='absolute left-2/4 top-16 -translate-x-1/2 rotate-6'
            />
          </div>
          <div className='flex justify-end pr-20 '>
            <Button text='GET A CALL' />
          </div>
        </div>
      </section>
    </>
  );
};
export default ServicesPage;
