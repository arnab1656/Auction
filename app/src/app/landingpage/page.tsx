"use client";

import React, { Fragment } from "react";
import { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { auctions } from "./dummy";

import TagList from "./filterTag";

import {
  Button,
  CheckBox,
  Img,
  Input,
  List,
  RecommendedAuctionItem,
  Slider,
  SliderSection,
  TagFilterComponent,
  Text,
} from "ui";
import { PageCard, PageFooter, PageHeader } from "ui";
import { SectionFilter } from "./FilterSection";
import { Header } from "../sell/headerTwo";
import HeroAuctionArea from "./heroAuction";
import HeroCategory from "./heroCategory";
import { HeroFooter } from "ui";

const LandingPage: React.FC = () => {
  // const navigate = useNavigate();

  const useCount = useRef(0);

  const tags = ["Fashion", "Food", "Travel", "Technology", "Art"];

  if (useCount.current) {
    console.log("I am rendered " + useCount.current);
    useCount.current = useCount.current + 1;
  }

  console.log("I am rendered LandingPage");

  const sliderRef = useRef(null);
  const [sliderState, setsliderState] = useState(0);

  // const sliderRef = useRef(null);
  // const [sliderState, setsliderState] = useState(0);

  return (
    <div>
      <Header></Header>
      <main className="sc-c3e8e4d-0 kXYRrE">
        <Slider
          autoPlay
          autoPlayInterval={4000}
          // activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          // onSlideChanged={(e) => {
          //   setsliderState(e?.item);
          // }}
          ref={sliderRef}
          className="mx-auto w-full"
          items={[...Array(3)].map(() => (
            <Fragment key={Math.random()}>
              <div className="relative flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start">
                <Img
                  className="flex-1  md:flex-none h-full sm:h-auto object-cover w-full"
                  src="https://www.bonhams.com/assets/img/carousel/oqGs7NgSxtPcIpDu82kX1ZjA.jpeg"
                  alt="rectangle5591"
                />
                <div className="absolute z-10  float-left flex flex-1 flex-col gap-1 items-start justify-start bg-slate-300 w-[350px] h-[150px] top-[330px] left-5 p-6 rounded-md">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                    size="txtManropeExtraBold28"
                  >
                    Arnab Paul
                  </Text>
                  <Text>form 10 April</Text>
                  <Button>do Auction</Button>
                </div>
              </div>
            </Fragment>
          ))}
        />
        <SliderSection auctions={auctions} />
        <TagFilterComponent />
        <HeroCategory></HeroCategory>
      </main>

      <HeroFooter></HeroFooter>
    </div>
  );
};

export default LandingPage;
