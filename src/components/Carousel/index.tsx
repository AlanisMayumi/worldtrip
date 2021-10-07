import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpointValue } from "@chakra-ui/react";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { theme } from "../../styles/theme";
import { CarouselItem } from "./CarouselItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Swiper
      navigation
      pagination
      style={{
        "--swiper-navigation-color": theme.colors.yellow[800],
        "--swiper-pagination-color": theme.colors.yellow[800],
      }}
    >
      <SwiperSlide
        style={{
          backgroundImage: "url(../images/europeSlide.svg)",
          minHeight: isWideVersion ? "400px" : "250px",
        }}
      >
        <CarouselItem
          link="/continents/europa"
          title="Europa"
          subtitle="O continente mais antigo"
          image="../images/europeSlide.svg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          link="/continents/americaNorte"
          title="América do Norte"
          subtitle="O continente mais moderno"
          image="../images/usa_02.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          link="/continents/americaSul"
          title="América do Sul"
          subtitle="O continente do calor"
          image="../images/americaSul.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          link="/continents/asia"
          title="Ásia"
          subtitle="O continente da sabedoria"
          image="../images/asia.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          link="/continents/africa"
          title="África"
          subtitle="O continente da natureza"
          image="../images/africa.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          link="/continents/oceania"
          title="Oceania"
          subtitle="O continente pacífico"
          image="../images/oceania.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
