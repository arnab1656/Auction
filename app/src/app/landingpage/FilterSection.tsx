import { RecommendedAuctionItem } from "ui";
import TagList from "./filterTag";
import React from "react";

export const SectionFilter = () => {
  return (
    <section className="flex flex-col items-start justify-center">
      <h2 className="text-2xl font-bold mb-4">Auctions near you</h2>
      <div>
        <div className=" flex flex-row border border-gray-300 rounded p-4 mb-4">
          <div className="font-bold mb-2">Location:</div>
          <TagList />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((props, index) => (
          <React.Fragment key={index}>
            <RecommendedAuctionItem
              title={""}
              sellItemId={0}
              description={""}
              startDate={""}
              endDate={""}
              status={""}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
