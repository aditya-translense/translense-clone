import { Link } from 'react-router-dom';
import { NavLinks } from './index';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className='primary-gradient'>
      <nav className='align-element h-20 flex-between'>
        <Link to='/'>
          <img src={logo} alt='translense-logo' style={{ width: '150px' }} />
        </Link>
        <NavLinks childClass='before-element' />
      </nav>
    </header>
  );
};
export default Header;
