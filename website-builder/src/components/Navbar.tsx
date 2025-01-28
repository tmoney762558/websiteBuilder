const Navbar = () => {
  return (
    <nav className="w-[10rem] sticky top-0 left-0 h-screen border-r-2 border-black">
      <ul className="flex flex-col items-center gap-2 p-5">
        <li>
          <h1 className="text-lg">Placeholder</h1>
        </li>
        <li className="my-10">
          <ul>
            <li>
              <h3>Home</h3>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
