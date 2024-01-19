import { Link } from 'react-router-dom';
import { NavLinks, Sidebar } from './index';
import { images } from '../constants';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className='primary-gradient'>
      <nav className='align-element h-20 flex-between'>
        <Link to='/'>
          <img
            src={images.logo}
            alt='translense-logo'
            style={{ width: '150px' }}
          />
        </Link>

        <div>
          <NavLinks childClass='before-element' />
          <button
            className='block md:hidden'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars className='text-2xl text-white font-bold' />
          </button>
        </div>
      </nav>

      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
    </header>
  );
};
export default Header;
