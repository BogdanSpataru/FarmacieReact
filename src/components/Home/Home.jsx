import { HomeContainerB, Titleh3 } from "./Home.style";
import React, { useContext } from "react";
import CarouselComponent from "../Navbar2/Carousel";
import TrendBand from "./TrendBand";
import NoutatiBand from "./NoutatiBand";
import PromoBand from "./PromoBand";

function Home() {
  return (
    <HomeContainerB>
      <CarouselComponent />
      <Titleh3>In trend</Titleh3>
      <TrendBand />
      <Titleh3>Noutati</Titleh3>
      <NoutatiBand />
      <Titleh3>Promotii</Titleh3>
      <PromoBand />
    </HomeContainerB>
  );
}

export default Home;
