import { IoClose } from "react-icons/io5";
import { addHTMLElement } from "../store/slices/webpageHTMLSlice";
import { DropdownMenu } from "./";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { IoMdArrowBack } from "react-icons/io";

interface WebpageElement {
  id: number;
  element: string;
  children: WebpageElement[];
  innerText: string;
  display: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  visibility: string;
  position: string;
  width: string;
  height: string;
  textSize: string;
  textColor: string;
  backgroundColor: string;
  href: string;
}

const WebpageOptions = ({
  selectedElement,
  setSelectedElement,
  updateProperties,
  updateChildren,
}: {
  selectedElement: WebpageElement | null;
  setSelectedElement: (element: WebpageElement | null) => void;
  updateProperties: (styleToUpdate: string, value: string) => void;
  updateChildren: (newChild: WebpageElement) => void;
}) => {
  const dispatch = useDispatch();

  const innerTextInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (innerTextInput && innerTextInput.current && selectedElement) {
      innerTextInput.current.value = selectedElement.innerText;
    }
  }, [selectedElement]);

  /* DROPDOWN OPTIONS */

  // Cut down on this code using a class or function in the future

  const containers = [
    {
      name: "<div/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "div",
          children: [],
          innerText: "",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
        setSelectedElement(newElement);
      },
    },
    {
      name: "<nav/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "nav",
          children: [],
          innerText: "",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
        setSelectedElement(newElement);
      },
    },
    {
      name: "<ol/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "ol",
          children: [],
          innerText: "",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
        setSelectedElement(newElement);
      },
    },
    {
      name: "<ul/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "ul",
          children: [],
          innerText: "",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
        setSelectedElement(newElement);
      },
    },
  ];
  const headings = [
    {
      name: "<h1/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "h1",
          children: [],
          innerText: "Heading 1",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
      },
    },
    {
      name: "<h2/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "h2",
          children: [],
          innerText: "Heading 2",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
      },
    },
    {
      name: "<h3/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "h3",
          children: [],
          innerText: "Heading 3",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
      },
    },
  ];

  const htmlElements = [
    {
      name: "<p/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "p",
          children: [],
          innerText: "Paragraph",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
      },
    },
    {
      name: "<a/>",
      callbackFunction: () => {
        const newElement = {
          id: Date.now(),
          element: "a",
          children: [],
          innerText: "Anchor",
          display: "",
          flexDirection: "",
          justifyContent: "",
          alignItems: "",
          visibility: "",
          position: "",
          width: "",
          height: "",
          textSize: "",
          textColor: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
        } else {
          updateChildren(newElement);
        }
      },
    },
  ];
  const displayOptions = [
    {
      name: "flex",
      callbackFunction: () => {
        updateProperties("display", "flex");
      },
    },
    {
      name: "flex-row", // Flex direction also stored within display options
      callbackFunction: () => {
        updateProperties("flex-direction", "flex-row");
      },
    },
    {
      name: "flex-col", // Flex direction also stored within display options
      callbackFunction: () => {
        updateProperties("flex-direction", "flex-col");
      },
    },
    {
      name: "block",
      callbackFunction: () => {
        updateProperties("display", "block");
      },
    },
    {
      name: "inline",
      callbackFunction: () => {
        updateProperties("display", "inline");
      },
    },
  ];
  const justifyContentOptions = [
    {
      name: "justify-start",
      callbackFunction: () => {
        updateProperties("justify-content", "justify-start");
      },
    },
    {
      name: "justify-center",
      callbackFunction: () => {
        updateProperties("justify-content", "justify-center");
      },
    },
    {
      name: "justify-end",
      callbackFunction: () => {
        updateProperties("justify-content", "justify-end");
      },
    },
    {
      name: "justify-between",
      callbackFunction: () => {
        updateProperties("justify-content", "justify-between");
      },
    },
  ];
  const textColors = [
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-red-500");
      },
      color: "text-red-500",
      squareColor: "bg-red-500",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-orange-500");
      },
      color: "text-orange-500",
      squareColor: "bg-orange-500",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-yellow-500");
      },
      color: "text-yellow-500",
      squareColor: "bg-yellow-500",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-green-500");
      },
      color: "text-green-500",
      squareColor: "bg-green-500",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-teal-500");
      },
      color: "text-teal-500",
      squareColor: "bg-teal-500",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-blue-500");
      },
      color: "text-blue-500",
      squareColor: "bg-blue-500",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-pink-500");
      },
      color: "text-pink-500",
      squareColor: "bg-pink-500",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-white");
      },
      color: "text-white",
      squareColor: "bg-white",
    },
    {
      callbackFunction: () => {
        updateProperties("text-color", "text-black");
      },
      color: "text-black",
      squareColor: "bg-black",
    },
  ];
  const backgroundColors = [
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-red-500");
      },
      color: "bg-red-500",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-orange-500");
      },
      color: "bg-orange-500",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-yellow-500");
      },
      color: "bg-yellow-500",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-green-500");
      },
      color: "bg-green-500",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-teal-500");
      },
      color: "bg-teal-500",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-blue-500");
      },
      color: "bg-blue-500",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-pink-500");
      },
      color: "bg-pink-500",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-white");
      },
      color: "bg-white",
    },
    {
      callbackFunction: () => {
        updateProperties("background-color", "bg-black");
      },
      color: "bg-black",
    },
  ];

  return (
    <div className="w-[15rem] sticky h-screen overflow-y-scroll border-l-2 border-black">
      {selectedElement === null ? (
        <ul className="flex flex-col w-full items-center gap-2 p-5">
          <li className="text-lg">Editor</li>
          <DropdownMenu
            type="HTML Elements / Styles"
            name="Containers"
            dropdownOptions={containers}
            selectedElement={selectedElement}
          ></DropdownMenu>
          <DropdownMenu
            type="HTML Elements / Styles"
            name={"Headings"}
            dropdownOptions={headings}
            selectedElement={selectedElement}
          ></DropdownMenu>
          <DropdownMenu
            type="HTML Elements / Styles"
            name={"HTML Elements"}
            dropdownOptions={htmlElements}
            selectedElement={selectedElement}
          ></DropdownMenu>
        </ul>
      ) : (
        <div>
          <div className="flex justify-between w-full py-2 px-3">
            <IoMdArrowBack onClick={() => {}}></IoMdArrowBack>
            <IoClose
              className="cursor-pointer"
              onClick={() => {
                setSelectedElement(null);
              }}
            ></IoClose>
          </div>
          <ul className="flex flex-col w-full items-center gap-2 p-5">
            <li>
              <h2 className="text-lg">
                {"<" + selectedElement.element + "/>"}
              </h2>
            </li>
            <li>
              <h2 className="text-lg">HTML</h2>
            </li>
            <DropdownMenu
              type="HTML Elements / Styles"
              name="Containers"
              dropdownOptions={containers}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="HTML Elements / Styles"
              name={"Headings"}
              dropdownOptions={headings}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="HTML Elements / Styles"
              name={"HTML Elements"}
              dropdownOptions={htmlElements}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <li>
              <h2 className="text-lg">Styles</h2>
            </li>
            <DropdownMenu
              type="HTML Elements / Styles"
              name="Display"
              dropdownOptions={displayOptions}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="HTML Elements / Styles"
              name="Justify Content"
              dropdownOptions={justifyContentOptions}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="Text Colors"
              name="Text Color"
              dropdownOptions={textColors}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="Background Colors"
              name="Background Color"
              dropdownOptions={backgroundColors}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <li>
              <h2 className="text-lg">InnerText</h2>
            </li>
            <textarea
              ref={innerTextInput}
              className="border-2 border-black outline-none p-3"
              onChange={(e) => {
                updateProperties("inner-text", e.target.value);
              }}
            ></textarea>
            <ul>
              <li className="text-center mb-3">
                <h2>Children</h2>
              </li>
              {selectedElement.element === "a" ? (
                <div className="flex flex-col items-center gap-2">
                  <label>href (Link)</label>
                  <input
                    className="border-2 border-black outline-none px-1"
                    onChange={(e) => {
                      updateProperties("href", e.target.value);
                    }}
                  ></input>
                  <a href={selectedElement.href} target="_blank">
                    <button className="px-3 py-1 border-2 border-black">Test Link</button>
                  </a>
                </div>
              ) : null}
              {selectedElement !== null
                ? selectedElement.children.length > 0
                  ? selectedElement.children.map((child, index) => (
                      <li
                        className="max-w-[10rem] mb-1 border-2 border-black cursor-pointer text-lg text-nowrap text-ellipsis overflow-hidden"
                        key={index}
                        onClick={() => {
                          setSelectedElement(child);
                        }}
                      >
                        {"<" + child.element + "/>: " + child.innerText}
                      </li>
                    ))
                  : "No Children"
                : null}
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
};

export default WebpageOptions;
