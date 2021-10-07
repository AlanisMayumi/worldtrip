import { Flex, Heading, Box, Stack } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";
import { CityCard } from "../../components/City";
import { Info } from "../../components/Info";

export default function Africa() {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />
      <Banner
        backgroundImage="../images/cities/africa/africa.jpg"
        height={["300", "500"]}
      >
        <Flex
          w="100%"
          height={["300", "500"]}
          alignItems={["center", "flex-end"]}
          pb={["0", "20"]}
          pl={["0", "20"]}
          justify={["center", "start"]}
        >
          <Heading size="lg" fontWeight="normal" color="white.500">
            África
          </Heading>
        </Flex>
      </Banner>

      <Stack
        spacing={["5", "20"]}
        direction={["column", "row"]}
        w="100%"
        pl={["5", "10"]}
        pr={["5", "10"]}
        pt={["5", "10"]}
        pb={["5", "10"]}
      >
        <Flex
          id="bio"
          fontSize={["14", "24"]}
          fontWeight="400"
          textAlign="justify"
          w={["100%", "50%"]}
        >
          A África é o terceiro continente mais extenso com cerca de 30 milhões
          de quilômetros quadrados, cobrindo 20,3% da área total da terra firme
          do planeta. É o segundo continente mais populoso da Terra com cerca de
          um bilhão de pessoas, representando cerca de um sétimo da população
          mundial.
        </Flex>
        <Flex id="info" w={["100%", "50%"]}>
          <Info paisesNumber={54} languagesNumber={250} citiesNumber={500} />
        </Flex>
      </Stack>

      <Box
        pt="20"
        w="100%"
        pl={["5", "10"]}
        pr={["5", "10"]}
        justifyContent="center"
      >
        <Heading
          size="lg"
          fontWeight="600"
          color="gray.900"
          fontSize={["24", "48"]}
        >
          Cidades +100
        </Heading>
        <Stack
          justify={["center", "space-between"]}
          spacing="5"
          pt="10"
          pb="10"
          align="center"
          direction={["column", "row"]}
          w="100%"
        >
          <CityCard
            imageUrl="../images/cities/africa/zanzibar.jpg"
            cityName="Zanzibar"
            countryName="Tanzânia"
            flagUrl="../images/cities/africa/tanzaniaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/africa/cairo.jpg"
            cityName="Cairo"
            countryName="Egito"
            flagUrl="../images/cities/africa/egitoFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/africa/casablanca.jpg"
            cityName="Casablanca"
            countryName="Marrocos"
            flagUrl="../images/cities/africa/marrocosFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/africa/barazuto.jpg"
            cityName="Barazuto"
            countryName="Moçambique"
            flagUrl="../images/cities/africa/mozambiqueFlag.png"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
