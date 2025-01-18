import { addHTMLElement } from "../store/slices/webpageHTMLSlice";
import { DropdownMenu } from "./";
import { useDispatch } from "react-redux";

const WebpageOptions = () => {
  const dispatch = useDispatch();

  /* DROPDOWN OPTIONS */
  const htmlElements = [
    {
      name: "<h1/>",
      callbackFunction: () => {
        dispatch(
          addHTMLElement({
            id: 1,
            element: "<h1/>",
            children: [],
            innerText: "Tyler is cool.",
          })
        );
      },
    },
    {
      name: "<h2/>",
      callbackFunction: () => {
        console.log("Callback");
      },
    },
    {
      name: "<h3/>",
      callbackFunction: () => {
        console.log("Callback");
      },
    },
  ];

  return (
    <div className="w-[15rem] sticky h-screen border-l-2 border-black">
      <ul className="flex flex-col w-full items-center gap-2 p-5">
        <li className="text-lg">Editor</li>
        <DropdownMenu
          name={"HTML Elements"}
          dropdownOptions={htmlElements}
        ></DropdownMenu>
      </ul>
    </div>
  );
};

export default WebpageOptions;
