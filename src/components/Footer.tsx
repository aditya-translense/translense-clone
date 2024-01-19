import { images, navLinks } from '../constants';
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full bg-black py-20 flex-center'>
      <div className='align-element'>
        <div>
          <img src={images.logo} alt='translense-logo' className='block w-60' />
        </div>

        <div className='flex flex-col lg:flex-row items-start justify-between text-white mt-4 gap-12'>
          <article className='flex-grow-0 p-4 lg:text-lg'>
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
                <button className='bg-clr-yellow p-2 text-white block rounded-md px-6 py-3'>
                  <FaArrowRightLong size={20} />
                </button>
              </div>
            </form>
          </article>

          <article className='text-secondary-gray '>
            <h3 className='text-xl mb-3'>CONTACT US</h3>
            <div className='flex flex-col gap-2'>
              <p className='hover:text-clr-yellow transition-all duration-300'>
                1 A 15 Avas Vikas Colony varanasi U.P
              </p>
              <p className=' hover:text-white duration-300'>
                translense@outlook.com
              </p>
              <p className='hover:text-white duration-300'>840-040-8888</p>
            </div>
          </article>

          <article className='flex flex-col items-start'>
            <h3 className='mb-4  text-xl'>USEFUL LINKS</h3>
            <ul
              className={`flex flex-wrap items-center justify-start gap-4 text-gray-400 md:flex-col`}
            >
              {navLinks.map(({ id, href, text }) => {
                return (
                  <li key={id}>
                    <NavLink
                      to={href}
                      className={`block text-lg text-start font-normal hover:text-clr-yellow transition-colors duration-300 capitalize`}
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
        <article className='flex flex-wrap gap-4 justify-between items-center mt-12 text-white'>
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Design by
            <span className='text-gray-500 capitalize hover hover:text-clr-yellow transition-all duration-300 '>
              {' '}
              <NavLink to='/'>Translense pvt ltd.</NavLink>
            </span>
          </p>
          <p>Terms Of Use</p>
          <p>Privacy & Security Statement</p>
        </article>
      </div>
    </footer>
  );
};
export default Footer;
