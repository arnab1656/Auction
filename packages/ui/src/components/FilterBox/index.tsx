import React, { useEffect, useState } from "react";

export const FilterBox = ({
  sendDataToFilterSection,
  dropButtonValue,
}: any) => {
  const [selectedDropButtonValue, setSelectedDropButtonValue] = useState(null);

  // const handleButtonClick = (buttonName: any) => {
  //   setSelectedDropButtonValue(
  //     buttonName === selectedDropButtonValue ? null : buttonName
  //   );

  //   sendDataToFilterSection(selectedDropButtonValue);
  // };

  const handleButtonClick = (buttonName: any) => {
    setSelectedDropButtonValue((prevSelectedDropButtonValue) => {
      const newSelectedDropButtonValue =
        buttonName === prevSelectedDropButtonValue ? null : buttonName;

      sendDataToFilterSection(newSelectedDropButtonValue);

      return newSelectedDropButtonValue;
    });
  };
  useEffect(() => {
    if (dropButtonValue === null) {
      setSelectedDropButtonValue(null);
    }
  }, [dropButtonValue]);

  console.log("selectedDropButtonValue filter box");
  console.log(selectedDropButtonValue);
  return (
    <div className="sc-8c3cc7b0-7 hgcbdD">
      <div className="sc-6f591819-0 jvjgni">
        <label
          htmlFor="query-filterBy"
          className="sc-a80bc31a-2 sc-ca72031f-0 hedXho iXcHce"
        >
          FILTER BY
        </label>
        <div className="sc-6f591819-0 jvjgni">
          <div className="sc-4bdec7c-0 hsfwFk sc-6f591819-1 toKey">
            <input
              name="query-filterBy"
              id="query-filterBy"
              placeholder="Search for an auction"
              type="search"
              className="sc-a80bc31a-1 sc-4bdec7c-2 bISVVv fRGDeo"
              value=""
            />
            <div className="sc-4bdec7c-1 bDSJEG">
              <button className="sc-6f591819-2 eXmtXN">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="sc-6f591819-3 dtjFyz"
                >
                  <title>FILTER BY</title>
                  <path d="M35.544 33.3256L28.1505 25.9005C30.0433 23.7469 31.0893 20.9791 31.0939 18.112C31.0923 11.4335 25.4638 6 18.547 6C11.6285 6 6 11.4335 6 18.112C6 24.7921 11.6285 30.2256 18.547 30.2256C21.1086 30.2353 23.6135 29.4714 25.7338 28.0339L33.1856 35.5174C33.4973 35.829 33.9157 36.0007 34.3657 36.0007C34.7855 36.0028 35.1906 35.8456 35.499 35.5607C35.653 35.4196 35.7768 35.2488 35.8629 35.0585C35.9489 34.8682 35.9955 34.6624 35.9997 34.4536C36.0039 34.2448 35.9657 34.0374 35.8874 33.8438C35.809 33.6502 35.6922 33.4745 35.544 33.3273V33.3256ZM18.547 9.15841C23.6588 9.15841 27.8189 13.1752 27.8189 18.112C27.8189 23.0487 23.6588 27.0655 18.547 27.0655C13.4335 27.0655 9.27341 23.0487 9.27341 18.112C9.27341 13.1768 13.4335 9.16008 18.547 9.16008V9.15841Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="sc-4bdec7c-3 jdQKgG"></div>
        </div>
      </div>
      <div className="sc-8c3cc7b0-8 krUaoy">
        <div>
          <div className="sc-8c3cc7b0-10 Ksyeh">
            <button
              aria-pressed="false"
              type="button"
              className={`sc-baf0b6e7-0 sc-baf0b6e7-1 lmdXoa bydNPL sc-4150180c-0  ${selectedDropButtonValue === "MONTH" ? "vSqNv" : "bKxAGI"}`}
              onClick={() => handleButtonClick("MONTH")}
            >
              MONTH{" "}
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="sc-baf0b6e7-2 sc-baf0b6e7-4 fivusZ hpPkxb"
              >
                <path d="M9.38323 14.6287C8.54491 13.7904 7.34731 13.7904 6.62874 14.6287C5.79042 15.3473 5.79042 16.5449 6.62874 17.3832L19.5629 30.1976C20.4012 31.0359 21.5988 31.0359 22.4371 30.1976L35.3713 17.3832C36.2096 16.5449 36.2096 15.3473 35.3713 14.6287C34.6527 13.7904 33.4551 13.7904 32.6168 14.6287L21 26.1257L9.38323 14.6287Z"></path>
              </svg>
            </button>
            <button
              aria-pressed="false"
              type="button"
              className={`sc-baf0b6e7-0 sc-baf0b6e7-1 lmdXoa bydNPL sc-4150180c-0  ${selectedDropButtonValue === "AUCTION" ? "vSqNv" : "bKxAGI"}`}
              onClick={() => {
                handleButtonClick("AUCTION");
              }}
            >
              AUCTION TYPE{" "}
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="sc-baf0b6e7-2 sc-baf0b6e7-4 fivusZ hpPkxb"
              >
                <path d="M9.38323 14.6287C8.54491 13.7904 7.34731 13.7904 6.62874 14.6287C5.79042 15.3473 5.79042 16.5449 6.62874 17.3832L19.5629 30.1976C20.4012 31.0359 21.5988 31.0359 22.4371 30.1976L35.3713 17.3832C36.2096 16.5449 36.2096 15.3473 35.3713 14.6287C34.6527 13.7904 33.4551 13.7904 32.6168 14.6287L21 26.1257L9.38323 14.6287Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
