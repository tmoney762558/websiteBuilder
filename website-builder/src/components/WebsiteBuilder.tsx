import { useEffect, useRef, useState } from "react";
import React from "react";
import { RootState } from "../store";
import { Navbar, WebpageOptions } from "./";
import { useDispatch, useSelector } from "react-redux";
import { setWebpageHTML } from "../store/slices/webpageHTMLSlice";
import { CiCircleCheck } from "react-icons/ci";
import { useParams } from "react-router-dom";

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

const WebsiteBuilder = () => {
  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>(); // Gets webpage id from URL
  const currentId: number = Number(id); // Converts id to number

  const webpages = useSelector((state: RootState) => state.webpage.webpages);
  const currentWebpage = webpages.find((webpage) => webpage.id === currentId);

  const webpageHTML = useSelector((state: RootState) => state.webpageHTML.html);

  const [selectedElement, setSelectedElement] = useState<WebpageElement | null>(
    null
  );

  const [previousElements, setpreviousElements] = useState<number[]>([]);

  const [showSaveMessage, setShowSaveMessage] = useState<boolean>(false);
  const [showExportMessage, setShowExportMessage] = useState<boolean>(false); // Handles the visibility of the export message
  const [slidingIn, setSlidingIn] = useState<boolean[]>([false, false]); // Determines the action of the export message's animation

  const webpageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentWebpage) {
      if (currentWebpage.webpage.length > 0) {
        dispatch(setWebpageHTML(currentWebpage.webpage));
      }
    } else {
      dispatch(setWebpageHTML([]));
    }
  }, [currentWebpage, dispatch]);

  function determineHTMLElement(element: WebpageElement) {
    const styles = `${
      selectedElement === element ? "border-2 border-black" : ""
    }${element.display !== "" ? " " + element.display : ""}${
      element.flexDirection !== "" ? " " + element.flexDirection : ""
    }${element.justifyContent !== "" ? " " + element.justifyContent : ""}${
      element.alignItems !== "" ? " " + element.alignItems : ""
    }${element.textColor !== "" ? " " + element.textColor : ""}${
      element.backgroundColor === ""
        ? " bg-neutral-300"
        : " " + element.backgroundColor
    }`;

    let widthUnit = "px";
    let heightUnit = "px";

    if (element.width.includes("%")) {
      widthUnit = "";
    }
    if (element.height.includes("%")) {
      heightUnit = "";
    }
    switch (element.element) {
      case "div": {
        return (
          <div
            className={`${styles}${
              element.children.length === 0 ? " w-full h-fit min-h-5" : ""
            }`}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              setSelectedElement(element);
              setpreviousElements([element.id]);
            }}
          >
            {element.children.map((child, index) => {
              return (
                <React.Fragment key={index}>
                  {determineHTMLElement(child)}
                </React.Fragment>
              );
            })}
          </div>
        );
      }
      case "nav": {
        return (
          <nav
            className={`${styles}${
              element.children.length === 0 ? " w-full h-fit min-h-5" : ""
            }`}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              setSelectedElement(element);
              setpreviousElements([element.id]);
            }}
          >
            {element.children.map((child, index) => {
              return (
                <React.Fragment key={index}>
                  {determineHTMLElement(child)}
                </React.Fragment>
              );
            })}
          </nav>
        );
      }
      case "ol": {
        return (
          <ol
            className={`${styles}${
              element.children.length === 0 ? " w-full h-fit min-h-5" : ""
            }`}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              setSelectedElement(element);
              setpreviousElements([element.id]);
            }}
          >
            {element.children.map((child, index) => {
              return <li key={index}>{determineHTMLElement(child)}</li>;
            })}
          </ol>
        );
      }
      case "ul": {
        return (
          <ul
            className={`${styles}${
              element.children.length === 0 ? " w-full h-fit min-h-5" : ""
            }`}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              setSelectedElement(element);
              setpreviousElements([]);
            }}
          >
            {element.children.map((child, index) => {
              return <li key={index}>{determineHTMLElement(child)}</li>;
            })}
          </ul>
        );
      }
      case "h1": {
        return (
          <h1
            className={styles}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              {
                setSelectedElement(element);
                setpreviousElements([element.id]);
              } // Selects the element in order to modify it
            }}
          >
            {element.innerText}
          </h1>
        );
      }
      case "h2": {
        return (
          <h2
            className={styles}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              {
                setSelectedElement(element);
                setpreviousElements([element.id]);
              } // Selects the element in order to modify it
            }}
          >
            {element.innerText}
          </h2>
        );
      }
      case "h3": {
        return (
          <h3
            className={styles}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              {
                setSelectedElement(element);
                setpreviousElements([element.id]);
              } // Selects the element in order to modify it
            }}
          >
            {element.innerText}
          </h3>
        );
      }
      case "p": {
        return (
          <p
            className={styles}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            onClick={() => {
              {
                setSelectedElement(element);
                setpreviousElements([element.id]);
              } // Selects the element in order to modify it
            }}
          >
            {element.innerText}
          </p>
        );
      }
      case "a": {
        return (
          <a
            className={styles}
            style={{
              width: element.width + widthUnit,
              height: element.height + heightUnit,
            }} // Sets the width and height of the element
            target="_blank"
            href={element.href}
            onClick={() => {
              {
                setSelectedElement(element);
                setpreviousElements([element.id]);
              } // Selects the element in order to modify it
            }}
          >
            {element.innerText}
          </a>
        );
      }
      default:
        return null;
    }
  }

  function updateProperties(propertyToUpdate: string, value: string) {
    let updatedElement: WebpageElement;
    if (selectedElement) {
      if (propertyToUpdate === "inner-text") {
        updatedElement = { ...selectedElement, innerText: value };
      } else if (propertyToUpdate === "display") {
        updatedElement = { ...selectedElement, display: value };
      } else if (propertyToUpdate === "flex-direction") {
        updatedElement = { ...selectedElement, flexDirection: value };
      } else if (propertyToUpdate === "justify-content") {
        updatedElement = { ...selectedElement, justifyContent: value };
      } else if (propertyToUpdate === "align-items") {
        updatedElement = { ...selectedElement, alignItems: value };
      } else if (propertyToUpdate === "width") {
        updatedElement = { ...selectedElement, width: value };
      } else if (propertyToUpdate === "height") {
        updatedElement = { ...selectedElement, height: value };
      } else if (propertyToUpdate === "background-color") {
        updatedElement = { ...selectedElement, backgroundColor: value };
      } else if (propertyToUpdate === "text-color") {
        updatedElement = { ...selectedElement, textColor: value };
      } else if (propertyToUpdate === "href") {
        updatedElement = { ...selectedElement, href: value };
      } else if (propertyToUpdate === "delete") {
        updatedElement = { ...selectedElement, element: "delete" };
      } else {
        return;
      }
      if (updatedElement) {
        if (propertyToUpdate === "delete") {
          setSelectedElement(null);
          setpreviousElements([]);
        } else {
          setSelectedElement(updatedElement);
        }
        const updatedHTML = updateHTML(updatedElement);
        dispatch(setWebpageHTML(updatedHTML));
      }
    }
  }

  function updateChildren(newChild: WebpageElement) {
    let updatedElement: WebpageElement;

    if (selectedElement) {
      const updatedChildren = [...selectedElement.children, newChild];
      updatedElement = { ...selectedElement, children: updatedChildren };
      setSelectedElement(updatedElement);
      const updatedHTML = updateHTML(updatedElement);
      dispatch(setWebpageHTML(updatedHTML));
    }
  }

  function searchChildren(
    children: WebpageElement[],
    id: number,
    updatedElement: WebpageElement
  ): WebpageElement[] {
    if (
      updatedElement.element === "delete" &&
      children.find((child) => child.id === updatedElement.id)
    ) {
      return children.filter((child) => {
        if (child.id === updatedElement.id) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      return children.map((child) => {
        if (child.id === id) {
          return updatedElement;
        } else if (child.children.length > 0) {
          const searchResults = searchChildren(
            child.children,
            id,
            updatedElement
          );
          return { ...child, children: searchResults };
        }
        return child;
      });
    }
  }

  function updateHTML(updatedElement: WebpageElement) {
    if (
      updatedElement.element === "delete" &&
      webpageHTML.find((child) => child.id === updatedElement.id)
    ) {
      return webpageHTML.filter((child) => {
        if (child.id === updatedElement.id) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      return webpageHTML.map((element) => {
        if (element.id === updatedElement.id) {
          return updatedElement;
        } else if (element.children.length > 0) {
          const searchResults = searchChildren(
            element.children,
            updatedElement.id,
            updatedElement
          );
          return { ...element, children: searchResults };
        }
        return element;
      });
    }
  }

  return (
    <div className="flex justify-center relative">
      {showExportMessage ? (
        <div
          className={`flex items-center gap-3 absolute top-5 w-fit px-5 py-2 border-2 border-black text-center ${
            slidingIn[0] ? "slide-in-top" : "fade-out"
          }`}
          onAnimationEnd={() => {
            if (slidingIn[0]) {
              setSlidingIn([false, slidingIn[1]]);
            } else {
              setSlidingIn([true, slidingIn[1]]);
              setShowExportMessage(false);
            }
          }}
        >
          <p>Successfully Exported HTML</p>
          <CiCircleCheck fill="green" fontSize={"2rem"}></CiCircleCheck>
        </div>
      ) : null}
      {showSaveMessage ? (
        <div
          className={`flex items-center gap-3 absolute top-5 w-fit px-5 py-2 border-2 border-black text-center ${
            slidingIn[1] ? "slide-in-top" : "fade-out"
          }`}
          onAnimationEnd={() => {
            if (slidingIn[1]) {
              setSlidingIn([slidingIn[0], false]);
            } else {
              setSlidingIn([slidingIn[0], true]);
              setShowSaveMessage(false);
            }
          }}
        >
          <p>Successfully Saved Website</p>
          <CiCircleCheck fill="green" fontSize={"2rem"}></CiCircleCheck>
        </div>
      ) : null}
      <Navbar></Navbar>
      <div
        ref={webpageRef}
        className="flex-grow max-w-full max-h-screen overflow-x-hidden overflow-y-auto"
      >
        {
          /* Webpage */
          webpageHTML.map((htmlElement, index) => (
            <React.Fragment key={index}>
              {determineHTMLElement(htmlElement)}
            </React.Fragment>
          ))
        }
      </div>
      <WebpageOptions
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
        updateProperties={updateProperties}
        updateChildren={updateChildren}
        previousElements={previousElements}
        setPreviousElements={setpreviousElements}
        webpageHTML={webpageHTML}
        webpageRef={webpageRef}
        setShowExportMessage={setShowExportMessage}
        setShowSaveMessage={setShowSaveMessage}
      ></WebpageOptions>
    </div>
  );
};

export default WebsiteBuilder;
