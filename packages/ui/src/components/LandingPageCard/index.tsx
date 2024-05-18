"use client";
import React from "react";
import { Text } from "..";

interface AuctionProps {
  sellItemId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  sellerId?: number;
}

type PageCardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  AuctionProps;

export const RecommendedAuctionItem: React.FC<PageCardProps> = ({
  sellItemId,
  title = "khkhjljl",
  description,
  startDate = "jbk",
  endDate = "hhlh",
  status = "true",
  sellerId,
  ...rest
}) => {
  return (
    <div
      id="page-recommended1"
      data-testid="page-recommended1"
      className="flex flex-col justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md w-[250px]"
    >
      <div className="text-center">
        <a
          href="/auction/29776/1910-2010-one-hundred-years-of-haute-couture-part-ii-online/"
          className="text-blue-500 hover:underline"
        >
          <Text className="text-xl font-bold">
            1910-2010 One Hundred Years of Haute-Couture : Part II Online
            {title}
          </Text>
        </a>
        <Text className="text-gray-500 text-center">
          5 – 15 April | Online, Paris
          {startDate} - {endDate} | Online, Paris
        </Text>
      </div>
      <div className="mt-4">
        <a href="/auction/29776/1910-2010-one-hundred-years-of-haute-couture-part-ii-online/">
          <img
            alt="Auction cover image"
            loading="lazy"
            width="100"
            height="0"
            decoding="async"
            data-nimg="1"
            className="w-48 h-auto"
            src="https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%252Flive%252F2024-03%252F18%252F25482595-4-1.jpg%26top%3D0.010000000000%26left%3D0.110000000000%26right%3D0.880000000000%26width%3D320&amp;w=2400&amp;q=75"
          />
        </a>
      </div>
      <div className="mt-4">
        <Text className="text-green-500">Open for bidding</Text>
        <Text className="text-green-500">{status}</Text>
        <a
          href="/auction/29776/1910-2010-one-hundred-years-of-haute-couture-part-ii-online/"
          className="text-blue-500 hover:underline"
        >
          <span>
            View <span className="font-bold">263</span> lots
          </span>
        </a>
      </div>
    </div>
  );
};
