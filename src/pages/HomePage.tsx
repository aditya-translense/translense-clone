import { FaCheck } from 'react-icons/fa6';
import { Button, SectionTitle, WhyUsCard } from '../components';
import { whyUsInfo, images } from '../constants';

const HomePage = () => {
  return (
    <>
      <section className='header relative min-h-screen py-20'>
        <div className='align-element flex-center flex-col md:flex-row gap-20 '>
          {/* Hero Info */}
          <article className='text-white'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Achieving Incredible
            </h2>
            <p className='mb-4 text:md md:text-lg leading-7 tracking-wide'>
              Translense products focus on providing digital platform for system
            </p>
            <ul className='flex flex-col gap-3'>
              <li className='flex gap-3 text-sm md:text-base font-normal'>
                <FaCheck className='text-clr-yellow' />
                Power of digitalisation
              </li>
              <li className='flex text-sm md:text-base gap-3'>
                <FaCheck className='text-clr-yellow' />
                Enabling transparency
              </li>

              <div className='flex items-center gap-4 mt-8'>
                <Button className='border-2 bg-transparent text-white'>
                  LEARN MORE
                </Button>
                <Button className='bg-clr-yellow text-primary-gray'>
                  JOIN US
                </Button>
              </div>
            </ul>
          </article>
          {/* Hero Image */}
          <article>
            <img
              src={images.heroImg}
              alt='hero-img'
              className='block-element'
            />
          </article>
        </div>
      </section>

      <section className='py-20 '>
        <div className='align-element'>
          {/*  */}
          <SectionTitle className='normal-case relative'>
            We create <span className='text-clr-yellow'>lovable</span> products
            going from vision to launch
            <img
              src={images.patternImg3}
              alt='pattern-img-3'
              className='absolute right-0 top-0'
            />
          </SectionTitle>
          {/*  */}
          <div className='md:flex justify-center relative mt-24'>
            <article className='self-stretch flex-1'>
              <img
                src={images.visionImg}
                alt='vision-img'
                className='block w-full object-cover'
              />
            </article>

            {/*  */}
            <article className='flex flex-1 items-center self-stretch'>
              <div className='p-8 text-center lg:text-start lg:p-16  bg-green-shade rounded-tr-2xl rounded-br-2xl'>
                <p className='text-xs md:text-base leading-5 tracking-wider'>
                  <span className='font-bold'>Odriyo</span> ( Launching 15 , JAN
                  , 2022)
                </p>
                <h3 className='my-3 md:my-4 font-bold text-xl md:text-2xl tracking-wide '>
                  Serving you the best lodging and fooding facilities
                </h3>
                <p className='text-sm md:text-lg tracking-tight'>
                  Getting the facilities on finger tips has never been so easy .
                  We provide the accessibility of all the service just by few
                  clicks.
                </p>
              </div>
            </article>
            <img
              src={images.patternImg4}
              alt='pattern-img-4'
              className='absolute right-0 -bottom-28'
            />
          </div>
        </div>
      </section>

      <section className=' py-20'>
        <div className='align-element'>
          <SectionTitle>
            Why Choose <span className='text-clr-yellow'>Us</span> ?
          </SectionTitle>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-12 mt-16'>
            {whyUsInfo.map(({ id, title, subtitle, info, icon }) => {
              return (
                <WhyUsCard
                  key={id}
                  title={title}
                  subtitle={subtitle}
                  info={info}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className='relative align-element flex-center flex-col'>
          <img
            src={images.patternImg1}
            alt='pattern-1'
            className='absolute hidden w-36 lg:flex left-10'
          />
          <SectionTitle>
            Join Our Team And Live{' '}
            <span className='text-clr-yellow uppercase'>YOUR</span> Dream
          </SectionTitle>
          <Button className='mx-auto mt-12 lg:mt-24'>PARTNER WITH US</Button>
          <img
            src={images.patternImg2}
            alt='pattern-2'
            className='absolute  hidden w-36 lg:flex right-10'
          />
        </div>
      </section>
    </>
  );
};
export default HomePage;
