"use client";

// import styles from "./styles.module.css";
// class="flex flex-row justify-center w-full pt-[75px] px-14 md:pt-5 md:px-5"
import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import {
  Slider,
  Img,
  Button,
  Text,
  CheckBox,
  TextArea,
  Input,
  PageHeader,
  PageCard,
  PageFooter,
  Popup,
  RecommendedAuctionItem,
} from "ui";
// import CartSection from "../../components/CartSection";
// import DetailReviewSectionfooter from "../../components/DetailReviewSectionfooter";
// import Header from "../../components/Header";
// import HomepageCardproduct from "../../components/HomepageCardproduct";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";
import FilterComp from "./filterComp";

import { clientFunc } from "./clientFunction";
import { trpc } from "../_trpc/client";
import PaginationComp from "./paginationComp";
import { SelectBoxList } from "./SelectBox";
import FilterCompAndSelectBox from "./FilterCompAndSelectBox";
import { Header } from "../sell/headerTwo";
import FilterCompSearch from "./filterCompSearch";
import { ShowCaseArea } from "ui";
import { FilterSection } from "ui";
import { ResultBox } from "ui";

export default function ListingPage() {
  // const [sliderState, setSliderState] = React.useState(0);
  // const sliderRef = React.useRef<AliceCarousel>(null);
  // const [sliderState1, setSliderState1] = React.useState(0);
  // const sliderRef1 = React.useRef<AliceCarousel>(null);

  const [isOpen, setIsOpen] = useState(false);

  const [list, setList] = useState([]);

  // const response = trpc.getAuction.useQuery();

  const { data, isSuccess, isFetching } = clientFunc();

  useEffect(() => {
    console.log("I am called from UseEffect");
    // setList(data?.res.allAuctions);
  }, [isFetching]);

  // const list = data?.res.allAuctions;

  // console.log("list");
  console.log(list);
  // console.log(isSuccess);
  // console.log(isFetching);

  // console.log("listing items");

  if (list) {
    list.map((item: any) => console.log(item));
  } else {
    console.error("Data is undefined.");
  }

  const [filterData, setFiterData] = useState<string[]>([]);

  const handleDataFromFilterSection = (data: string[]) => {
    setFiterData(data);
  };

  const handleDataFromResultBox = () => {
    setFiterData([]);
  };
  useEffect(() => {
    console.log("filterData");
    console.log(filterData);
  }, [filterData]);

  return (
    <div>
      <Header></Header>

      {/* 
      <FilterCompAndSelectBox /> */}
      <div className="kXYRrE">
        <section id="upcoming-auctions" className="sc-f2a0224c-0 EhVxm">
          <h1 className="sc-a80bc31a-0 sc-79a75a3-0 CUOEB ksJUbr">
            Current auctions
          </h1>
        </section>
        <section className="scf2a0224c0 kufIwQ">
          {/* <FilterSection handleDataForPage={handleDataFromFilterSection} />

          {filterData.length !== 0 && (
            <ResultBox
              filterData={filterData}
              handleDataForResuPage={handleDataFromResultBox}
            />
          )} */}

          <ShowCaseArea />
        </section>
      </div>
    </div>
  );
}
