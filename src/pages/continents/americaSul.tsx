import { Flex, Heading, Stack, Box } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { CityCard } from "../../components/City";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

export default function AmericaSul() {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />
      <Banner
        backgroundImage="../images/cities/southAmerica/rio.jpg"
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
          <Heading
            size="lg"
            fontWeight="600"
            color="white.500"
            fontSize="48"
            textAlign="center"
          >
            América do Sul
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
          A América do Sul é um continente que compreende a porção meridional da
          América. Também é considerada um subcontinente do continente
          americano. A sua extensão é de 17 819 100 km², abrangendo 12% da
          superfície terrestre e 6% da população mundia
        </Flex>
        <Flex id="info" w={["100%", "50%"]}>
          <Info
            paisesNumber={13}
            languagesNumber={456}
            citiesNumber={1244575}
          />
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
            imageUrl="../images/cities/southAmerica/rioJaneiro.jpg"
            cityName="Rio de Janeiro"
            countryName="Brasil"
            flagUrl="../images/cities/southAmerica/brazilFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/southAmerica/buenosAires.jpg"
            cityName="Buenos Aires"
            countryName="Argentina"
            flagUrl="../images/cities/southAmerica/argentina.png"
          />
          <CityCard
            imageUrl="../images/cities/southAmerica/bogota.jpg"
            cityName="Bogotá"
            countryName="Colombia"
            flagUrl="../images/cities/southAmerica/colombiaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/southAmerica/lima.jpg"
            cityName="Lima"
            countryName="Peru"
            flagUrl="../images/cities/southAmerica/peruFlag.png"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
