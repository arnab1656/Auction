import React, { useEffect } from "react";
import { useState } from "react";
import { FilterBox } from "../FilterBox";
import { FilterOption } from "../FilterOutput/FilterOption";

const options = [
  {
    option: "MONTH",
    tags: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  {
    option: "AUCTION",
    tags: ["Online", "Offline"],
  },
];

export const FilterSection = ({ handleDataForPage }: any) => {
  const [dropButtonValue, setDropButtonValue] = useState<string | null>(null);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleDataFromFilterBox = (data: string) => {
    setDropButtonValue(data);
  };

  const handleSelectedTagsFromFilterOption = (tags: string[]) => {
    setSelectedTags(tags);
    setDropButtonValue(null);
  };

  useEffect(() => {
    handleDataForPage(selectedTags);
  }, [selectedTags]);

  console.log("dropButtonValue");
  console.log(dropButtonValue);

  console.log("selectedTags in filterSection");
  console.log(selectedTags);

  return (
    <section className="sc-f2a0224c-0 goAIOu sc-8c3cc7b0-5 htGDz">
      <FilterBox
        sendDataToFilterSection={handleDataFromFilterBox}
        dropButtonValue={dropButtonValue}
      />
      <FilterOption
        dropButtonValue={dropButtonValue}
        options={options}
        handleSelectedTagsOnChange={handleSelectedTagsFromFilterOption}
      />
    </section>
  );
};
