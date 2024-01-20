import { NavLink } from 'react-router-dom';
// import { NavLinks, Sidebar } from './index';
import { images, navLinks } from '../constants';
import { useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const linkStyles = {
    height: showLinks
      ? `${
          (linksRef.current! as HTMLElement)?.getBoundingClientRect()?.height
        }px` || '0px'
      : '0px',
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className='primary-gradient'>
      <nav className='align-element p-3 md:flex-between md:p-4 '>
        <div className='nav-header flex flex-between md:p-0'>
          <img src={images.logo} alt='logo' className='h-40px' />
          <button
            type='button'
            className='md:hidden text-2xl text-white font-bold'
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>

        <div
          className=' links-container h-0 md:h-auto overflow-hidden transition-all duration-300 text-2xl md:py-2 '
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='md:flex gap-6' ref={linksRef}>
            {navLinks.map(({ id, href, text }) => {
              return (
                <li key={id} className=''>
                  <NavLink
                    to={href}
                    className={`relative text-lg capitalize block py-2 px-4 md:p-0 text-white md:before-element`}
                    onClick={() => setShowLinks(false)}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
