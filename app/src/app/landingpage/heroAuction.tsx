export default function HeroAuctionArea() {
  return (
    <section className="sc-f2a0224c-0 dydMYR">
      <h2 className="sc-a80bc31a-0 CUOEB">Auctions near you</h2>
      <div data-testid="region-undefined">
        <div className="sc-5a358c27-1 PRBbP">
          <fieldset className="sc-5a358c27-2 eecalz">
            <legend className="sc-a80bc31a-2 sc-5a358c27-3 iLIiey hhGVHr">
              Location:
            </legend>
            <ul
              role="list"
              aria-label="Countries"
              className="sc-5a358c27-0 dohTDJ"
            >
              <li>
                <div className="sc-7a302213-0 jXNff">
                  <input
                    type="checkbox"
                    id="United Kingdom (43)-checkbox"
                    className="sc-7a302213-5 edXAUi"
                  />
                  <label
                    htmlFor="United Kingdom (43)-checkbox"
                    className="sc-7a302213-4 kIfFIU"
                  >
                    United Kingdom (43)
                  </label>
                </div>
              </li>
              <li>
                <div className="sc-7a302213-0 jXNff">
                  <input
                    type="checkbox"
                    id="Asia-Pacific (5)-checkbox"
                    className="sc-7a302213-5 edXAUi"
                  />
                  <label
                    htmlFor="Asia-Pacific (5)-checkbox"
                    className="sc-7a302213-4 kIfFIU"
                  >
                    Asia-Pacific (5)
                  </label>
                </div>
              </li>
              <li>
                <div className="sc-7a302213-0 jXNff">
                  <input
                    type="checkbox"
                    id="Americas (24)-checkbox"
                    className="sc-7a302213-5 edXAUi"
                  />
                  <label
                    htmlFor="Americas (24)-checkbox"
                    className="sc-7a302213-4 kIfFIU"
                  >
                    Americas (24)
                  </label>
                </div>
              </li>
              <li>
                <div className="sc-7a302213-0 jXNff">
                  <input
                    type="checkbox"
                    id="Europe (46)-checkbox"
                    className="sc-7a302213-5 edXAUi"
                  />
                  <label
                    htmlFor="Europe (46)-checkbox"
                    className="sc-7a302213-4 kIfFIU"
                  >
                    Europe (46)
                  </label>
                </div>
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
      <div className="sc-4f9f6940-0 gUHWyd">
        {[1, 2, 3, 4].map(() => {
          return (
            <article
              id="page-auction-calendar1"
              data-testid="page-auction-calendar1"
              className="sc-9d27dfff-0 eAoRlM"
            >
              <div className="sc-9d27dfff-1 gLNeum">
                <div className="sc-9d27dfff-2 ehaQLC">
                  <a href="/auction/29762/the-greek-sale/">
                    <span className="sc-a80bc31a-0 sc-9d27dfff-4 eXPtRq gDsexy">
                      <h3 className="sc-a80bc31a-0 eXPtRq">The Greek Sale</h3>
                    </span>
                  </a>
                  <p className="sc-a80bc31a-1 sc-9d27dfff-8 gclbLU jrGcFO">
                    24 April, 13:00 CEST | Paris, Avenue Hoche | Live auction
                  </p>
                </div>
                <div className="sc-9d27dfff-6 fjXxTZ">
                  <a href="/auction/29762/the-greek-sale/">
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
                        src="https://images.pexels.com/photos/203561/pexels-photo-203561.jpeg?auto=compress&cs=tinysrgb&w=600"
                      />
                    </div>
                  </a>
                </div>
                <div className="sc-9d27dfff-7 gsXqYT">
                  <div className="sc-a80bc31a-2 sc-9d27dfff-11 hedXho gqLmaH">
                    Open for bidding
                  </div>
                  <a href="/auction/29762/the-greek-sale/">
                    <span className="sc-a80bc31a-2 sc-9d27dfff-12 iLIiey kXVeRX">
                      <span>
                        View <span className="sl_plural">171</span> lots
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="sc-472c93b7-0 cePKgs">
        <a className="sc-baf0b6e7-5" href="/auctions/upcoming/">
          <span className="sc-baf0b6e7-0 sc-baf0b6e7-1 glDRNm cMbfWu sc-472c93b7-1 bUFoOK">
            View more upcoming auctions
          </span>
        </a>
      </div>
    </section>
  );
}
