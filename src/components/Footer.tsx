import logo from '../assets/images/logo.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLinks } from './index';

const Footer = () => {
  return (
    <footer className='w-full bg-black py-20 flex-center'>
      <div className='align-element'>
        <div>
          <img src={logo} alt='translense-logo' />
        </div>

        <div className='flex items-start justify-between text-white mt-4'>
          <article className='w-[320px] flex-grow-0 p-4'>
            <p>
              Connect with us Socially and know whats happening at translense.
            </p>
            <h3 className='my-7 text-lg'>SUBSCRIBE US</h3>
            <p>Sign up for our mailing list to get latest updates and offers</p>
            <form action=''>
              <div className='bg-white flex-center p-[2px] rounded-md overflow-hidden text-black mt-12'>
                <input
                  type='text'
                  placeholder='xyz@gmail.com'
                  className='block w-full bg-transparent p-2 rounded-md border-none focus:outline-none'
                />
                <button className='bg-clr-yellow p-2 text-white block px-6 py-3'>
                  <FaArrowRightLong size={20} />
                </button>
              </div>
            </form>
          </article>

          <article className='text-secondary-gray '>
            <h3 className='text-xl mb-7'>CONTACT US</h3>
            <div className='flex flex-col gap-2'>
              <p className='hover:text-white duration-300'>
                1 A 15 Avas Vikas Colony varanasi U.P
              </p>
              <p className=' hover:text-white duration-300'>
                translense@outlook.com
              </p>
              <p className='hover:text-white duration-300'>840-040-8888</p>
            </div>
          </article>

          <article className='flex flex-col items-start'>
            <h3 className='mb-8  text-xl'>USEFUL LINKS</h3>
            <NavLinks
              parentClass='flex-col gap-5 text-md'
              childClass='text-secondary-gray hover:text-white duration-300'
            />
          </article>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
