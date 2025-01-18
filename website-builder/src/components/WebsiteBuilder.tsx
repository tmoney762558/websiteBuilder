import { RootState } from "../store";
import { Navbar, WebpageOptions } from "./";
import { useSelector } from "react-redux";

const WebsiteBuilder = () => {

  const webpageHTML = useSelector((state: RootState) => state.webpageHTML.html);

  function determineHTMLElement(element: string, innerText: string) {
    switch(element) {
        case "<h1/>": {
            return <h1>{innerText}</h1>;
        }
        default: return null;
    }
  }

  return (
    <div className="flex">
      <Navbar></Navbar>
      <div className="flex-grow">
        {
          /* Webpage */
          webpageHTML.map((htmlElement) => (
            <>{determineHTMLElement(htmlElement.element, htmlElement.innerText)}</>
          ))
        }
      </div>
      <WebpageOptions></WebpageOptions>
    </div>
  );
};

export default WebsiteBuilder;
