"use client";

import { Button, NotificationTrigger, Text } from "ui";
import { trpc } from "../_trpc/client";
import queryClient from "@/util/query-client";

import { users } from "@/database/databaseController/userControlller/userList";
import { sellers } from "@/database/databaseController/sellerController/sellerList";

import { userCreateSeedFunc } from "./trpcClientFunctions/userCreateSeed";
import { useRouter } from "next/router";

import { RecommendedAuctionItem } from "ui";
import {
  sellItems,
  auctions,
} from "@/database/databaseController/sellItemController/list";
import { sellerCreateSeedFunc } from "./trpcClientFunctions/sellerCreateSeed";
import { sellItemCreateSeedFunc } from "./trpcClientFunctions/sellItemCreateSeed";
import { bidderCreateSeedFunc } from "./trpcClientFunctions/bidderCreateSeed";
import { bidCreateSeedFunc } from "./trpcClientFunctions/bidCreateSeedFunc";
import { bidders } from "@/database/databaseController/bidderController/bidderList";
import { auctionCreateSeedFunc } from "./trpcClientFunctions/auctionCreateSeed";
import { bids } from "@/database/databaseController/bidController/seed";

import { auctionGetSeedFunc } from "./trpcClientFunctions/auctionGetSeedFunc";
import { getAuctionBidDetailsSeed } from "./trpcClientFunctions/auctionBidDetailsSeed";

import { main } from "@/manager/BidManager";
import { Fragment, useEffect, useState } from "react";
import { getAuctionWithBidDetails } from "@/database/databaseController/auctionController/GetAuctionBidDetails";
import { any, date } from "zod";
import { mainAuction } from "@/manager/AuctionManager";

const data = [
  { id: 1, tags: ["tag1", "tag2"] },
  { id: 2, tags: ["tag1", "tag3"] },
  { id: 3, tags: ["tag2", "tag3"] },
  { id: 4, tags: ["tag1", "tag2", "tag3"] },
];
const Slider = ({ items }: { items: string[] }) => {
  return (
    <AliceCarousel
      // items={items}
      items={[...Array(3)].map(() => (
        <Fragment key={Math.random()}>
          <div className="relative flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start">
            <img
              className="flex-1  md:flex-none h-full sm:h-auto object-cover w-full"
              src="https://www.bonhams.com/assets/img/carousel/oqGs7NgSxtPcIpDu82kX1ZjA.jpeg"
              alt="rectangle5591"
            />
            <div className="absolute z-10  float-left flex flex-1 flex-col gap-1 items-start justify-start bg-slate-300 w-[350px] h-[100px] top-[330px] left-5 p-6 rounded-md">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                size="txtManropeExtraBold28"
              >
                Arnab Paul
              </Text>
              <Text
                className="text-gray-900 text-lg w-full"
                size="txtManropeSemiBold18"
              >
                Senior Developer
              </Text>
            </div>
          </div>
        </Fragment>
      ))}
      autoPlay
      autoPlayInterval={3000} // Set auto play interval in milliseconds
      infinite
      animationDuration={1000} // Set animation duration in milliseconds
      disableButtonsControls // Disable buttons controls
      disableDotsControls // Disable dots navigation
    />
  );
};

const FilterableData = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Filter data based on selected tags
  React.useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
      setFilteredData(filtered);
    }
  }, [selectedTags, data]);

  return (
    <div>
      <div>
        {selectedTags.map((tag) => (
          <span
            key={tag}
            onClick={() => toggleTag(tag)}
            className="cursor-pointer border border-gray-300 rounded-full px-2 py-1 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        {filteredData.map((item) => (
          <div key={item.id}>{/* Render your data item here */}</div>
        ))}
      </div>
    </div>
  );
};

