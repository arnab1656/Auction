"use client";

import React from "react";

import {
  Button,
  Img,
  Input,
  List,
  RecommendedAuctionItem,
  SelectBox,
  Text,
} from "ui";
import { PageCard } from "ui";
import { PageFooter } from "ui";
import { PageHeader } from "ui";
import FilterComp from "./filterComp";
import { Pagination } from "@mui/material";
import PaginationComp from "./paginationComp";

const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const sellItemListingPage: React.FC = () => {
  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_1.png" },
    { image: "images/img_image_3.png" },
  ];

  return (
    <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
      <PageHeader className="w-full" />

      <Text
        className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
        size="txtManropeExtraBold36"
      >
        Your Items
      </Text>

      {/* the filter component */}

      {/* <FilterComp /> */}

      <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full border border-solid border-red-400">
        <div className="grid grid-cols-4 gap-4 w-full">
          {[1, 2, 3, 4].map((index) => (
            <RecommendedAuctionItem
              title={""}
              sellItemId={0}
              description={""}
              startDate={""}
              endDate={""}
              status={""}
            />
          ))}
        </div>
      </div>

      <PageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
};

export default sellItemListingPage;
