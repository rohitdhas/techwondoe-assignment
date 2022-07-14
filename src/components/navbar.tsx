import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white p-5 fixed top-0 left-0 right-0">
      <ul className="flex justify-evenly w-[60%] ml-auto">
        <li>
          About{" "}
          <FontAwesomeIcon className="text-sm ml-1" icon={faChevronDown} />
        </li>
        <li>Job Search</li>
        <li className="flex align items-center">
          Candidates{" "}
          <FontAwesomeIcon className="text-sm ml-1" icon={faChevronDown} />
        </li>
        <li className="flex align items-center">
          Employers{" "}
          <FontAwesomeIcon className="text-sm ml-1" icon={faChevronDown} />
        </li>
        <li>Latest News</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
