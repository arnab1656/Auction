"use client";

import React from "react";

import { Img } from "../Img";
import { Text } from "../Text";

type PageFooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const PageFooter: React.FC<PageFooterProps> = (props) => {
  return (
    <footer className={props.className}>
      <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
        <div className="flex md:flex-row flex-row md:gap-5 items-center justify-around w-full bg-slate-400">
          <div className="flex flex-1 md:flex-row flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-lg w-full"
                size="txtManropeBold18"
              >
                Features
              </Text>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Home v1
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Home v2
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  About
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Contact
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Search
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-lg w-full"
                size="txtManropeBold18"
              >
                Information
              </Text>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Listing v1
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Listing v2
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Property Details
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  <>Agent List</>
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Agent Profile
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-lg w-full"
                size="txtManropeBold18"
              >
                Documentation{" "}
              </Text>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Blog
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  FAQ
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  <>Privacy Policy</>
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  License
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-gray-900 text-lg w-full"
                size="txtManropeBold18"
              >
                Others
              </Text>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Log in
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Enter OTP
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  New Password
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Reset Password
                </Text>
                <Text
                  className="text-base text-gray-900 w-full"
                  size="txtManropeSemiBold16"
                >
                  Create Account
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="text-base text-gray-900 w-full"
          size="txtManropeSemiBold16"
        >
          © 2024. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};
