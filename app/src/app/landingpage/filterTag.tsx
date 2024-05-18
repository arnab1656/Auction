import React, { useState } from "react";

const Tag = ({ text, onClick, showCross }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-500 cursor-pointer ${showCross ? "bg-slate-500" : ""}`}
      onClick={onClick}
    >
      <span>{text}</span>
      {showCross && (
        <button
          className="ml-1 text-xs focus:outline-none"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up to the parent
            // Call the onClick function with the tag text
            onClick(text);
          }}
        >
          &#10006;
        </button>
      )}
    </div>
  );
};

const TagList = () => {
  const [selectedTag, setSelectedTag] = useState("");

  // Function to handle tag click
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? "" : tag);
  };

  // Dummy tag data
  const tags = ["Tag1", "Tag2", "Tag3"];

  return (
    <div>
      <div>
        {/* Render tags using Tag component */}
        {tags.map((tag, index) => (
          <Tag
            key={index}
            text={tag}
            onClick={() => handleTagClick(tag)}
            showCross={tag === selectedTag}
          />
        ))}
        {selectedTag && (
          <div className="mt-2">
            <p>Selected Tag: {selectedTag}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagList;
