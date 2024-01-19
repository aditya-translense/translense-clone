import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants';

interface ISidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ isSidebarOpen }) => {
  return (
    <aside className='bg-primary-gradient'>
      <div
        className={`flex justify-start overflow-hidden h-0 transition-all duration-300 align-element w-[80vw] ${
          isSidebarOpen && 'h-[205px] md:h-auto'
        } `}
      >
        <ul
          className={`flex md:hidden flex-col items-center text-white w-full`}
        >
          {navLinks.map(({ id, href, text }) => {
            return (
              <li
                key={id}
                className='py-2 w-full text-md hover:text-clr-yellow transition-colors duration-300'
              >
                <NavLink
                  to={href}
                  className={`relative text-lg font-normal leading-6 capitalize`}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
