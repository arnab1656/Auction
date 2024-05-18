import React from "react";

export function ShowCaseAreaCard({ id }: any) {
  return (
    <article id={id} data-testid={id} className="sc9d27dfff0 eAoRlM">
      <div className="sc9d27dfff1 gLNeum">
        <div className="sc9d27dfff2 ehaQLC">
          <a
            href="https://www.bukowskis.com/auctions/F494/lots?utm_source=bonhams.com"
            data-testid="plain-anchor"
          >
            <span className="sca80bc31a0 sc9d27dfff4 eXPtRq gDsexy">
              <h2 className="sca80bc31a0 eXPtRq">
                Madeleine Pyk - Works on Paper
              </h2>
            </span>
          </a>
          <p className="sca80bc31a1 sc9d27dfff8 gclbLU jrGcFO">
            12 – 21 April | Sweden
          </p>
        </div>
        <div className="sc9d27dfff6 fjXxTZ">
          <a
            href="https://www.bukowskis.com/auctions/F494/lots?utm_source=bonhams.com"
            data-testid="plain-anchor"
          >
            <div className="sc9d27dfff9 hgOSsN">
              <img
                alt="Auction cover image"
                loading="lazy"
                width="100"
                height="0"
                decoding="async"
                data-nimg="1"
                className="sca88a8bbb0 fkCZxr sc9d27dfff10 dxXfnm"
                style={{ color: "transparent" }}
                sizes="100vw"
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </a>
        </div>
        <div className="sc9d27dfff7 gsXqYT">
          <div className="sca80bc31a2 sc9d27dfff11 hedXho gqLmaH">
            Open for bidding
          </div>
        </div>
      </div>
    </article>
  );
}
