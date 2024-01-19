import { SectionTitle, Button, ServiceCard } from '../components';
import { serviceCardInfo, images } from '../constants';

const ServicePage = () => {
  return (
    <>
      <section className='flex flex-col lg:flex-row relative bg-gray-100 gap-16'>
        <article className=' pt-20 pl-20 text-start'>
          <SectionTitle className='text-start ml-0'>Our Services</SectionTitle>
          <p className='mt-6 font-bold tracking-wider text-xl max-w-md text-ellipsis'>
            Every good company wants to provide excellent customer service, but
            it's not always easy to balance that with other{' '}
            <span className='text-clr-yellow'>business needs and goals</span>.
            We at Translense focus on providing the best quality service and
            making it better every time . We analyZe the worlds requirements and
            try to come up with the best product . In the field of technology we
            have came very far and always try to come up with the latest and
            trending products .
          </p>
        </article>
        <article className='flex-1 block w-full '>
          <img src={images.serviceBgImg} alt='' className='w-full h-full ' />
        </article>
      </section>

      <section className='flex flex-col items-center py-20 bg-slate-white'>
        <SectionTitle>
          Know our <span className='text-clr-yellow'>services</span>
        </SectionTitle>
        <div className='lg:flex mt-20 max-w-5xl gap-6 align-element'>
          <article className='flex-1 flex items-start justify-end gap-6 mb-4 lg:m-auto'>
            <img
              src={images.quotesIcon}
              alt='quotes-icon'
              className='w-16  md:w-20 h-16  md:h-20 '
            />
            <h2 className='text-xl md:text-2xl font-bold tracking-wide'>
              We know where our strengths lie and where we need to leverage
              additional expertise, so you get the best results.
            </h2>
          </article>
          <article className='text-base md:text-lg flex flex-1 items-start justify-start '>
            <p className='text-md leading-8 tracking-wider'>
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

      <section className='bg-gray-100 py-20'>
        <SectionTitle>
          What We <span className='text-clr-yellow'>Do</span>
        </SectionTitle>
        <div className='align-element mt-16  grid grid-cols-1 md:grid-cols-2 gap-6 '>
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
          <div className='flex flex-col justify-start items-start'>
            <p className='text-clr-yellow capitalize text-md'>Quick Contact</p>
            <SectionTitle className='text-start ml-0'>
              Want to get our <span className='text-clr-yellow'>services</span>{' '}
              ?
            </SectionTitle>
            <div className='  w-full flex justify-center items-center'>
              <img
                src={images.dottedLineImg}
                alt='dotted image'
                className='hidden md:flex text-center mx-auto w-[50%] rotate-12'
              />
            </div>
          </div>
          <div className='flex justify-end items-start mt-8 pr-16'>
            <Button>GET A CALL</Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServicePage;
