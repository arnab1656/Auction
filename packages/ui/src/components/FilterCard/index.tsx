import React, { useState } from "react";

interface FilterCardProps {
  auctions: { title: string; endDate: string }[];
}

export const FilterCard: React.FC<FilterCardProps> = ({ auctions }) => {
  return (
    <div className="sc-4f9f6940-0 gUHWyd">
      {auctions.map((auc) => {
        return (
          <article
            id="page-auction-calendar1"
            data-testid="page-auction-calendar1"
            className="sc-9d27dfff-0 eAoRlM"
          >
            <div className="sc-9d27dfff-1 gLNeum">
              <div className="sc-9d27dfff-2 ehaQLC">
                <a href="/auction/29452/california-and-western-art-online/">
                  <span className="sc-a80bc31a-0 sc-9d27dfff-4 eXPtRq gDsexy">
                    <h3 className="sc-a80bc31a-0 eXPtRq">
                      California &amp; Western Art Online
                    </h3>
                  </span>
                </a>
                <p className="sc-a80bc31a-1 sc-9d27dfff-8 gclbLU jrGcFO">
                  16 – 26 April | Online, Los Angeles
                </p>
              </div>
              <div className="sc-9d27dfff-6 fjXxTZ">
                <a href="/auction/29452/california-and-western-art-online/">
                  <div className="sc-9d27dfff-9 hgOSsN">
                    <img
                      alt="Auction cover image"
                      loading="lazy"
                      width="100"
                      height="0"
                      decoding="async"
                      data-nimg="1"
                      className="sc-a88a8bbb-0 fkCZxr sc-9d27dfff-10 dxXfnm"
                      sizes="100vw"
                      src="https://www.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg2.bonhams.com%2Fimage%3Fsrc%3DImages%252Flive%252F2024-02%252F26%252F25451426-2-2.jpg%26left%3D0.300000000000%26right%3D0.960416666666%26width%3D320&amp;w=2400&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </a>
              </div>
              <div className="sc-9d27dfff-7 gsXqYT">
                <div className="sc-a80bc31a-2 sc-9d27dfff-11 hedXho gqLmaH">
                  Open for bidding
                </div>
                <a href="/auction/29452/california-and-western-art-online/">
                  <span className="sc-a80bc31a-2 sc-9d27dfff-12 iLIiey kXVeRX">
                    <span>
                      View <span className="sl_plural">238</span> lots
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
