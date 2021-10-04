import {
  Text,
  Flex,
  Stack,
  Image,
  Heading,
  Divider,
  Center,
} from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Image, Box, Title } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Menu } from "../components/Menu";

SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  return (
    <div>
      <Head>
        <Header />
      </Head>
      <Banner backgroundImage="../images/background.svg" height="320">
        <Stack spacing="1" direction="row" paddingLeft="140">
          <Flex w="50%">
            <Stack spacing="2" align="flex-start" my="100" maxWidth="400">
              <Heading size="lg" fontWeight="normal" color="white.500">
                5 Continentes, <br />
                infinitas possibilidades.
              </Heading>
              <Text color="gray.100">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>
          </Flex>
          <Flex w="50%" align="flex-end">
            <Image src="../images/airplane.svg" alt="airplane" my="70" />
          </Flex>
        </Stack>
      </Banner>
      <Flex mt="10" mb="10" pl="20" pr="20">
        <Menu />
      </Flex>
      <Center>
        <Stack>
          <Center mb="10">
            <Divider
              w="90px"
              borderColor="gray.900"
              border="2px"
              align="center"
            />
          </Center>
          <Text align="center" fontWeight="500" fontSize="36">
            Vamos nessa?
          </Text>
          <Text align="center" fontWeight="500" fontSize="36">
            Então escolha seu continente
          </Text>
        </Stack>
      </Center>

      <Flex mt="10" mb="10" pl="20" pr="20">
        <Carousel />
      </Flex>
    </div>
  );
}
