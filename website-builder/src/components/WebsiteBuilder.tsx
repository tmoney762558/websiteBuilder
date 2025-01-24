import { useState } from "react";
import React from "react";
import { RootState } from "../store";
import { Navbar, WebpageOptions } from "./";
import { useDispatch, useSelector } from "react-redux";
import { setWebpageHTML } from "../store/slices/webpageHTMLSlice";

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

  const webpageHTML = useSelector((state: RootState) => state.webpageHTML.html);

  const [selectedElement, setSelectedElement] = useState<WebpageElement | null>(
    null
  );

  const [previousElement, setPreviousElement] = useState<WebpageElement | null>(
    null
  );

  function determineHTMLElement(element: WebpageElement) {
    const styles = `${
      selectedElement === element ? "border-2 border-black" : ""
    } ${element.display} ${element.flexDirection} ${element.justifyContent} ${element.textColor} ${
      element.backgroundColor
    } cursor-pointer`;
    switch (element.element) {
      case "div": {
        return (
          <div
            className={`${styles} ${
              element.children.length === 0 ? "w-full h-fit min-h-5" : ""
            }`}
            onClick={() => setSelectedElement(element)}
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
            className={`${styles} ${
              element.children.length === 0 ? "w-full h-fit min-h-5" : ""
            }`}
            onClick={() => setSelectedElement(element)}
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
            className={`${styles} ${
              element.children.length === 0 ? "w-full h-fit min-h-5" : ""
            }`}
            onClick={() => setSelectedElement(element)}
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
            className={`${styles} ${
              element.children.length === 0 ? "w-full h-fit min-h-5" : ""
            }`}
            onClick={() => setSelectedElement(element)}
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
            onClick={() => {
              setSelectedElement(element); // Selects the element in order to modify it
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
            onClick={() => {
              setSelectedElement(element); // Selects the element in order to modify it
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
            onClick={() => {
              setSelectedElement(element); // Selects the element in order to modify it
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
            onClick={() => {
              setSelectedElement(element); // Selects the element in order to modify it
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
            target="_blank"
            href={element.href}
            onClick={() => {
              setSelectedElement(element); // Selects the element in order to modify it
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
    let updatedElement;
    if (selectedElement) {
      if (propertyToUpdate === "inner-text") {
        updatedElement = { ...selectedElement, innerText: value };
      }
      if (propertyToUpdate === "display") {
        updatedElement = { ...selectedElement, display: value };
      }
      if (propertyToUpdate === "flex-direction") {
        updatedElement = { ...selectedElement, flexDirection: value };
      }
      if (propertyToUpdate === "justify-content") {
        updatedElement = { ...selectedElement, justifyContent: value };
      }
      if (propertyToUpdate === "background-color") {
        updatedElement = { ...selectedElement, backgroundColor: value };
      }
      if (propertyToUpdate === "text-color") {
        updatedElement = { ...selectedElement, textColor: value };
      }
      if (propertyToUpdate === "href") {
        updatedElement = { ...selectedElement, href: value };
      }
      if (updatedElement) {
        setSelectedElement(updatedElement);
        const updatedHTML = updateHTML(updatedElement);
        dispatch(setWebpageHTML(updatedHTML));
      }
    }
  }

  function updateChildren(newChild: WebpageElement) {
    let updatedElement;

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

  function updateHTML(updatedElement: WebpageElement) {
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

  return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="flex-grow">
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
      ></WebpageOptions>
    </div>
  );
};

export default WebsiteBuilder;
