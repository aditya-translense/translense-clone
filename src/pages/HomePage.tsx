import { FaCheck } from 'react-icons/fa6';
import { Button, SectionTitle, WhyUsCard } from '../components';
import { whyUsInfo,images } from '../constants';

const HomePage = () => {
  return (
    <>
      <div className='header relative min-h-screen'>
        <div className='absolute w-full h-full flex-center '>
          <div className='align-element flex items-center justify-center gap-20 '>
            <article className='text-white'>
              <h2 className='text-5xl text-white font-bold mb-6'>
                Achieving Incredible
              </h2>
              <p className='mb-4 text-lg leading-7 tracking-wide'>
                Translense products focus on providing digital platform for
                system
              </p>
              <ul className='flex flex-col gap-3'>
                <li className='flex gap-3 text-base font-normal'>
                  <span>
                    <FaCheck className='text-clr-yellow' />
                  </span>
                  Power of digitalisation
                </li>
                <li className='flex gap-3'>
                  <span>
                    <FaCheck className='text-clr-yellow' />
                  </span>
                  Enabling transparency
                </li>

                <div className='flex items-center gap-4 mt-8'>
                  <Button
                    text='LEARN MORE'
                    className='border-2 bg-transparent text-white'
                  />
                  <Button
                    text='JOIN US'
                    className='bg-clr-yellow text-primary-gray'
                  />
                </div>
              </ul>
            </article>
            <article>
              <img src={images.heroImg} alt='hero-img' />
            </article>
          </div>
        </div>
      </div>

      <section className='align-element'>
        <div className=' py-20 '>
          <SectionTitle text='We Create lovable products going from vision to launch' />
          <div className='flex justify-center relative mt-24'>
            <img
              src={images.patternImg3}
              alt='pattern-img-3'
              className='absolute right-36 -top-52'
            />
            <article className='self-stretch'>
              <img
                src={images.visionImg}
                alt='vision-img'
                className='block w-full object-cover'
              />
            </article>

            <article className='flex items-center self-stretch flex-1'>
              <div className='py-24 pl-16 pr-28  bg-green-shade rounded-tr-2xl rounded-br-2xl'>
                <p className='text-base leading-5 tracking-wider'>
                  <span className='font-bold'>Odriyo</span> ( Launching 15 , JAN
                  , 2022)
                </p>
                <h3 className='my-4 font-bold text-2xl leading-snug'>
                  Serving you the best lodging and fooding facilities
                </h3>
                <p className='text-lg tracking-tight'>
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

        <div className=' py-20'>
          <SectionTitle text='Why Choose Us ?' />
          <div className='flex gap-12 mt-24'>
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

        <div className=' relative py-20 flex-center flex-col'>
          <img src={images.patternImg1} alt='pattern-1' className='absolute left-10' />
          <SectionTitle text='Join Our Team And Live YOUR Dream' />
          <Button text='PARTNER WITH US' className='mx-auto mt-24' />
          <img
            src={images.patternImg2}
            alt='pattern-2'
            className='absolute right-10'
          />
        </div>
      </section>
    </>
  );
};
export default HomePage;