const Tag = ({ text, onClick }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    onClick(text);
  };
  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 ${
        selected ? "bg-gray-200" : ""
      }`}
      onClick={handleClick}
    >
      <span>{text}</span>
      {selected && (
        <button
          className="ml-1 text-xs text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            onClick(text);
          }}
        >
          &#10006;
        </button>
      )}
    </div>
  );
};

const tags = ["react", "javascript", "html", "css", "nodejs"];

const TagList = ({ tags, onTagClick }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} onClick={onTagClick} />
      ))}
    </div>
  );
};

export default function Testing() {
  // const session = await getServerSession(authOptions);
  // const user = session?.user;

  console.log("env from auction");
  console.log(process.env);

  const {
    data: userData,
    mutate: userMutate,
    isSuccess: userSuccess,
  } = userCreateSeedFunc();

  const {
    data: sellerData,
    mutate: sellerMutate,
    isSuccess: sellerSuccess,
  } = sellerCreateSeedFunc();

  const {
    data: bidderData,
    mutate: bidderMutate,
    isSuccess: bidderSucess,
  } = bidderCreateSeedFunc();

  const {
    data: sellItemData,
    mutate: sellItemMutate,
    isSuccess: sellItemSucess,
  } = sellItemCreateSeedFunc();

  const {
    data: sellItemForAuctionData,
    mutate: sellItemForAuctionMutate,
    isSuccess: sellItemForAuctionSucess,
  } = auctionCreateSeedFunc();

  useEffect(() => {
    // Trigger user creation when the component mounts
    // createUser();
    // createSeller();
  }, []);

  const createUser = () => {
    // Call userCreateSeedFunc to create a user

    users.map((user) => {
      return userMutate({
        email: user.email,
        name: user.name,
        password: user.password,
      });
    });
  };

  const createSeller = () => {
    sellers.map((seller) => {
      return sellerMutate({ email: seller.email });
    });
  };

  const createBidder = () => {
    bidders.map((bidder) => {
      return bidderMutate({ email: bidder.email });
    });
  };

  const sellItemCreate = () => {
    // Call userCreateSeedFunc to create a user

    sellItems.map((item) => {
      return sellItemMutate({
        description: item.description,
        name: item.name,
        price: item.price,
        sellerId: item.sellerId,
      });
    });
  };

  const sellItemListForAuction = () => {
    auctions.map((auction) => {
      return sellItemForAuctionMutate({
        description: auction.description,
        endDate: auction.endDate,
        startDate: auction.startDate,
        sellItemId: auction.sellerId,
        title: auction.title,
        active: true,
        processed: auction.processed,
      });
    });
  };

  // const { data, isSuccess } = auctionGetSeedFunc();

  // console.log(data, isSuccess);

  // mainAuction();
  // main();

  // const { data, mutate, isSuccess } = auctionCreateSeedFunc();

  // const { data, isFetching } = trpc.UpdateAuctionStatusRoute.useQuery({
  //   auctionId: 13,
  //   status: true,
  // });

  // console.log("data fro the updated auction for status");
  // console.log(data);

  // const { data, mutate, isSuccess } = sellItemCreateSeedFunc();

  // const { data, isFetching, isSuccess } =
  //   trpc.getSellItemFromAuction_IdRoute.useQuery({ auctionId: 13 });

  // const { data, isSuccess } = getAuctionBidDetailsSeed(6);

  // console.log("data");
  // console.log(data);

  // const instance = AuctionManager.getInstance();

  // console.log(instance);

  function OnClickHandler() {
    // sellItemListForAuction();
    createUser();
    // createSeller();
    // createBidder();
    // sellItemCreate();
    // sellItemListForAuction();
    // router.push("/dashboard");
  }

  return (
    <div>
      HI i am main page
      <Text
        className="sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-900 tracking-[-1.08px] w-full"
        size="txtManropeExtraBold54"
      >
        Get in touch {` `}
        {/* {data} */}
      </Text>
      <Button className="bg-red-500" onClick={OnClickHandler}>
        Hi
      </Button>
      <Button className="bg-red-500 ml-7" onClick={signOut}>
        Logout
      </Button>
      <NotificationTrigger></NotificationTrigger>
      slider
      <Slider
        images={[
          "data:image/jpeg;base64,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",
          "data:image/jpeg;base64,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",
          "data:image/jpeg;base64,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",
        ]}
      />
      <FilterableData data={data}></FilterableData>
      <TagList tags={tags} onClick={""}></TagList>
    </div>
  );
}

import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { signOut } from "next-auth/react";
