import { ReactNode, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

interface DropdownOption {
  name?: string;
  callbackFunction: () => void;
  color?: string;
  squareColor?: string;
}

const DropdownMenu = ({
  type,
  name,
  dropdownOptions,
  selectedElement,
  inputForm,
}: {
  type: string;
  name: string;
  dropdownOptions: DropdownOption[];
  selectedElement?: WebpageElement | null;
  inputForm?: ReactNode;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 w-full">
        {isActive ? (
          <FaChevronUp></FaChevronUp>
        ) : (
          <FaChevronDown></FaChevronDown>
        )}
        <button onClick={() => setIsActive(!isActive)}>{name}</button>
      </div>
      {isActive ? (
        <ul className="flex flex-wrap items-center gap-1">
          {type === "HTML Elements / Styles"
            ? dropdownOptions.map((option, index) => (
                <li
                  key={index}
                  className={`p-1 border-2 ${
                    selectedElement
                      ? option.name === selectedElement.display ||
                        option.name === selectedElement.flexDirection ||
                        option.name === selectedElement.justifyContent ||
                        option.name === selectedElement.alignItems ||
                        (option.name === selectedElement.width &&
                          name !== "Height") ||
                        (option.name === selectedElement.height &&
                          name !== "Width") ||
                        option.name === selectedElement.visibility ||
                        option.name === selectedElement.position ||
                        option.name === selectedElement.textSize ||
                        option.name === selectedElement.textAlignment
                        ? "border-white"
                        : "border-black"
                      : "border-black"
                  }`}
                >
                  <button
                    onClick={() => {
                      option.callbackFunction();
                    }}
                  >
                    {option.name}
                  </button>
                </li>
              ))
            : null}
          {(selectedElement && type === "Text Colors") ||
          (selectedElement && type === "Background Colors")
            ? dropdownOptions.map((option, index) => (
                <li
                  key={index}
                  className={`w-5 aspect-square border-2 ${
                    option.squareColor ? option.squareColor : option.color
                  } ${
                    type === "Text Colors"
                      ? option.color === selectedElement.textColor
                        ? "border-2 border-white"
                        : "border-2 border-black"
                      : ""
                  } ${
                    type === "Background Colors"
                      ? option.color === selectedElement.backgroundColor
                        ? "border-2 border-white"
                        : "border-2 border-black"
                      : ""
                  } cursor-pointer`}
                  onClick={option.callbackFunction}
                ></li>
              ))
            : null}
        </ul>
      ) : null}
      {inputForm && isActive ? inputForm : null}
    </div>
  );
};

export default DropdownMenu;
