import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NavLink } from "react-router-dom";
import { MdComputer, MdDashboard } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const Navbar = () => {
  const webpages = useSelector((state: RootState) => state.webpage.webpages);

  return (
    <nav className="w-full max-w-[12rem] sticky top-0 left-0 min-h-screen bg-yellow-400 text-black font-roboto overflow-y-auto">
      <ul className="flex flex-col items-center gap-2 p-5">
        <li className="flex gap-2 items-center">
          <h1 className="text-lg font-bold text-nowrap"><i>Webopolis</i></h1>
          <CgWebsite fontSize={"1.5rem"}></CgWebsite>
        </li>
        <li className="my-10">
          <ul className="flex flex-col items-center">
            <li>
              <NavLink className={"flex items-center gap-2"} to="/">
                <MdDashboard fontSize={"1.5rem"}></MdDashboard>
                <h3>Dashboard</h3>
              </NavLink>
            </li>
            <li className="flex items-center gap-1 mt-7 mb-3 pb-1 border-b-2 border-neutral-300">
              <h2>Websites</h2>
              <MdComputer></MdComputer>
            </li>
            <li>
              <ul className="flex flex-col gap-2">
                {webpages.map((webpage, index) =>
                  index < 5 ? (
                    <NavLink to={`/webpage/${webpage.id}`} key={webpage.id}>
                      <li className={` border-white`}>{webpage.name}</li>
                    </NavLink>
                  ) : null
                )}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
