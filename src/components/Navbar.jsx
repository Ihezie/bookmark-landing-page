const Navbar = () => {
  const links = ["features", "pricing", "contact"];

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-10 items-center">
        {links.map((link, index) => (
          <li key={index} className="transition-all duration-300 uppercase tracking-widest hover:text-softRed">
            <a href="#">{link}</a>
          </li>
        ))}
        <li>
            <button className="uppercase transition-all duration-300 tracking-widest bg-softRed text-white w-36 h-12 rounded-md font-medium shadow-lg cursor-pointer hover:bg-white hover:border-2 hover:border-softRed hover:text-softRed">login</button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
