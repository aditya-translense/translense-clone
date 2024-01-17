import { ContactForm } from '../components';
import { images } from '../constants';

const ContactPage = () => {
  return (
    <section>
      <div className='py-24 flex-center px-20 gap-16 align-element'>
        <article className=''>
          <h1 className='capitalize font-bold text-5xl mb-6'>Contact Us</h1>
          <p className='font-bold text-2xl'>
            Want to grow with an organisation where we work as a team and share
            a bond as a family . We{' '}
            <span className='text-clr-yellow'>welcome you to TRANSLENSE</span> ,
            an organisation where dreams become reality .
          </p>
        </article>
        <article className='flex-center'>
          <img src={images.img1} alt='' className='block w-full object-cover' />
        </article>
      </div>

      <div className='bg-[#f7f9fb]'>
        <div className='align-element py-24 flex-center px-20 gap-16 '>
          <article>
            <h1 className='capitalize font-bold text-5xl mb-8'>
              get In <span className='text-clr-yellow'>Touch</span>
            </h1>
            <ContactForm />
          </article>
          <article>
            <img src={images.img2} alt='' className='block w-full object-cover' />
          </article>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
