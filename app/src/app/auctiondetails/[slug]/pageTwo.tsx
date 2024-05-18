"use client";

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
import FilterComp from "../filterComp";
import LoadingAnimation from "../loader";

import { clientFuncForTrpc } from "../clientFunction";

import { clientFuncForTrpcTwo } from "../clientFunction";

import { landingPageCardPropList } from "../pageProp";

import { validateInput } from "../validator/inputValidator";

import { BidManager } from "@/manager/BidManager";
import FilterCompAndSelectBox from "@/app/auctionpage/FilterCompAndSelectBox";

export default function DetailPage({ params }: { params: { slug: string } }) {
  // const [sliderState, setSliderState] = React.useState(0);
  // const sliderRef = React.useRef<AliceCarousel>(null);
  // const [sliderState1, setSliderState1] = React.useState(0);
  // const sliderRef1 = React.useRef<AliceCarousel>(null);

  console.log(params.slug);

  const auctionId = parseInt(params.slug);

  // const bidManagerInstance = BidManager.getInstance();

  // const { permit, IncrementalBidPrice, highestBid } =
  // bidManagerInstance.canBid(auctionId);

  // console.log("{ permit, calculateIncrementalBidPrice, highestBid }");
  // console.log({ permit, IncrementalBidPrice, highestBid });

  // const result = trpc.getAuction.useQuery();

  const [isOpen, setIsOpen] = useState(false);

  const [response, setResponse] = useState<any>();

  // const { data, isFetching, isSuccess } = clientFuncForTrpc(auctionId);

  // console.log("data");
  // console.log(data);

  // console.log("isSuccess");
  // console.log(isFetching);

  // useEffect(() => {
  //   console.log("I am in useEfffect");
  //   setResponse(data);
  // }, [isSuccess]);

  const {
    data: dataBid,
    mutate,
    isSuccess: bidSuccess,
  } = clientFuncForTrpcTwo();

  // console.log("dataBid");
  // console.log(dataBid);

  // console.log("bidSuccess");
  // console.log(bidSuccess);

  const [inputValue, setInputValue] = useState<number>(0);

  console.log(inputValue);

  if (response) {
    console.log(response);
  } else {
    console.error("wrong u r improving");
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  function handleInputChange(e: any) {
    const value = parseFloat(e.target.value);
    setInputValue(value);
  }

  function handleClick(input: number) {
    //All are for debugging
    // console.log("dataBid from handle click handler");
    // console.log(dataBid);

    // console.log("bidSuccess from handle click handler");
    // console.log(bidSuccess);

    const validationResult = validateInput(inputValue, IncrementalBidPrice);

    console.log("validationResult");
    console.log(validationResult);

    if (validationResult.valid) {
      mutate({ amount: inputValue, auctionId: auctionId, bidderId: 2 });
    } else {
      console.error("Type error from validation");
    }
  }

  return (
    <div className="flex flex-col items-center justify-start w-full bg-gray-50">
      {/* <LoadingAnimation /> */}
      <PageHeader className="w-full"></PageHeader>

      <img
        alt=""
        loading="lazy"
        decoding="async"
        className=" w-full h-1/2 bg-transparent"
        src="https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%252Flive%252F2024-04%252F12%252FE-29776-0-2.jpg%26width%3D2880&amp;w=2400&amp;q=75"
        srcSet="https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%252Flive%252F2024-04%252F12%252FE-29776-0-2.jpg%26width%3D2880&amp;w=576&amp;q=75 576w, https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%252Flive%252F2024-04%252F12%252FE-29776-0-2.jpg%26width%3D2880&amp;w=768&amp;q=75 768w, https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%252Flive%252F2024-04%252F12%252FE-29776-0-2.jpg%26width%3D2880&amp;w=1200&amp;q=75 1200w, https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%252Flive%252F2024-04%252F12%252FE-29776-0-2.jpg%26width%3D2880&amp;w=2400&amp;q=75 2400w"
      />

      <div className="flex flex-row">
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
          <div className="text-green-600 font-bold mb-2">Open for bidding</div>
          <h1 className="text-2xl font-bold mb-2">
            <div className="firstLine">
              1910-2010 One Hundred Years of Haute-Couture
            </div>
          </h1>
          <div className="mb-2">
            <div className="otherLine">Part II Online</div>
          </div>
          <div className="flex items-center mb-4">
            <div className="text-gray-600 mr-4">
              <div className="iLIiey">
                Ending from 15 April 2024, 12:00 CEST
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                className="w-6 h-6"
                viewBox="0 0 42 42"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                {/* SVG path */}
              </svg>
              <span>Online only</span>
            </div>
            <div>
              <svg
                className="w-6 h-6"
                viewBox="0 0 42 42"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                {/* SVG path */}
              </svg>
              <span>
                <a href="/location/ONPAH/online-paris/">Online, Paris</a>
              </span>
            </div>
          </div>
        </div>
        {/* kjhskdf */}
        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                {/* SVG path */}
              </svg>
              Add to calendar
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                {/* SVG path */}
              </svg>
              Share
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                {/* SVG path */}
              </svg>
              Follow
            </button>

            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2"
              >
                {/* SVG path */}
              </svg>
              Price
            </button>
          </div>
          <div className="text-center">
            <a
              href="/login/?next=https://live.bonhams.com/register-to-bid/4-D5SRXC?return_to_widget=https%3A%2F%2Fwww.bonhams.com%2Fauction%2F29776%2F1910-2010-one-hundred-years-of-haute-couture-part-ii-online%2F%3Fpage%3D3"
              className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={togglePopup}
            >
              Register to bid
            </a>
          </div>
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Text>Popup Title</Text>
                <h2 className="text-xl font-bold mb-4">Popup Title is here</h2>
                <Input
                  className="w-[295px]"
                  wrapClassName="flex flex-row p-3 w-[350px] justify-between border border-1  border-gray-200 items-center"
                  // ref={inputRef}
                  placeholder="Place your offer"
                  onChange={handleInputChange}
                  value={inputValue}
                ></Input>

                <Button
                  className=" w-full mt-5 bg-purple-700 p-5"
                  onClick={() => handleClick(inputValue)}
                >
                  Submit
                </Button>

                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={togglePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px]  py-[120px] w-full">
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
          size="txtManropeExtraBold36"
        >
          Recommended auctions
        </Text>

        <FilterCompAndSelectBox />
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
      <PageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 py-20 w-full" />
    </div>
  );
}
