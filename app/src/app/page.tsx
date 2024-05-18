"use client";

import { Button, Text } from "ui";
import { trpc } from "./_trpc/client";

import queryClient from "@/util/query-client";
import { env } from "process";

export default function App(): JSX.Element {
  // const { data, mutate, isSuccess } = trpc.SellItemForAuction.useMutation();

  console.log("Hi i am the main page");

  // const { data, isSuccess } = trpc.getAuction.useQuery();

  function OnClickHandler() {}

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
    </div>
  );
}
