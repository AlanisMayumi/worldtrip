import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { theme } from "../../styles/theme";
import { Text, Flex, Center, Stack } from "@chakra-ui/react";
import { CarouselItem } from "./CarouselItem";

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
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
          minHeight: "400px",
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
          subtitle="O continente mais antigo"
          image="../images/europeSlide.svg"
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
          image="../images/asia02.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          link="/continents/africa"
          title="África"
          subtitle="O continente da natureza"
          image="../images/europeSlide.svg"
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
