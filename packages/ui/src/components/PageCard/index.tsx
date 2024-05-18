"use client";

import React from "react";

import { Img } from "../Img";
import { Text } from "../Text";
import { Button } from "../Button";

interface AuctionProps {
  sellItemId: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  sellerId?: number;
}

type PageCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  AuctionProps;

export const PageCard: React.FC<PageCardProps> = (props: PageCardProps) => {
  return (
    <div className={props.className}>
      <Img
        className="h-[260px] sm:h-[260px] object-cover w-full"
        alt="image"
        src={props?.image}
      />
      <div className="bg-gray-51 border border-red-101 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
        <div className="flex flex-col gap-[27px] items-start justify-start w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-full">
            <Img className="h-6 w-6" src="defaultNoData.png" alt="eye" />
            <Text
              className="flex-1 text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              {props.title}
            </Text>
          </div>
          <div className="flex flex-col gap-[21px] items-start justify-start w-full">
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <Img
                  className="h-5 w-5"
                  src="defaultNoData.png"
                  alt="bookmark"
                />
                <Text
                  className="flex-1 text-base text-gray-700 w-auto"
                  size="txtManropeSemiBold16Gray700"
                >
                  {props.startDate} to {props.endDate}
                </Text>
              </div>
            </div>
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                <Img className="h-5 w-5" src="defaultNoData.png" alt="icon" />
                <Text
                  className="flex-1 text-base text-gray-700 w-auto"
                  size="txtManropeSemiBold16Gray700"
                >
                  OPEN FOR BIDDING
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[31px] items-center justify-start w-full">
            <Button className="bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] text-base text-center text-white-A700 w-full text-red-400"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
