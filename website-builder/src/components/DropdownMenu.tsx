import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownOption {
  name: string;
  callbackFunction: () => void;
}

const DropdownMenu = ({
  name,
  dropdownOptions,
}: {
  name: string;
  dropdownOptions: DropdownOption[];
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
          {dropdownOptions.map((option, index) => (
            <li key={index} className="p-1 border-2 border-black">
              <button onClick={option.callbackFunction}>{option.name}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
