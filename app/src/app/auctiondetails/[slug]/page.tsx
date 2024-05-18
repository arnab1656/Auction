"use client";
import { Header } from "@/app/sell/headerTwo";
import styles from "../styles.module.css";
import ImageSection from "../imageSection";
import HeroDetails from "../heroDetails";
import { SliderSection } from "ui";
import FilterCompSearch from "@/app/auctionpage/filterCompSearch";
import HeroArea from "../heroArea";
import { Footer } from "@/app/sell/footer";
import { TagFilterComponent } from "ui";

import { auctions } from "../dummy";

export default function DetailPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Header></Header>

      <main className={`${styles.kXYRrE}  ${styles.scc3e8e4d0}`}>
        <ImageSection></ImageSection>
        <HeroDetails></HeroDetails>
        <SliderSection auctions={auctions}></SliderSection>

        <section className="scf2a0224c0 eXhpEe">
          <TagFilterComponent></TagFilterComponent>
          <HeroArea />
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
