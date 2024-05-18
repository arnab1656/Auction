import React from "react";
import { useEffect, useRef, useState } from "react";

type Auction = {
  title: string;
  estimatedStartPrice: string;
  estimatedEndPrice: string;
};

// Define the prop type for the SliderSection component
type SliderSectionProps = {
  auctions: Auction[];
};

export function SliderSection({
  auctions,
}: SliderSectionProps): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const isAtLeftmost = containerRef.current?.scrollLeft === 0;

        console.log("isAtLeftmost");
        console.log(isAtLeftmost);

        setShowLeftButton(!isAtLeftmost);

        const isAtRightmost =
          containerRef.current.clientWidth - containerRef.current.scrollLeft <
          containerRef.current.clientWidth;

        const x =
          containerRef.current.clientWidth - containerRef.current.scrollLeft;

        console.log("x");
        console.log(x);

        console.log("isAtRightmost");
        console.log(isAtRightmost);

        setShowRightButton(!isAtRightmost);
      }
    };

    containerRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -500, behavior: "smooth" });

      const scrollPosition = containerRef.current.scrollLeft;
      const activePage = Math.floor(
        scrollPosition / containerRef.current.clientWidth
      );

      console.log("activePag left e");
      console.log(activePage);

      // Update the active page
      setActiveDot(activePage);
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 500, behavior: "smooth" });

      const activePage = containerRef.current.scrollLeft + 1;

      console.log("activePage right");
      console.log(activePage);

      // Update the active page
      setActiveDot(activePage);
    }
  };

  const scrollToPage = (page: number) => {
    if (containerRef.current) {
      // Calculate the scroll position to the page
      const scrollPosition = page * containerRef.current.clientWidth;

      // Scroll to the calculated position
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setActiveDot(page);
    }
  };
  return (
    <section
      data-testid="auction-highlights-section"
      className="scf2a0224c0 dydMYR"
    >
      <h2 className="CUOEB">Auction highlights</h2>
      <div translate="no">
        <div
          data-testid="carousel"
          className="jdGMtK jppoXH lo"
          ref={containerRef}
        >
          <div data-testid="container-1" className="kqQYUy">
            {auctions.map((auc, index) => {
              return (
                <div
                  data-testid={`element-${index}`}
                  className="kpwKAC sc10781cec1"
                >
                  <img
                    alt="Paire d'exceptionnels pistolets Brescian 32-Bore Flintlock Long Holster en coffret"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="bMFSmA fkCZxr"
                    sizes="100vw"
                    src="https://images.pexels.com/photos/3526067/pexels-photo-3526067.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                  <a
                    className="fVwzjR"
                    href="/auction/29839/lot/320/paire-dexceptionnels-pistolets-brescian-32-bore-flintlock-long-holster-en-coffret/"
                  >
                    <p className="gclbLU ghuEFH">
                      <span>
                        {/* Paire d'exceptionnels pistolets Brescian 32-Bore
                        Flintlock Long Holster en coffret.{" "} */}
                        {auc.title}
                      </span>
                      <span translate="yes">
                        <span className="kzTvfN">
                          Estimate:{" "}
                          <span className="goyUA">
                            {" "}
                            €{auc.estimatedEndPrice}
                          </span>{" "}
                          -{" "}
                          <span className="goyUA">
                            €{auc.estimatedEndPrice}
                          </span>
                        </span>
                      </span>
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
          <div data-testid="container-2" className="kqQYUy">
            {auctions.map((auc, index) => {
              return (
                <div
                  data-testid={`element-${index}`}
                  className="kpwKAC sc10781cec1"
                >
                  <img
                    alt="Paire d'exceptionnels pistolets Brescian 32-Bore Flintlock Long Holster en coffret"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="bMFSmA fkCZxr"
                    sizes="100vw"
                    src="https://images.pexels.com/photos/3526067/pexels-photo-3526067.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                  <a
                    className="fVwzjR"
                    href="/auction/29839/lot/320/paire-dexceptionnels-pistolets-brescian-32-bore-flintlock-long-holster-en-coffret/"
                  >
                    <p className="gclbLU ghuEFH">
                      <span>
                        {/* Paire d'exceptionnels pistolets Brescian 32-Bore
                        Flintlock Long Holster en coffret.{" "} */}
                        {auc.title}
                      </span>
                      <span translate="yes">
                        <span className="kzTvfN">
                          Estimate:{" "}
                          <span className="goyUA">
                            €{auc.estimatedStartPrice}
                          </span>{" "}
                          -{" "}
                          <span className="goyUA">
                            €{auc.estimatedEndPrice}
                          </span>
                        </span>
                      </span>
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="iEzPaX">
          <button
            className="llRIyW"
            onClick={scrollLeft}
            style={{ visibility: showLeftButton ? "visible" : "hidden" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 42 42"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Previous page</title>
              <path d="M28.2322 9.33999C28.9893 8.57592 28.9893 7.33712 28.2322 6.57305C27.4752 5.80898 26.2479 5.80898 25.4908 6.57305L12.5678 19.6165C11.8107 20.3806 11.8107 21.6194 12.5678 22.3835L25.4908 35.427C26.2479 36.191 27.4752 36.191 28.2322 35.427C28.9893 34.6629 28.9893 33.4241 28.2322 32.66L16.6799 21L28.2322 9.33999Z"></path>
            </svg>
          </button>
          <ul className="hKlmgd">
            <li className="hheOIK">
              <button
                aria-pressed="true"
                aria-current="page"
                className={`${activeDot === 0 ? "bDJMGr" : "jQYAtk"}`}
                onClick={() => scrollToPage(0)}
              >
                <span className="yhnAg">Page 1</span>
              </button>
            </li>
            <li className="hheOIK">
              <button
                aria-pressed="false"
                className={`${activeDot === 1 ? "bDJMGr" : "jQYAtk"}`}
                onClick={() => scrollToPage(1)}
              >
                <span className="yhnAg">Page 2</span>
              </button>
            </li>
          </ul>
          <button
            className="llRIyW"
            onClick={scrollRight}
            style={{ visibility: showRightButton ? "visible" : "hidden" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 42 42"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Next page</title>
              <path d="M14.567 32.6607C13.811 33.4239 13.811 34.6635 14.567 35.4267C15.3242 36.1911 16.5518 36.1911 17.309 35.4267L30.2318 22.3827C30.9878 21.6195 30.9878 20.3811 30.2318 19.6167L17.3078 6.57268C17.1287 6.39127 16.9153 6.24723 16.68 6.14893C16.4448 6.05062 16.1924 6 15.9374 6C15.6824 6 15.43 6.05062 15.1948 6.14893C14.9595 6.24723 14.7461 6.39127 14.567 6.57268C13.811 7.33708 13.811 8.57668 14.567 9.33988L26.1194 21.0003L14.567 32.6607Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
