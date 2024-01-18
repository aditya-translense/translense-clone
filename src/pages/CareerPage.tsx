import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import {
  SectionTitle,
  Button,
  CareerCard,
  CareerLayoutCard,
  CareerForm,
} from '../components';
import { images, careerCardInfo, careerLayoutCardInfo } from '../constants';

const CareerPage = () => {
  return (
    <>
      <section className='py-20'>
        <div className='align-element flex-center gap-6'>
          <article className='max-w-xl px-12'>
            <SectionTitle className='text-start text-5xl font-bold'>
              Start your <span className='text-clr-yellow'>Career</span> with{' '}
              <span className='text-clr-yellow'>Translense</span>
            </SectionTitle>

            <p className='my-6 text-xl font-bold tracking-wide'>
              We’re rapidly growing with all of our teams. We look for
              self-starters with a bias towards action, a thirst for learning,
              and will for asking the right questions. We strive for Translense
              to be the place where you do your{' '}
              <span className='text-clr-yellow'>life's best work</span>.
            </p>
            <Button>More About Us</Button>
          </article>
          <article>
            <img
              src={images.career1}
              alt='career1'
              className='block w-full object-cover'
            />
          </article>
        </div>
      </section>

      <section className='py-20 bg-gray-100'>
        <div className='align-element flex flex-col'>
          <SectionTitle className='capitalize'>
            We're <span className='text-clr-yellow'>hiring</span>
          </SectionTitle>
          <div className='flex rounded-3xl overflow-hidden mt-20'>
            {careerCardInfo.map(({ id, title, info, className, img }) => (
              <CareerCard
                key={id}
                image={img}
                title={title}
                info={info}
                className={className}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='align-element py-20'>
        <SectionTitle>
          Our Recruitment <span className='text-clr-yellow'>Process</span>
        </SectionTitle>
        <div className='mt-12 flex flex-col justify-center items-center'>
          {careerLayoutCardInfo.map(
            ({ id, image1, image2, title, description }) => (
              <CareerLayoutCard
                key={id}
                image1={image1}
                image2={image2}
                title={title}
                description={description}
              />
            )
          )}
        </div>
      </section>

      <section className='py-20 bg-gray-100'>
        <div className='align-element flex justify-center flex-col'>
          <article className='flex flex-col justify-center'>
            <SectionTitle className='uppercase'>
              Get In <span className='text-clr-yellow'>Touch</span>
            </SectionTitle>
            <p className='w-full max-w-full text-center bg-red text-sm mt-6'>
              For joining do let us know about you . We will be happy to know
              you . Please fill the form and we will reach out to you .
            </p>
          </article>

          <article className='mt-20 overflow-hidden bg-red-200 rounded-3xl flex'>
            <div className='flex-grow-0 flex-shrink-0 w-1/3 bg-primary-gray text-white px-12 py-8 relative'>
              <p className='text-md'>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <p className='text-md my-12'>
                199 , alpha 2 , Greater Noida India
              </p>

              <ul className='mb-12'>
                <li className='text-clr-yellow text-md flex items-center gap-3'>
                  <span className='text-white'>
                    {' '}
                    <FaEnvelope />
                  </span>
                  atul@atulaey.com
                </li>
                <li className='text-clr-yellow text-md flex items-center gap-3'>
                  <span className='text-white'>
                    <FaPhone />
                  </span>{' '}
                  840-040-8888
                </li>
              </ul>
              <Button className='bg-transparent border border-white'>
                BOOK A MEETING !
              </Button>

              <ul className='flex gap-4 mt-20'>
                <li className=' flex items-center justify-center text-primary-gray p-2 text-xl font-bold rounded-full bg-white'>
                  <FaFacebookF />
                </li>
                <li className=' flex items-center justify-center text-primary-gray p-2 text-xl font-bold rounded-full bg-white'>
                  <FaInstagram />
                </li>
                <li className=' flex items-center justify-center text-primary-gray p-2 text-xl font-bold rounded-full bg-white'>
                  <FaLinkedinIn />
                </li>
              </ul>
              <img
                src={images.career11}
                alt=''
                className='absolute bottom-0 right-0'
              />
            </div>

            <div className='flex-1 py-16 px-12 bg-white'>
              <CareerForm />
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
export default CareerPage;
