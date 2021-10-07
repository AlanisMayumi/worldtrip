import { Flex, Heading, Stack, Box } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { CityCard } from "../../components/City";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

export default function AmericaNorte() {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />
      <Banner
        backgroundImage="../images/cities/northAmerica/ny.jpg"
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
            América do Norte
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
          A América do Norte é um subcontinente que compreende a porção
          setentrional do continente americano.
        </Flex>
        <Flex id="info" w={["100%", "50%"]}>
          <Info paisesNumber={3} languagesNumber={6} citiesNumber={100} />
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
            imageUrl="../images/cities/northAmerica/newYork.jpg"
            cityName="New York"
            countryName="Estados Unidos"
            flagUrl="../images/cities/northAmerica/usaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/northAmerica/seattle.jpg"
            cityName="Seattle"
            countryName="Estados Unidos"
            flagUrl="../images/cities/northAmerica/usaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/northAmerica/losAngeles.jpg"
            cityName="Los Angeles"
            countryName="Estados Unidos"
            flagUrl="../images/cities/northAmerica/usaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/northAmerica/toronto.jpg"
            cityName="Toronto"
            countryName="Canadá"
            flagUrl="../images/cities/northAmerica/canadaFlag.png"
          />
        </Stack>
        <Stack
          justify={["center", "space-between"]}
          spacing="5"
          pb="10"
          align="center"
          direction={["column", "row"]}
          w="100%"
        >
          <CityCard
            imageUrl="../images/cities/northAmerica/cidadeMexico.jpg"
            cityName="Cidade do México"
            countryName="México"
            flagUrl="../images/cities/northAmerica/mexicoFlag.png"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
