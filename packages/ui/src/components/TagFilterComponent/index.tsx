"use client";

import React, { useState } from "react";
import { TagComponent } from "../TagComponent";
import { FilterCard } from "../FilterCard";
import { useEffect } from "react";
import {
  auctionCategories,
  auctions,
  categoriesList,
  randomObject,
} from "./dummy";

type AuctionCategory = {
  category: string;
  auctions: { title: string; endDate: string }[];
};

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;

    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const TagFilterComponent: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  const [searchItem, setSearchItem] = useState(null);
  const [categoryData, setCategoryData] = useState<AuctionCategory | undefined>(
    randomObject
  );

  const handleDataFromChild = (data) => {
    setSearchItem(data);

    console.log("data from the parent " + data);
    console.log(data);
  };

  useEffect(() => {
    console.log("In use effect " + searchItem);

    const fetchResult = categoriesList.find(
      (category) => category.category === searchItem
    );

    // Check if the countryAuction object exists
    if (fetchResult) {
      setCategoryData(fetchResult);
      // Do whatever you need with the auctions array

      console.log(categoryData);
    } else {
      console.log("No auctions found for " + searchItem);
    }
  }, [searchItem]);

  return (
    <section
      className="sc-f2a0224c-0 dydMYR"
      style={{ backgroundColor: "rgb(247, 247, 247)" }}
    >
      <h2 className="sc-a80bc31a-0 CUOEB">Auctions near you</h2>

      <TagComponent
        auctionCategories={auctionCategories}
        sendDataToParent={handleDataFromChild}
      />
      {categoryData ? <FilterCard auctions={categoryData.auctions} /> : null}

      <div className="sc-472c93b7-0 cePKgs">
        <a className="sc-baf0b6e7-5" href="/auctions/upcoming/">
          <span className="sc-baf0b6e7-0 sc-baf0b6e7-1 glDRNm cMbfWu sc-472c93b7-1 bUFoOK">
            View more upcoming auctions
          </span>
        </a>
      </div>
    </section>
  );
};

export { TagFilterComponent };
