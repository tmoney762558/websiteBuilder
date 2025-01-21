import { useState } from "react";
import { RootState } from "../store";
import { Navbar, WebpageOptions } from "./";
import { useDispatch, useSelector } from "react-redux";
import { setWebpageHTML } from "../store/slices/webpageHTMLSlice";

interface WebpageElement {
  id: number;
  element: string;
  children: WebpageElement[];
  innerText: string;
  styles: string;
}

const WebsiteBuilder = () => {
  const dispatch = useDispatch();

  const webpageHTML = useSelector((state: RootState) => state.webpageHTML.html);

  const [selectedElement, setSelectedElement] = useState<WebpageElement | null>(
    null
  );

  function determineHTMLElement(element: WebpageElement) {
    switch (element.element) {
      case "<h1/>": {
        return (
          <h1
            className={element.styles}
            onClick={() => {
              setSelectedElement(element); // Selects the element in order to modify it
              updateStyle("text-4xl");
            }}
          >
            {element.innerText}
          </h1>
        );
      }
      case "<div/>": {
        return (
          <div>
            {element.children.map((child) => {
              return <>{determineHTMLElement(child)}</>;
            })}
          </div>
        );
      }
      default:
        return null;
    }
  }

  function updateStyle(newStyle: string) {
    let updatedElement;
    if (selectedElement) {
      updatedElement = { ...selectedElement, styles: newStyle };
      const updatedHTML = updateHTML(updatedElement);
      dispatch(setWebpageHTML(updatedHTML));
      console.log(updatedHTML);
    }
  }

  function searchChildren(
    children: WebpageElement[],
    id: number,
    updatedElement: WebpageElement
  ): WebpageElement[] {
    return children.map((child) => {
      if (child.id === id) {
        console.log(child.id);
        console.log("Element found");
        console.log(updatedElement);
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
        console.log("Element found");
        console.log(updatedElement);
        return updatedElement;
      } else if (element.children.length > 0) {
        const searchResults = searchChildren(
          element.children,
          updatedElement.id,
          updatedElement
        );
        return { ...element, children: searchResults}
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
          webpageHTML.map((htmlElement) => (
            <>{determineHTMLElement(htmlElement)}</>
          ))
        }
      </div>
      <WebpageOptions></WebpageOptions>
    </div>
  );
};

export default WebsiteBuilder;
