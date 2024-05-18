"use client";

import React from "react";

import { Img } from "../Img";
import { Text } from "../Text";
import { Button } from "../Button";

type BidCardProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "image"
  | "p286162ndaveoaklone"
  | "p3bedroom"
  | "bathcounter"
  | "sqftcounter"
  | "p1bath"
  | "viewDetails"
  | "price"
> &
  Partial<{
    image: string;
    p286162ndaveoaklone: string;
    p3bedroom: string;
    bathcounter: string;
    sqftcounter: string;
    p1bath: string;
    viewDetails: string;
    price: string;
  }>;

export const BidCard: React.FC<BidCardProps> = (props) => {
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
              name="title"
              className="flex-1 text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              {props?.p286162ndaveoaklone}
              Jewels Online
            </Text>
          </div>
          <div className="flex flex-col gap-[20px] items-start justify-start w-full">
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <Text
                name="description"
                className="flex-1 text-base text-gray-700 w-auto"
                size="txtManropeSemiBold16Gray700"
              >
                {props?.p3bedroom}
                19 – 27 February | London, Knightsbridge
              </Text>
            </div>
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <Text
                className="flex-1 text-base text-gray-700 w-auto"
                size="txtManropeSemiBold16Gray700"
              >
                {props?.sqftcounter}
                Current bid
              </Text>
            </div>
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <Text
                className="flex-1 text-base text-gray-700 w-auto"
                size="txtManropeSemiBold16Gray700"
              >
                {props?.sqftcounter}
                bid ends in
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[31px] items-center justify-start w-full">
            <Button className="text-rose-400 bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] text-base text-center text-white-A700 w-full">
              {props?.viewDetails}
              jhvjasf
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
