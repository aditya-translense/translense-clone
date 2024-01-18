import { SectionTitle, AboutCard, Button } from '../components';
import { aboutCardInfo, images } from '../constants';

const AboutPage = () => {
  return (
    <>
      <section className='py-20'>
        <div className='align-element flex-center gap-6'>
          <article className='max-w-xl px-12 self-start pt-16'>
            <SectionTitle className='text-start text-5xl font-bold'>
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
        <SectionTitle className=' mr-0'>
          Our Success <span className='text-clr-yellow'>Story</span>
        </SectionTitle>

        <div className='w-full h-[400px] about-header mt-20'></div>
        <div className=' mt-12 flex gap-12 align-element'>
          <div className='relative -top-16 h-[420px] w-[500px] text-white p-12 rounded-2xl about-header-2'>
            <p className='tracking-wider text-lg'>
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

          <div className='flex-1'>
            <div className='relative h-[250px] w-[250px] rounded-full -top-10'>
              <img src={images.about2} alt='' />
            </div>
            <div className='relative left-1/3 -top-20 h-[270px] w-[270px] rounded-full'>
              <img src={images.about3} alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-gray-100'>
        <div className='max-w-[1300px] mx-auto'>
          <SectionTitle>Meet Our Team</SectionTitle>

          <div className='mt-16'>
            <ul className='flex-center gap-12 text-xl w-1/2 mx-auto'>
              <li className=' relative font-semibold after:absolute after:bg-black after:bottom-0 after:h-[2px] after:left-0 after:w-full '>
                <button>All</button>
              </li>
              <li className=' relative font-semibold '>
                <button>Designing</button>
              </li>
              <li className=' relative font-semibold '>
                <button>Development</button>
              </li>
              <li className=' relative font-semibold '>
                <button>Marketing</button>
              </li>
            </ul>

            <div className='mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6'>
              {aboutCardInfo.map(({ id, image, name, info, designation }) => (
                <AboutCard
                  key={id}
                  img={image}
                  name={name}
                  designation={designation}
                  info={info}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-24'>
        <div className='align-element'>
          <div className='flex flex-col justify-start items-start relative mb-20'>
            <p className='text-clr-yellow capitalize text-lg'>Quick Contact</p>
            <SectionTitle className='text-start ml-0'>
              Want to get our services ?
            </SectionTitle>
            <img
              src={images.dottedLineImg}
              alt='dotted image'
              className='absolute w-2/4 left-2/4 top-20 -translate-x-1/2 rotate-6'
            />
          </div>
          <div className='flex justify-end pr-20 '>
            <Button>GET A CALL</Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
