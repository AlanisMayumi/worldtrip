import { Flex, Heading, Stack, Box } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { CityCard } from "../../components/City";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

export default function Asia() {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />
      <Banner
        backgroundImage="../images/SouthKorea02.jpg"
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
            Ásia
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
          A Ásia é o maior dos continentes, tanto em área como em população.
          Abrange um terço das partes sólidas da superfície da Terra e é
          responsável por abrigar quase três quintos da população mundial.
        </Flex>
        <Flex id="info" w={["100%", "50%"]}>
          <Info paisesNumber={49} languagesNumber={2300} citiesNumber={100} />
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
            imageUrl="../images/cities/asia/tokio.jpg"
            cityName="Tokyo"
            countryName="Japão"
            flagUrl="../images/cities/asia/japanFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/asia/seoul.jpg"
            cityName="Seoul"
            countryName="Coreia do Sul"
            flagUrl="../images/cities/asia/southKoreaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/asia/xangai.jpg"
            cityName="Xangai"
            countryName="China"
            flagUrl="../images/cities/asia/chinaFlag.png"
          />
          <CityCard
            imageUrl="../images/cities/asia/bangkok.jpg"
            cityName="Bangkok"
            countryName="Tailândia"
            flagUrl="../images/cities/asia/thailandFlag.png"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
