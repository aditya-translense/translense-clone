import { ContactForm, SectionTitle } from '../components';
import { images } from '../constants';

const ContactPage = () => {
  return (
    <>
      <section className='py-20 flex-center px-8 gap-16 align-element'>
        <article className=''>
          <SectionTitle className='uppercase text-start font-bold text-6xl mb-6 text-gray-800'>
            Contact <span className='text-clr-yellow'>Us</span>
          </SectionTitle>
          <p className='font-bold text-2xl tracking-wide'>
            Want to grow with an organization where we work as a team and share
            a bond as a family . We
            <span className='text-clr-yellow'>welcome you to TRANSLENSE</span> ,
            an organization where dreams become reality .
          </p>
        </article>
        <article className='flex-center'>
          <img src={images.img1} alt='' className='block-img' />
        </article>
      </section>

      <section className='bg-gray-100'>
        <div className='align-element flex-center py-20 gap-16 '>
          <article>
            <SectionTitle className='mb-8 text-start'>
              Get In <span className='text-clr-yellow'>Touch</span>
            </SectionTitle>
            <ContactForm />
          </article>
          <article>
            <img src={images.img2} alt='' className='block-img' />
          </article>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
