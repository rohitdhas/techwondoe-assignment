import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white p-[1.8rem] fixed top-0 left-0 right-0 z-20">
      <FontAwesomeIcon className="text-orange-500 text-2xl flex ml-auto md:hidden" icon={faBars} />
      <ul className="w-[60%] ml-auto hidden md:flex justify-evenly">
        <li className="hover:text-orange-500 cursor-pointer">
          About <FontAwesomeIcon className="text-sm ml-1" icon={faChevronDown} />
        </li>
        <li className="hover:text-orange-500 cursor-pointer">Job Search</li>
        <li className="hover:text-orange-500 cursor-pointer">
          Candidates <FontAwesomeIcon className="text-sm ml-1" icon={faChevronDown} />
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          Employers <FontAwesomeIcon className="text-sm ml-1" icon={faChevronDown} />
        </li>
        <li className="hover:text-orange-500 cursor-pointer">Latest News</li>
        <li className="hover:text-orange-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
