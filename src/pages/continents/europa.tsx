import { Flex, Heading, Stack, Box } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { CityCard } from "../../components/City";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

export default function Europa() {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />
      <Banner
        backgroundImage="../images/londonScape.svg"
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
            Europa
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
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Flex>
        <Flex id="info" w={["100%", "50%"]}>
          <Info paisesNumber={50} languagesNumber={60} citiesNumber={27} />
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
            imageUrl="../images/cities/london.png"
            cityName="Londres"
            countryName="Reino Unido"
            flagUrl="../images/cities/londresAvatar.png"
          />
          <CityCard
            imageUrl="../images/cities/paris.png"
            cityName="Paris"
            countryName="França"
            flagUrl="../images/cities/parisAvatar.png"
          />
          <CityCard
            imageUrl="../images/cities/roma.png"
            cityName="Roma"
            countryName="Itália"
            flagUrl="../images/cities/italiaAvatar.png"
          />
          <CityCard
            imageUrl="../images/cities/praga.png"
            cityName="Praga"
            countryName="República Tcheca"
            flagUrl="../images/cities/republicaTcheca.png"
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
            imageUrl="../images/cities/amsterda.png"
            cityName="Amsterdã"
            countryName="Holanda"
            flagUrl="../images/cities/holandaAvatar.png"
          />
        </Stack>
      </Box>
    </Flex>
  );
}
