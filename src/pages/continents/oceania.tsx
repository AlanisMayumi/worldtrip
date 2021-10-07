import { Flex, Heading, Stack, Box } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { CityCard } from "../../components/City";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

export default function Oceania() {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />
      <Banner
        backgroundImage="../images/cities/oceania/newZeland.jpg"
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
          <Heading size="lg" fontWeight="600" color="white.500" fontSize="48">
            Oceania
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
          Oceania ou Oceânia é uma região geográfica composta por vários grupos
          de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo
          explorador francês Dumont d Urville.
        </Flex>
        <Flex id="info" w={["100%", "50%"]}>
          <Info paisesNumber={14} languagesNumber={60} citiesNumber={200} />
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
            imageUrl="../images/cities/oceania/sydney.jpg"
            cityName="Sydney"
            countryName="Austrália"
            flagUrl="../images/cities/oceania/australiaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/oceania/suva.jpg"
            cityName="Suva"
            countryName="Fiji"
            flagUrl="../images/cities/oceania/fijiFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/oceania/auckland.jpg"
            cityName="Roma"
            countryName="Itália"
            flagUrl="../images/cities/oceania/newZelandFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/oceania/taiti.jpg"
            cityName="Taiti"
            countryName="Polinésia Francesa"
            flagUrl="../images/cities/oceania/polinesiaFrancesaFlag.png"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
