"use client";

import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import { Text, Img, Button, PageFooter, PageHeader, Popup } from "ui";
import Form from "./form";
import { SellBox } from "./sellBox";
import { HeroArea } from "./heroArea";
import styles from "./styles.module.css";
import { Header } from "./headerTwo";
import { Footer } from "./footer";

export default function SellPage() {
  //   const [sliderState, setSliderState] = React.useState(0);
  //   const sliderRef = React.useRef<AliceCarousel>(null);

  const divsData = [
    { id: 1, text: "First Div" },
    { id: 2, text: "Second Div" },
    { id: 3, text: "Third Div" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      {/* <PageHeader className="bg-white"></PageHeader> */}

      <Header></Header>
      <HeroArea></HeroArea>
      <SellBox></SellBox>
      <Form></Form>
      {/* 
      <PageFooter></PageFooter> */}
      <Footer></Footer>
    </div>
  );
}
