"use client";

import React, { useEffect, useState } from "react";
import { ShowCaseAreaCard } from "../ShowCaseAreaCard";
import { dummyData } from "./data";

export function ShowCaseArea() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardCount, setCardCount] = useState(25);

  const saveScrollPosition = () => {
    console.log("Saving scroll position before unload...");

    // window.location.hash = `scrollPosition=${window.scrollY}`;
    alert("saved the y");

    const scrollPosition = window.scrollY;

    const hash = `#scrollPosition=${scrollPosition}`;
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.search}${hash}`;
    history.replaceState(null, "", newUrl);

    console.log("Hash set:", window.location.hash);
    console.log("The scroll is saved   " + window.scrollY);
  };

  console.log("The scroll value is " + window.scrollY);
  // Function to restore the scroll position when the component mounts

  // const restoreScrollPosition = () => {
  //   console.log("restore is called");

  //   const savedPosition = localStorage.getItem("scrollPosition");

  //   console.log("savedPosition");
  //   console.log(savedPosition);

  //   window.scrollTo(0, scrollPosition);

  //   // if (savedPosition !== null) {
  //   //   console.log("now to scroll");
  //   //   console.log(typeof savedPosition);

  //   //   // window.scrollTo(0, parseInt(savedPosition));

  //   //   const scrollY = parseFloat(savedPosition);
  //   //   if (!isNaN(scrollY)) {
  //   //     window.scrollTo(0, scrollY);
  //   //   }
  //   // }
  //   // window.localStorage.clear();
  // };

  const restoreScrollPosition = () => {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const savedPosition = urlParams.get("scrollPosition");

    console.log("URL Params:", urlParams);

    console.log(urlParams);

    console.log("The savde position is " + typeof savedPosition);
    console.log(savedPosition);

    if (savedPosition !== null) {
      window.scrollTo(0, 6000);
    }
  };

  // For reloading purpose...
  useEffect(() => {
    restoreScrollPosition();

    // window.onload = ()

    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get("page");
    if (pageParam) {
      setCurrentPage(parseInt(pageParam));

      setCardCount(parseInt(pageParam) * 24);
    }

    window.addEventListener("scroll", () => {
      console.log("The y value is " + window.scrollY);
    });

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Handle for more data...
  const handleLoadMore = () => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("page", `${currentPage + 1}`);
    window.history.pushState(null, null, newUrl);

    setCardCount((prevCount) => prevCount + 24);

    setCurrentPage((prevPage) => prevPage + 1);
  };

  console.log("currentPage");
  console.log(currentPage);

  return (
    <section className="scf2a0224c0 hlBtlU sc66e1fa90 bFpoOa">
      <section className="scf2a0224c0 goAIOu">
        <div id="auctions-gallery">
          <div className="sc4f9f69400 gUHWyd">
            <div className="sc4f9f69401 jMrEHJ">
              <div className="sc6ab388140 hjqCrO">
                <div className="sc4f9f69402 bXbVfm">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="sc4f9f69403 fHeNtE"
                  >
                    <path d="M31 6C31.7 6 32.3 6.6 32.3 7.3V9.8C34.3 10.3 36 12.2 36 14.4V31.4C36 33.9 33.9 36 31.3 36H10.7C8.1 36 6 34 6 31.3V14.4C6 12.2 7.6 10.3 9.8 9.8V7.3C9.8 6.6 10.3 6 11 6C11.7 6 12.3 6.6 12.3 7.3V9.8H19.7V7.3C19.7 6.6 20.2 6.1 20.9 6H21C21.7 6 22.3 6.6 22.3 7.3V9.8H29.7V7.3C29.7 6.6 30.2 6.1 30.9 6H31V6ZM33.4 19.8H8.6V31.3C8.6 32.5 9.6 33.5 10.7 33.5H31.3C32.5 33.5 33.4 32.5 33.4 31.3V19.7V19.8ZM28.5 26C28.8 26 29.1 26.2 29.1 26.4V28H30.5C30.7 28 30.9 28.2 31 28.5V28.6C31 28.9 30.8 29.2 30.6 29.2H29V30.6C29 30.8 28.8 31 28.5 31.1H28.4C28.1 31.1 27.8 30.9 27.8 30.7V29H26.4C26.2 29 26 28.8 25.9 28.5V28.4C25.9 28.1 26.1 27.8 26.3 27.8H28V26.4C28 26.2 28.2 26 28.5 25.9H28.6L28.5 26ZM31.3 12.3H10.7C9.5 12.3 8.6 13.3 8.6 14.4V17.2H33.4V14.4C33.4 13.2 32.4 12.3 31.3 12.3V12.3Z"></path>
                  </svg>
                  <h2 className="sca80bc31a0 CUOEB">April 2024</h2>
                </div>
                <a
                  className="sc6ab388141 gobvbb"
                  href="/auctions/upcoming/?page=2#auctions-gallery"
                >
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 42 42"
                    width="35"
                    height="35"
                  >
                    <title>Jump to auction filters</title>
                    <path d="M32.6608 29.262C33.424 30.0193 34.6636 30.0193 35.4268 29.262C35.6083 29.0825 35.7526 28.8686 35.851 28.6328C35.9494 28.3971 36 28.144 36 27.8884C36 27.6329 35.9494 27.3798 35.851 27.144C35.7526 26.9083 35.6083 26.6944 35.4268 26.5149L22.3827 13.5684C22.0142 13.2041 21.5174 13 20.9997 13C20.482 13 19.9852 13.2041 19.6167 13.5684L6.57268 26.5161C6.39127 26.6956 6.24724 26.9094 6.14892 27.145C6.05062 27.3808 6 27.6336 6 27.889C6 28.1445 6.05062 28.3973 6.14892 28.6331C6.24724 28.8687 6.39127 29.0825 6.57268 29.262C7.33708 30.0193 8.57668 30.0193 9.33989 29.262L21.0003 17.6884L32.6608 29.262Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {dummyData.map((data, index) => {
              const id = `page-gallery${Math.floor(index / 25) + 1}`;

              if (data.id < cardCount) {
                return <ShowCaseAreaCard key={data.id} id={id} />;
              }
              return null;
            })}
          </div>
          <div className="sc-6ab38814-0 hjqCrO">
            <a
              // href="?page=2#page-gallery1"
              // href={`#page-gallery${currentPage}`}
              // href={`?page=${currentPage}#page-gallery1`}
              className="sc-a80bc31a-2 sc-6ab38814-2 cXkXzI eCictk"
              onClick={(event) => {
                // event.preventDefault();
                handleLoadMore();
              }}
              style={{ cursor: "pointer" }}
            >
              Load 25 more
            </a>
            <a
              className="sc-6ab38814-1 gobvbb"
              // href="/auctions/upcoming/#auctions-gallery"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                width="35"
                height="35"
              >
                <title>Jump to auction filters</title>
                <path d="M32.6608 29.262C33.424 30.0193 34.6636 30.0193 35.4268 29.262C35.6083 29.0825 35.7526 28.8686 35.851 28.6328C35.9494 28.3971 36 28.144 36 27.8884C36 27.6329 35.9494 27.3798 35.851 27.144C35.7526 26.9083 35.6083 26.6944 35.4268 26.5149L22.3827 13.5684C22.0142 13.2041 21.5174 13 20.9997 13C20.482 13 19.9852 13.2041 19.6167 13.5684L6.57268 26.5161C6.39127 26.6956 6.24724 26.9094 6.14892 27.145C6.05062 27.3808 6 27.6336 6 27.889C6 28.1445 6.05062 28.3973 6.14892 28.6331C6.24724 28.8687 6.39127 29.0825 6.57268 29.262C7.33708 30.0193 8.57668 30.0193 9.33989 29.262L21.0003 17.6884L32.6608 29.262Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
