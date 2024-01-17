import {images} from '../constants'
import {
  SectionTitle,
  Button,
  CareerCard,
  CareerLayoutCard,
} from '../components';

const CareerPage = () => {
  return (
    <>
      <section className='align-element flex flex-col items-center py-24'>
        <div className='flex-center gap-6'>
          <article className='max-w-xl px-12'>
            <SectionTitle
              text='Start your Career with Translense'
              className='text-start text-5xl font-bold'
            />
            <p className='my-8 text-2xl font-bold tracking-wide '>
              We’re rapidly growing with all of our teams. We look for
              self-starters with a bias towards action, a thirst for learning,
              and will for asking the right questions. We strive for Transelense
              to be the place where you do your{' '}
              <span className='text-clr-yellow'>life’s best work</span>.
            </p>
            <Button text='More About Us' />
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

      <section className='py-24 bg-gray-100'>
        <div className='align-element flex flex-col'>
          <SectionTitle text="We're hiring" className='capitalize' />
          <div className='flex rounded-3xl overflow-hidden mt-20'>
            <CareerCard
              image={images.career2}
              title='UI/UX'
              info='  Designing and developing a UI/UX with easy flow and better user
                gathering.'
              className='bg-[rgba(40,60,134,.5)]'
            />
            <CareerCard
              image={images.career3}
              title='UI/UX'
              info='  Designing and developing a UI/UX with easy flow and better user
                gathering.'
              className='bg-[rgba(255,193,7,0.5)]'
            />
            <CareerCard
              image={images.career4}
              title='UI/UX'
              info='  Designing and developing a UI/UX with easy flow and better user
                gathering.'
              className='bg-[rgba(69,162,127,.5)]'
            />
          </div>
        </div>
      </section>

      <section className='align-element py-24'>
        <SectionTitle text='Our Recruitment Process' />
        <div className='mt-20 flex flex-col justify-center items-center'>
          <CareerLayoutCard
            image1={images.career5}
            image2={images.dottedLineRight}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={images.dottedLineLeft}
            image2={images.career6}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={images.career7}
            image2={images.dottedLineRight}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={images.dottedLineLeft}
            image2={images.career8}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={images.career9}
            image2={images.dottedLineRight}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image2={images.career10}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
        </div>
      </section>

      <section></section>
    </>
  );
};
export default CareerPage;
