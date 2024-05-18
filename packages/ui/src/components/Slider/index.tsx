"use client";

import React, { useRef, useState } from "react";
import AliceCarousel, { EventObject, Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
  Partial<{
    className: string;
    items: React.ReactElement[];
    centerMode: boolean;
    magnifiedIndex?: number;
    activeSlideCSS?: string;
  }>;

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  (
    {
      className,
      items,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref
  ) => {
    // isSmall takes number as index in param
    // console.log("props activeIndex");
    // console.log(centerMode);

    const [activeIndex, setActiveIndex] = useState(items?.length);

    const isSmall = (index: number) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS]
                .filter(Boolean)
                .join(" "),
            });
          }

          return React.cloneElement(child);
        })
      : items;

    // console.log("slideItems");
    // console.log(slideItems);

    const carouselRef = useRef<AliceCarousel>(null);

    const handlePrev = () => {
      if (carouselRef.current) {
        carouselRef.current.slidePrev(); // Use slidePrev method
      }
    };

    const handleNext = () => {
      if (carouselRef.current) {
        carouselRef.current.slideNext(); // Use slideNext method
      }
    };

    const handleDotClick = (index: number) => {
      // console.log("index");
      // console.log(index);

      if (carouselRef.current) {
        carouselRef.current.slideTo(index);
      }
    };

    function handleOnSlideChanged(e: EventObject): void {
      // console.log("e.item");
      // console.log(e.item);
      setActiveIndex(e.item);
    }

    return (
      <div className={className} style={{ position: "relative" }}>
        <AliceCarousel
          items={slideItems}
          disableDotsControls={true}
          {...props}
          disableButtonsControls={true}
          infinite
          onSlideChanged={handleOnSlideChanged}
          // ref={ref}
          ref={carouselRef}
        />
        <div className="flex justify-center items-end">
          {/* Previous Button */}
          <button
            className="absolute left-0 top-60 z-10 bg-transparent text-white rounded-full w-50 h-10 flex justify-center items-center m-2"
            onClick={() => handlePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-0 top-60 z-10 bg-transparent text-white rounded-full w-50 h-10 flex justify-center items-center m-2"
            onClick={() => handleNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <DotNavigation
          // activeIndex={carouselRef.current?.state.activeIndex}
          activeIndex={activeIndex}
          totalCount={items?.length}
          handleDotClick={handleDotClick}
        />
      </div>
    );
  }
);
export { Slider };

const DotNavigation = ({
  activeIndex,
  totalCount,
  handleDotClick,
}: {
  activeIndex: number;
  totalCount: number;
  handleDotClick: (index: number) => void;
}) => {
  // const dots = Array.from({ length: totalCount }, (_, index) => index);

  const dots = [];

  for (let i = 0; i < totalCount; i++) {
    dots.push(i === 0 ? totalCount : i);
  }

  return (
    <div className="absolute top-[450px] left-[600px] flex justify-center mt-4">
      {dots.map((d, index) => (
        <button
          key={index}
          className={`border-2 border-gray-500 w-3 h-3 mx-1 rounded-full ${
            d === activeIndex ? "bg-gray-700" : "bg-transparent"
          }`}
          onClick={() => handleDotClick(d)}
        />
      ))}
    </div>
  );
};
