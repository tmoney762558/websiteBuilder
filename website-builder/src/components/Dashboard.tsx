import { NavLink } from "react-router-dom";
import { Navbar } from "./";

const Dashboard = () => {
  return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="flex flex-col flex-grow w-full items-center">
        <button className="w-full max-w-[15rem] mt-[8.5rem] py-2 rounded-full border-2 border-black text-lg font-bold shadow-lg">
          <NavLink to="/new-webpage">Create New Website</NavLink>
        </button>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-center gap-7 w-full max-w-[100rem] mt-[5rem] px-10">
          <div className="h-[15rem] p-5 rounded-md border-2 border-black bg-white shadow-lg"></div>
          <div className="h-[15rem] p-5 rounded-md border-2 border-black bg-white shadow-lg"></div>
          <div className="h-[15rem] p-5 rounded-md border-2 border-black bg-white shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
