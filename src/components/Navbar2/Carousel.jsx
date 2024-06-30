import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselContainerB } from "./Navbar2.styled";
const CarouselComponent = () => (
  <CarouselContainerB>
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
    >
      <div>
        <img
          src="https://comenzi.farmaciatei.ro/images/slider/1/optimized/Bannere-Cantabria-mai-iunie_Tei.webp"
          alt="slide 1"
        />
      </div>
      <div>
        <img
          src="https://comenzi.farmaciatei.ro/images/slider/1/optimized/29042024_TEI_MORO_1200X500_SLIDER2.webp"
          alt="slide 2"
        />
      </div>
      <div>
        <img
          src="https://comenzi.farmaciatei.ro/images/slider/1/optimized/Advil-1200x500.webp"
          alt="slide 3"
        />
      </div>
      <div>
        <img
          src="https://comenzi.farmaciatei.ro/images/slider/1/optimized/Dulcolax_Drajeuri_Supozitoare_1200x500_FarmaciaTei%20%282%29.webp"
          alt="slide 4"
        />
      </div>
      <div>
        <img
          src="https://comenzi.farmaciatei.ro/images/slider/1/optimized/banner_slider_1200x500px_Perrigo_Compeed_apr24.webp"
          alt="slide 5"
        />
      </div>
      <div>
        <img
          src="https://comenzi.farmaciatei.ro/images/slider/1/optimized/Bannere%20Tei_Sennalax_1200x500%20px.webp"
          alt="slide 6"
        />
      </div>
      <div>
        <img
          src="https://comenzi.farmaciatei.ro/images/slider/1/optimized/Banner%20farmacia%20tei%201200x500px.webp"
          alt="slide 6"
        />
      </div>
    </Carousel>
  </CarouselContainerB>
);

export default CarouselComponent;
