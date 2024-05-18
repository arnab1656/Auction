"use client";

import React from "react";
import { Text, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

interface Props {
  className?: string;
}
function Sidebar1({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="250px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <Img
        src="images/img_logo_40x162.png"
        alt="logo_one"
        className="w-full mt-[30px] mx-auto object-cover max-w-[162px]"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
            [`&:hover, &.ps-active`]: {
              color: "#314ca3",
              fontWeight: "500 !important",
            },
          },
        }}
        className="flex flex-col items-center justify-start w-full mt-[67px] mb-[347px]"
      >
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img
            src="images/img_vector_blue_gray_400_25x25.svg"
            alt="vector_one"
            className="h-[25px] w-[25px] ml-[22px]"
          />
          <Text size="3xl" as="p">
            Your items
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img
            src="images/img_glyph.svg"
            alt="glyph_one"
            className="h-[25px] w-[25px] ml-[22px]"
          />
          <Text size="3xl" as="p">
            My bids
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img
            src="images/img_user_3_1_indigo_600_01.svg"
            alt="user3one_one"
            className="h-[25px] w-[25px] ml-[22px]"
          />
          <Text size="3xl" as="p">
            Watchlist
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img
            src="images/img_group.svg"
            alt="image"
            className="h-[25px] w-[25px] ml-[22px]"
          />
          <Text size="3xl" as="p">
            Settings
          </Text>
        </div>
      </Menu>
    </Sidebar>
  );
}

export { Sidebar1 };
