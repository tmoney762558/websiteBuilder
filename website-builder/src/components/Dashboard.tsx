import { NavLink } from "react-router-dom";
import { Navbar } from "./";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IoCloseCircle } from "react-icons/io5";
import { removeWebpage } from "../store/slices/webpageSlice";

const Dashboard = () => {
  const webpages = useSelector((state: RootState) => state.webpage.webpages);

  const dispatch = useDispatch();

  return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="flex flex-col flex-grow w-full items-center font-roboto">
        <button className="w-full max-w-[15rem] mt-[8.5rem] py-2 rounded-full border-2 border-black text-lg font-bold shadow-md shadow-black">
          <NavLink to={`/webpage/${Date.now()}`} onClick={() => {}}>
            Create New Website
          </NavLink>
        </button>
        <h1 className="mt-[4.25rem] text-4xl font-bold">Your Websites</h1>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-center gap-7 w-full max-w-[100rem] mt-[5rem] lg:px-10 px-3">
          {webpages
            ? webpages.map((webpage) => (
                <div
                  className={`row-span-1 col-span-1 aspect-[2/1.3] p-5 border-2 border-black rounded-lg shadow-lg text-black font-bold font-roboto shadow-black`}
                  style={{ backgroundColor: webpage.color }}
                  key={webpage.id}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex justify-between items-center">
                    <p className="max-w-[15rem] px-7 py-1 bg-white border-2 border-black rounded-full shadow-lg shadow-black text-ellipsis whitespace-nowrap overflow-hidden">
                      {webpage.name}
                    </p>
                    <IoCloseCircle
                      className="bg-black rounded-full cursor-pointer"
                      fontSize={"2.3rem"}
                      fill={"white"}
                      onClick={() => {
                        dispatch(removeWebpage(webpage.id));
                      }}
                    ></IoCloseCircle>
                    </div>
                    <NavLink className={"flex justify-center w-full"} to={`/webpage/${webpage.id}`}><button className="w-1/2 py-1 bg-white border-2 border-black">Enter Editor</button></NavLink>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
