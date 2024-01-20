import { useEffect, useState } from 'react';
import { SectionTitle, AboutCard, Button } from '../components';
import { aboutCardInfo, images } from '../constants';

const roles = ['all', 'designing', 'development', 'marketing'];
const AboutPage = () => {
  const [active, setActive] = useState('all');
  const [filteredData, setFilteredData] = useState(aboutCardInfo);

  const handleFilter = (category: string) => {
    if (category === 'all') {
      setActive('all');
      setFilteredData(aboutCardInfo);
    } else {
      const filtered = aboutCardInfo.filter((item) => item.role === category);
      setActive(category);
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    handleFilter(active);
  }, [active]);

  return (
    <>
      <section className='py-6'>
        <div className='align-element md:flex-center gap-6'>
          <article className='max-w-xl md:px-6 self-start pt-16'>
            <SectionTitle className='text-start'>
              About <span className='text-clr-yellow'>Us</span>
            </SectionTitle>

            <p className='my-6 text-2xl font-bold tracking-wider'>
              Born out of passion for well crafted digital experience.{' '}
              <span className='text-clr-yellow'>At Translense</span>. , we’re
              building industry-changing products and tools empowering people. A
              team who believe in action , not words .
            </p>
          </article>
          <article>
            <img
              src={images.about1}
              alt='career1'
              className='block w-full object-cover'
            />
          </article>
        </div>
      </section>

      <section className='py-20'>
        <div className='align-element'>
          <SectionTitle className=' mr-0'>
            Our Success <span className='text-clr-yellow'>Story</span>
          </SectionTitle>
        </div>
        {/*  */}
        <div className='w-full min-h-60 md:min-h-96 about-header mt-12'></div>
        {/*  */}
        <article className=' lg:flex align-element gap-12'>
          <div className='lg:w-[60%]  self-stretch text-white p-6 md:p-16 rounded-2xl about-header-2 -translate-y-14'>
            <p className='tracking-wide leading-6 md:leading-8 md:text-lg'>
              When thoughts starts converting to reality , impossible start
              converting to possibility , we stand there . Emerging from small
              part of the country and making up the mind to acheive big . From
              spark in mind to build something new to actually acheiving it is
              what that makes 'Translense' . The Mantra we followed is 'Dreaming
              big and never give up'. It's not done yet. We keep on moving
              forward with a great team and building products which will lead to
              empower people .
            </p>
          </div>

          <div className='flex lg:flex-col items-start mt-2 justify-center gap-x-16 flex-1'>
            <div className='flex-1'>
              <img
                src={images.about2}
                alt=''
                className='block-img lg:w-56 w-full'
              />
            </div>
            <div className='place-self-end flex-1 '>
              <img
                src={images.about3}
                alt=''
                className='block-img lg:w-56 w-full'
              />
            </div>
          </div>
        </article>
      </section>

      <section className='py-20 bg-gray-100'>
        <div className='align-element mx-auto'>
          <SectionTitle className='ml-0'>
            Meet Our <span className='text-clr-yellow'>Team</span>
          </SectionTitle>

          <div className='mt-12'>
            <div className='flex justify-between flex-center gap-2 text-xl mx-auto max-w-md'>
              {roles.map((role, index) => (
                <button
                  onClick={(e) =>
                    setActive((e.target as HTMLButtonElement).innerHTML)
                  }
                  className={`relative capitalize text-base tracking-wider transition-all duration-300 ${
                    role === active
                      ? 'text-clr-yellow after:absolute after:h-[2px] antialiased after:-bottom-1 after:left-0 after:bg-black after:w-full after:rounded:lg'
                      : ''
                  }`}
                  key={index}
                >
                  {role}
                </button>
              ))}
            </div>

            {/*  after:absolute after:bg-black after:bottom-0 after:h-[2px] after:left-0 after:w-full */}
            <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
              {filteredData.map(({ id, image, name, info, designation }) => {
                return (
                  <AboutCard
                    key={id}
                    img={image}
                    name={name}
                    designation={designation}
                    info={info}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='py-24'>
        <div className='align-element'>
          <div className='flex flex-col justify-start items-start'>
            <p className='text-clr-yellow capitalize text-md'>Quick Contact</p>
            <SectionTitle className='text-start ml-0 normal-case'>
              Want to <span className='text-clr-yellow'>grow</span> with us ?
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
export default AboutPage;
