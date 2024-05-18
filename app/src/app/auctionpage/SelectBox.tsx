import { useState } from "react";
import TagList from "../landingpage/filterTag";
import { Button } from "ui";

export const SelectBoxList = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState([false, false, false, false]); // Track the open state of each select box

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelectChange = (value, index) => {
    setSelectedValue(value);
    const updatedOpenState = isOpen.map((state, i) =>
      i === index ? !state : false
    ); // Close other select boxes
    setIsOpen(updatedOpenState);
  };

  const toggleOpen = (index) => {
    const updatedOpenState = isOpen.map((state, i) =>
      i === index ? !state : false
    ); // Close other select boxes
    setIsOpen(updatedOpenState);
  };

  return (
    <div className="flex flex-row">
      {[1, 2, 3, 4].map((value, index) => (
        <SelectBox
          key={index}
          value={value}
          options={options}
          selectedValue={selectedValue}
          onSelect={(value) => handleSelectChange(value, index)}
          isOpen={isOpen[index]}
          //   toggleOpen={() => toggleOpen(index)}
        />
      ))}

      {selectedValue}
    </div>
  );
};

const SelectBox = ({ value, options, selectedValue, onSelect, isOpen }) => {
  const handleOnSelectBoxClick = (value) => {
    onSelect(value);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between w-full p-2 border border-gray-300 rounded-md cursor-pointer"
        onClick={() => handleOnSelectBoxClick(value)}
      >
        <span className="mr-2">{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-500 transform ${
            isOpen ? "-rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full left-0 bg-white border border-gray-300 rounded-md shadow-lg">
          {/* {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => onSelect(option.value)}
            >
              {option.label}
            </div>
          ))} */}
          <TagList></TagList>
          <Button className="bg-purple-600">apply flter</Button>
        </div>
      )}
    </div>
  );
};
