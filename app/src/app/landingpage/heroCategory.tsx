export default function HeroCategory() {
  return (
    <section className="sc-f2a0224c-0 dydMYR">
      <h2 className="sc-a80bc31a-0 CUOEB">Discover more</h2>
      <ol className="sc-eacc6dd3-0 hAxymq">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
          return (
            <li aria-label="Chinese Ceramics &amp; Works of Art (561)">
              <a
                className="sc-eacc6dd3-4 lfJCzg"
                href="/search/?departments=Chinese%20Ceramics%20%26%20Works%20of%20Art#lot-search-results"
              >
                <div className="sc-eacc6dd3-1 gjJSWy">
                  <div className="sc-eacc6dd3-2 eXpbkn">
                    <img
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="sc-a88a8bbb-0 fkCZxr sc-eacc6dd3-3 ktSiOv"
                      sizes="100vw"
                      src="https://images.pexels.com/photos/437730/pexels-photo-437730.jpeg?auto=compress&cs=tinysrgb&w=600"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="sc-eacc6dd3-5 gOYDKY">
                    <p className="sc-a80bc31a-1 sc-eacc6dd3-6 dZlorR enEYAv">
                      Chinese Ceramics &amp; Works of Art
                    </p>
                    <p className="sc-a80bc31a-1 sc-eacc6dd3-7 dZlorR gJjKNq">
                      (561)
                    </p>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ol>
      <div className="sc-eacc6dd3-9 A-dmOh">
        <button className="sc-baf0b6e7-0 sc-baf0b6e7-1 glDRNm cMbfWu sc-eacc6dd3-8 fTmfxf">
          Show all<span className="sc-b36ad9cf-0 yhnAg">categories</span>
        </button>
      </div>
    </section>
  );
}
