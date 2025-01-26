import { useState } from "react";
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
}: {
  type: string;
  name: string;
  dropdownOptions: DropdownOption[];
  selectedElement?: WebpageElement | null;
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
                        option.name === selectedElement.visibility ||
                        option.name === selectedElement.position
                        ? "border-red-500"
                        : "border-black"
                      : ""
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
                  className={`w-5 aspect-square ${
                    option.squareColor ? option.squareColor : option.color
                  } ${
                    type === "Text Colors"
                      ? option.color === selectedElement.textColor
                        ? "border-2 border-neutral-600"
                        : option.squareColor === "bg-white"
                        ? "border-2 border-black"
                        : ""
                      : ""
                  } ${
                    type === "Background Colors"
                      ? option.color === selectedElement.backgroundColor
                        ? "border-2 border-neutral-600"
                        : option.color === "bg-white"
                        ? "border-2 border-black"
                        : ""
                      : ""
                  } cursor-pointer`}
                  onClick={option.callbackFunction}
                ></li>
              ))
            : null}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
