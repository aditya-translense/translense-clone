import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants';

interface INavLinksProps {
  parentClass?: string;
  childClass?: string;
}

const NavLinks: React.FC<INavLinksProps> = ({ parentClass, childClass }) => {
  return (
    <ul className={`flex items-center gap-8 text-white ${parentClass}`}>
      {navLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <NavLink
              to={href}
              className={`relative text-lg font-normal leading-6 capitalize ${childClass}`}
            >
              {text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
