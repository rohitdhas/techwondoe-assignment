const Navbar = () => {
  return (
    <nav className="bg-white p-5 fixed top-0 left-0 right-0">
      <ul className="flex justify-evenly w-[60%] ml-auto">
        <li>
          About <i className="bi bi-caret-down ml-1"></i>
        </li>
        <li>Job Search</li>
        <li className="flex align items-center">
          Candidates <i className="bi bi-caret-down ml-1"></i>
        </li>
        <li className="flex align items-center">
          Employers <i className="bi bi-caret-down ml-1"></i>
        </li>
        <li>Latest News</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
