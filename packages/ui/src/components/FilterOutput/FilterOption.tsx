import React, { useEffect, useState } from "react";

export const FilterOption = ({
  dropButtonValue,
  options,
  handleSelectedTagsOnChange,
}: any) => {
  console.log("options");
  console.log(options);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({});

  const selectedOption = options.find(
    (item: { option: any }) => item.option === dropButtonValue
  );

  const tags: string[] = selectedOption?.tags || [];

  const handleLabelClick = (tag: string, index: string) => {
    setCheckboxes({
      ...checkboxes,
      [index]: !checkboxes[index], // Toggle the checked status for the given index
    });

    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleButtonClick = () => {
    handleSelectedTagsOnChange(selectedTags);
  };

  // console.log("selectedTags in filter opt");
  // console.log(selectedTags);

  // console.log("drop filter opt");
  // console.log(dropButtonValue);

  console.log("checboxes");
  console.log(checkboxes);

  return (
    <div
      role="complementary"
      aria-hidden="true"
      data-testid="filters-container"
      className={`sc-2ebfc8f9-0  ${dropButtonValue ? "eTOBkd" : "kCTYtI"}`}
    >
      <div className="sc-2ebfc8f9-2 cgyjAi">
        <section
          className={`sc-f2a0224c-0 goAIOu sc-8c3cc7b0-1 ${dropButtonValue ? "jCjrQu" : "hgXWxs"}`}
        >
          <div className="sc-a80bc31a-2 sc-8c3cc7b0-2 iLIiey jhudz">
            {dropButtonValue}
          </div>
          <ul
            role="list"
            aria-label="Country list"
            className="sc-8c3cc7b0-4 iZTrwi"
          >
            {tags.map((tag, index) => {
              const id = `${dropButtonValue}_${index}`;
              return (
                <li>
                  <div className="sc-7a302213-0 jXNff">
                    <input
                      type="checkbox"
                      // id={`${index}1a-checkbox`}
                      id={`${id}`}
                      className="sc-7a302213-5 edXAUi"
                      onChange={() => {}}
                      checked={checkboxes[id]}
                    />
                    <label
                      // htmlFor={`${index}1a-checkbox`}
                      htmlFor={`${id}`}
                      className="sc-7a302213-4 kIfFIU"
                      onClick={() => {
                        handleLabelClick(tag, id);
                      }}
                    >
                      {tag}
                      {selectedTags.includes(tag) && (
                        <div className="sc-7a302213-1 sc-7a302213-3 hLecSb bYgPbp">
                          <svg
                            width="7"
                            height="7"
                            viewBox="0 0 42 42"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                          >
                            <path d="M9.3564 6.50033L35.4997 32.6442C35.82 32.9646 36 33.3992 36 33.8523C36 34.3055 35.82 34.74 35.4997 35.0605L35.0589 35.4997C34.7384 35.82 34.3039 36 33.8508 36C33.3977 36 32.9632 35.82 32.6427 35.4997L6.49943 9.35413C6.17962 9.03374 6 8.59953 6 8.14682C6 7.69411 6.17962 7.2599 6.49943 6.93951L6.94028 6.50033C7.26071 6.17997 7.69525 6 8.14834 6C8.60143 6 9.03597 6.17997 9.3564 6.50033V6.50033Z"></path>
                            <path d="M6.50033 32.6436L32.6442 6.50029C32.9646 6.17995 33.3992 6 33.8523 6C34.3055 6 34.74 6.17995 35.0605 6.50029L35.4997 6.94114C35.82 7.26157 36 7.69611 36 8.1492C36 8.60229 35.82 9.03683 35.4997 9.35726L9.35413 35.5006C9.03374 35.8204 8.59953 36 8.14682 36C7.69411 36 7.2599 35.8204 6.93951 35.5006L6.50033 35.0597C6.17997 34.7393 6 34.3047 6 33.8517C6 33.3986 6.17997 32.964 6.50033 32.6436V32.6436Z"></path>
                          </svg>
                        </div>
                      )}
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <section className="sc-f2a0224c-0 goAIOu sc-2ebfc8f9-3 eNNwxU">
        <div className="sc-2ebfc8f9-4 kUajB">
          <button
            //   type="button"
            className="sc-baf0b6e7-0 sc-baf0b6e7-1 glDRNm iAiSEo"
            onClick={handleButtonClick}
          >
            Apply filters
          </button>
        </div>
      </section>
    </div>
  );
};
