import { images, careerCardInfo, careerLayoutCardInfo } from '../constants';
import {
  SectionTitle,
  Button,
  CareerCard,
  CareerLayoutCard,
} from '../components';

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
              and will for asking the right questions. We strive for Transelense
              to be the place where you do your{' '}
              <span className='text-clr-yellow'>life’s best work</span>.
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
            ({ image1, image2, title, description }) => (
              <CareerLayoutCard
                image1={image1}
                image2={image2}
                title={title}
                description={description}
              />
            )
          )}
        </div>
      </section>

      <section></section>
    </>
  );
};
export default CareerPage;
