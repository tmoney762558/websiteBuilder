import { IoClose } from "react-icons/io5";
import { addHTMLElement } from "../store/slices/webpageHTMLSlice";
import { DropdownMenu } from "./";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaHome, FaQuestionCircle, FaRegSave } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { addWebpage, updateWebpage } from "../store/slices/webpageSlice";
import { RootState } from "../store";
import { FaChildren } from "react-icons/fa6";
import { BiChevronLeft } from "react-icons/bi";

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
  textAlignment: string;
  backgroundColor: string;
  href: string;
}

const WebpageOptions = ({
  selectedElement,
  setSelectedElement,
  updateProperties,
  updateChildren,
  previousElements,
  setPreviousElements,
  webpageHTML,
  webpageRef,
  setShowExportMessage,
  setShowSaveMessage,
}: {
  selectedElement: WebpageElement | null;
  setSelectedElement: (element: WebpageElement | null) => void;
  updateProperties: (styleToUpdate: string, value: string) => void;
  updateChildren: (newChild: WebpageElement) => void;
  previousElements: number[];
  setPreviousElements: (element: number[]) => void;
  webpageHTML: WebpageElement[];
  webpageRef: React.RefObject<HTMLDivElement>;
  setShowExportMessage: (value: boolean) => void;
  setShowSaveMessage: (value: boolean) => void;
}) => {
  const { id } = useParams<{ id: string }>(); // Gets webpage id from URL
  const currentId: number = Number(id); // Converts id to number

  const dispatch = useDispatch();

  const innerTextInput = useRef<HTMLTextAreaElement>(null);
  const webpageNameInput = useRef<HTMLInputElement>(null);
  const widthInput = useRef<HTMLInputElement>(null);
  const heightInput = useRef<HTMLInputElement>(null);
  const textSizeInput = useRef<HTMLInputElement>(null);

  const webpages = useSelector((state: RootState) => state.webpage.webpages);
  const currentWebpage = webpages.find((webpage) => webpage.id === currentId);
  const [webpageName, setWebpageName] = useState<string>(
    currentWebpage ? currentWebpage!.name : "Website"
  );
  const [webpageColor, setWebpageColor] = useState<string>("#FFFFFF");

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (innerTextInput && innerTextInput.current && selectedElement) {
      innerTextInput.current.value = selectedElement.innerText;
    }
  }, [selectedElement]);

  const findElementById = (
    elements: WebpageElement[],
    id: number
  ): WebpageElement | null => {
    for (let i: number = 0; i < elements.length; i++) {
      if (elements[i].id === id) {
        return elements[i];
      }
      if (elements[i].children) {
        const found = findElementById(elements[i].children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  const doesWebpageExist = (id: number): boolean => {
    for (let i: number = 0; i < webpages.length; i++) {
      if (webpages[i].id === id) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    if (currentWebpage && webpageNameInput && webpageNameInput.current) {
      webpageNameInput.current.value = currentWebpage.name;
    }
  }, [currentWebpage]);

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
          textAlignment: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
          setPreviousElements([newElement.id]);
        } else {
          updateChildren(newElement);
          setPreviousElements([...previousElements, newElement!.id]);
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
          textAlignment: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
          setPreviousElements([newElement.id]);
        } else {
          updateChildren(newElement);
          setPreviousElements([...previousElements, newElement!.id]);
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
          textAlignment: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
          setPreviousElements([newElement.id]);
        } else {
          updateChildren(newElement);
          setPreviousElements([...previousElements, newElement!.id]);
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
          textAlignment: "",
          backgroundColor: "",
          href: "",
        };
        if (selectedElement === null) {
          dispatch(addHTMLElement(newElement));
          setPreviousElements([newElement.id]);
        } else {
          updateChildren(newElement);
          setPreviousElements([...previousElements, newElement!.id]);
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
          textAlignment: "",
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
          textAlignment: "",
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
          textAlignment: "",
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
          textAlignment: "",
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
          textAlignment: "",
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
  const alignItemsOptions = [
    {
      name: "items-start",
      callbackFunction: () => {
        updateProperties("align-items", "items-start");
      },
    },
    {
      name: "items-center",
      callbackFunction: () => {
        updateProperties("align-items", "items-center");
      },
    },
    {
      name: "items-end",
      callbackFunction: () => {
        updateProperties("align-items", "items-end");
      },
    },
    {
      name: "items-between",
      callbackFunction: () => {
        updateProperties("align-items", "items-between");
      },
    },
  ];
  const widthOptions = [
    {
      name: "25%",
      callbackFunction: () => {
        updateProperties("width", "25%");
      },
    },
    {
      name: "50%",
      callbackFunction: () => {
        updateProperties("width", "50%");
      },
    },
    {
      name: "75%",
      callbackFunction: () => {
        updateProperties("width", "75%");
      },
    },
    {
      name: "100%",
      callbackFunction: () => {
        updateProperties("width", "100%");
      },
    },
  ];
  const heightOptions = [
    {
      name: "25%",
      callbackFunction: () => {
        updateProperties("height", "25%");
      },
    },
    {
      name: "50%",
      callbackFunction: () => {
        updateProperties("height", "50%");
      },
    },
    {
      name: "75%",
      callbackFunction: () => {
        updateProperties("height", "75%");
      },
    },
    {
      name: "100%",
      callbackFunction: () => {
        updateProperties("height", "100%");
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
  const textSizes = [
    {
      name: "sm", // Small
      callbackFunction: () => {
        updateProperties("text-size", "text-sm");
      },
    },
    {
      name: "md", // Medium
      callbackFunction: () => {
        updateProperties("text-size", "text-md");
      },
    },
    {
      name: "lg", // Large
      callbackFunction: () => {
        updateProperties("text-size", "text-lg");
      },
    },
    {
      name: "xl", // Extra Large
      callbackFunction: () => {
        updateProperties("text-size", "text-xl");
      },
    },
    {
      name: "2xl", // 2 Extra Large
      callbackFunction: () => {
        updateProperties("text-size", "text-2xl");
      },
    },
  ];
  const textAlignmentOptions = [
    {
      name: "text-left",
      callbackFunction: () => {
        updateProperties("text-alignment", "text-left");
      },
    },
    {
      name: "text-center",
      callbackFunction: () => {
        updateProperties("text-alignment", "text-center");
      },
    },
    {
      name: "text-right",
      callbackFunction: () => {
        updateProperties("text-alignment", "text-right");
      },
    },
  ];

  return isOpen ? (
    <div className="w-[20rem] sticky top-0 right-0 h-screen overflow-y-auto bg-yellow-400 border-[1px] border-black text-black font-mono text-lg">
      {selectedElement === null ? (
        <ul className="flex flex-col w-full items-center gap-2 p-5">
          <li className="flex justify-between items-center w-full py-2 px-3">
            <div
              className="p-1 bg-black border-2 border-yellow-500 rounded-full"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <BiChevronLeft
                fill="rgb(234 179 8)"
                fontSize={"1.5rem"}
              ></BiChevronLeft>
            </div>
            <div className="flex  items-center gap-4">
              <FaRegSave
                className="cursor-pointer"
                onClick={() => {
                  setShowSaveMessage(true);
                  if (doesWebpageExist(currentId)) {
                    if (webpageName === "") {
                      alert("Please enter a name for the webpage.");
                      return;
                    }
                    dispatch(
                      updateWebpage({
                        id: currentId,
                        name: webpageName,
                        webpage: webpageHTML,
                        color: webpageColor,
                      })
                    );
                  } else {
                    dispatch(
                      addWebpage({
                        id: currentId,
                        name: webpageName,
                        webpage: webpageHTML,
                        color: webpageColor,
                      })
                    );
                  }
                }}
                fontSize={"1.3rem"}
              ></FaRegSave>
              <NavLink to="/">
                <FaHome fontSize={"1.3rem"}></FaHome>
              </NavLink>
            </div>
          </li>
          <li className="text-xl">Editor</li>
          <li className="flex flex-col items-center w-full my-5">
            <label>Website Name:</label>
            <input
              ref={webpageNameInput}
              className="w-[95%] mt-3 px-2 py-1 bg-white rounded-full outline-none"
              type="text"
              placeholder="Website Name"
              defaultValue={currentWebpage ? currentWebpage!.name : ""}
              onChange={(e) => {
                setWebpageName(e.target.value);
              }}
            ></input>
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
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <h3>Card Color</h3>
              <FaQuestionCircle
                className="cursor-pointer"
                title="Changes the color of the website card within the dashboard."
              ></FaQuestionCircle>
            </div>
            <input
              className="w-7 h-7"
              type="color"
              defaultValue={
                webpages.length > 0 && currentWebpage
                  ? currentWebpage.color
                  : "#FFFFFF"
              }
              onChange={(e) => setWebpageColor(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(webpageRef!.current!.innerHTML);
              setSelectedElement(null);
              setShowExportMessage(true);
            }}
            className=" mt-3 px-3 py-1 border-2 border-black"
          >
            Export HTML
          </button>
        </ul>
      ) : (
        <div>
          <div className="flex justify-between w-full py-2 px-3">
            <IoMdArrowBack
              className={`${
                previousElements && previousElements.length <= 1
                  ? "invisible"
                  : ""
              } cursor-pointer`}
              onClick={() => {
                setSelectedElement(
                  findElementById(
                    webpageHTML,
                    previousElements[previousElements.length - 2]
                  )
                );
                setPreviousElements(
                  previousElements.slice(0, previousElements!.length - 1)
                );
              }}
            />
            <IoClose
              className="cursor-pointer"
              onClick={() => {
                setSelectedElement(null);
                setPreviousElements([]);
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
            <li className="">
              <h2 className="text-lg">Styles</h2>
            </li>
            <div className="w-full">
              <DropdownMenu
                type="HTML Elements / Styles"
                name="Width"
                dropdownOptions={widthOptions}
                selectedElement={selectedElement}
                inputForm={
                  <form
                    className="flex flex-col items-center mt-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateProperties("width", widthInput!.current!.value);
                      widthInput!.current!.value = "";
                    }}
                  >
                    <label className="w-full text-left">Width Input</label>
                    <input
                      ref={widthInput}
                      className="w-full px-2 py-1 bg-white rounded-full outline-none"
                      type="number"
                      placeholder="Enter width (px)"
                    ></input>
                  </form>
                }
              ></DropdownMenu>
            </div>
            <div className="w-full">
              <DropdownMenu
                type="HTML Elements / Styles"
                name="Height"
                dropdownOptions={heightOptions}
                selectedElement={selectedElement}
                inputForm={
                  <form
                    className="flex flex-col items-center mt-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateProperties("height", heightInput!.current!.value);
                      heightInput!.current!.value = "";
                    }}
                  >
                    <label className="w-full text-left">Height Input</label>
                    <input
                      ref={heightInput}
                      className="w-full px-2 py-1 bg-white rounded-full outline-none"
                      type="number"
                      placeholder="Enter height (px)"
                    ></input>
                  </form>
                }
              ></DropdownMenu>
            </div>
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
              type="HTML Elements / Styles"
              name="Align Items"
              dropdownOptions={alignItemsOptions}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="HTML Elements / Styles"
              name={"Text Sizes"}
              dropdownOptions={textSizes}
              selectedElement={selectedElement}
              inputForm={
                <form
                  className="flex flex-col items-center mt-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateProperties(
                      "text-size",
                      textSizeInput!.current!.value + "px"
                    );
                    textSizeInput!.current!.value = "";
                  }}
                >
                  <label className="w-full text-left">Text Size Input</label>
                  <input
                    ref={textSizeInput}
                    className="w-full px-2 py-1 bg-white rounded-full outline-none"
                    type="number"
                    placeholder="Enter text size (px)"
                  ></input>
                </form>
              }
            ></DropdownMenu>
            <DropdownMenu
              type="Text Colors"
              name="Text Color"
              dropdownOptions={textColors}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="HTML Elements / Styles"
              name={"Text Alignment"}
              dropdownOptions={textAlignmentOptions}
              selectedElement={selectedElement}
            ></DropdownMenu>
            <DropdownMenu
              type="Background Colors"
              name="Background Color"
              dropdownOptions={backgroundColors}
              selectedElement={selectedElement}
            ></DropdownMenu>
            {selectedElement.element !== "div" &&
            selectedElement.element !== "nav" &&
            selectedElement.element !== "ol" &&
            selectedElement.element !== "ul" ? (
              <li>
                <h2 className="text-lg">InnerText</h2>
                <textarea
                  ref={innerTextInput}
                  className="max-w-[95%] p-3 bg-white outline-none"
                  onChange={(e) => {
                    updateProperties("inner-text", e.target.value);
                  }}
                ></textarea>
              </li>
            ) : null}
            <ul className="mt-5">
              <li>
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
                      <button className="px-3 py-1 border-2 border-black">
                        Test Link
                      </button>
                    </a>
                  </div>
                ) : null}
              </li>
              <li className="text-center mb-3">
                <div className="flex items-center gap-2 mb-3">
                  <h2>Children</h2>
                  <FaChildren fontSize={"1.5rem"}></FaChildren>
                </div>
                {selectedElement !== null ? (
                  selectedElement.children.length > 0 ? (
                    selectedElement.children.map((child, index) => (
                      <div
                        className="max-w-[10rem] mb-1 px-3 py-1 border-2 border-black cursor-pointer text-lg text-nowrap text-ellipsis overflow-hidden"
                        key={index}
                        onClick={() => {
                          setPreviousElements([...previousElements!, child.id]);
                          setSelectedElement(child);
                        }}
                      >
                        {"<" + child.element + "/>: " + child.innerText}
                      </div>
                    ))
                  ) : (
                    <div>"No Children"</div>
                  )
                ) : null}
              </li>
            </ul>
            <li>
              <button
                className="px-6 py-1 border-2 border-black rounded-full"
                onClick={() => {
                  updateProperties("delete", "");
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  ) : (
    <div
      className="absolute top-5 right-5 p-1 bg-black border-2 border-yellow-500 rounded-full"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <BiChevronLeft fill="rgb(234 179 8)" fontSize={"1.5rem"}></BiChevronLeft>
    </div>
  );
};

export default WebpageOptions;
