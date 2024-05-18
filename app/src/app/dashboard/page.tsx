"use client";

import React from "react";
import { Helmet } from "react-helmet";
import {
  Heading,
  Text,
  Button,
  Img,
  PageCard,
  BidCard,
  PageHeader,
  PageFooter,
} from "ui";

import { Sidebar1 } from "ui";
import { trpc } from "../_trpc/client";
import HeroFooter from "../landingpage/heroFooter";
import HeroCategory from "../landingpage/heroCategory";
import { Header } from "../sell/headerTwo";
import HeroSection from "./heroSection";

export default function DashBoard() {
  // const result = trpc.getAuction.useQuery();
  return (
    <div>
      <Header></Header>
      <main className="sc-c3e8e4d-0 kXYRrE">
        <HeroSection></HeroSection>
      </main>

      <HeroFooter></HeroFooter>
    </div>
  );
}
