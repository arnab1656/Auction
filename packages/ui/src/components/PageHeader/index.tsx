"use client";

import React, { useRef } from "react";
import Link from "next/link";

import "../../style/globals.css";

import { Button } from "../Button";
import { Img } from "../Img";
import { List } from "../List";
import { Text } from "../Text";
import { Input } from "../Input";
import { getProviders, signIn } from "next-auth/react";

type PageHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const inputRef = useRef(null);

  console.log("I am rendered in header comp ");

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = "black";
      console.log(inputRef.current);

      console.log("I am focused");
    } else {
      console.log("I am null pf");
    }
  };

  return (
    <header className={props.className}>
      <div className="flex flex-col w-full p-5">
        {/* The logo and title */}
        <div className="flex flex-row justify-between p-5">
          <div className="flex flex-row gap-[11px] items-center justify-start">
            <Img
              className="w-5"
              src="data:image/png;base64,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"
              alt="home"
            />
            <Text
              className="text-orange-A700 text-xl w-auto"
              size="txtMarkoOneRegular20"
            >
              AuctionIt
            </Text>
          </div>
          {/* the option of nav bar of ca and register */}

          <div className="flex flex-row gap-4 items-center">
            <Text
              className="text-base text-center text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              <Link href="/createaccount"> Create Account </Link>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto cursor-pointer"
              size="txtManropeSemiBold16"
            >
              <Link href="/signin"> Log In </Link>
            </Text>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 w-[450px]"></div>

        <div
          className="flex flex-row justify-between items-center pr-4 pl-5 pb-5"
          // style={{ padding: "10px" }}
        >
          <List
            className="sm:flex-col flex-row gap-10 grid grid-cols-4"
            orientation="horizontal"
          >
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              Auction
            </Text>

            <Text
              className="text-base text-gray-900 w-auto "
              size="txtManropeSemiBold16"
            >
              Sell
            </Text>

            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              Departments
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              Dashboard
            </Text>
          </List>

          <Input
            className="w-[295px] outline-none"
            wrapClassName="flex flex-row p-3 w-[350px] justify-between border border-1  border-gray-200 items-center"
            ref={inputRef}
            placeholder="search for your item"
            onClick={handleClick}
          >
            <Img
              className="w-5 h-5"
              src="data:image/png;base64,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"
              alt="home"
            ></Img>
          </Input>
        </div>
      </div>
    </header>
  );
};
