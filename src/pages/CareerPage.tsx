import {
  SectionTitle,
  Button,
  CareerCard,
  CareerLayoutCard,
} from '../components';
import career1 from '../assets/images/career1.png';
import career2 from '../assets/images/career2.svg';
import career3 from '../assets/images/career3.svg';
import career4 from '../assets/images/career4.svg';
import career5 from '../assets/images/career5.png';
import career6 from '../assets/images/career6.png';
import career7 from '../assets/images/career7.png';
import career8 from '../assets/images/career8.png';
import career9 from '../assets/images/career9.png';
// import career10 from '../assets/images/career10.png';
// import career11 from '../assets/images/career11.png';
import dottedLineLeft from '../assets/images/dotted-line-left.svg';
import dottedLineRight from '../assets/images/dotted-line-right.svg';

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
              src={career1}
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
              image={career2}
              title='UI/UX'
              info='  Designing and developing a UI/UX with easy flow and better user
                gathering.'
              className='bg-[rgba(40,60,134,.5)]'
            />
            <CareerCard
              image={career3}
              title='UI/UX'
              info='  Designing and developing a UI/UX with easy flow and better user
                gathering.'
              className='bg-[rgba(255,193,7,0.5)]'
            />
            <CareerCard
              image={career4}
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
            image1={career5}
            image2={dottedLineRight}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={dottedLineLeft}
            image2={career6}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={career7}
            image2={dottedLineRight}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={dottedLineLeft}
            image2={career8}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image1={career8}
            image2={dottedLineRight}
            title='1)Application'
            description='Review the minimum qualification of the job. If qualify then apply on our website www.atulaey.com'
          />
          <CareerLayoutCard
            image2={career9}
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
