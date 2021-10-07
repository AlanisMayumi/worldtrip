import {
  Text,
  Flex,
  Stack,
  Image,
  Heading,
  Divider,
  Center,
  useBreakpointValue,
  Box,
  Container,
} from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { MenuItem } from "../components/Menu/MenuItem";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Banner
        backgroundImage="../images/background.svg"
        height={["200", "320"]}
      >
        <Stack spacing="20" direction="row" paddingLeft={["10", "140"]}>
          <Flex w="100%">
            <Stack
              spacing={["2", "6"]}
              align="flex-start"
              my={["10", "100"]}
              maxWidth="500"
            >
              <Heading
                size="lg"
                fontWeight="normal"
                color="white.500"
                fontSize={["20px", "36px"]}
                lineHeight={["30px", "54px"]}
              >
                5 Continentes, <br />
                infinitas possibilidades.
              </Heading>
              <Text
                color="gray.100"
                fontSize={["14px", "20px"]}
                fontWeight="normal"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>
          </Flex>
          {isWideVersion && (
            <Flex w="100%" align="flex-end">
              <Image src="../images/airplane.svg" alt="airplane" my="70" />
            </Flex>
          )}
        </Stack>
      </Banner>

      <Box
        mt={["10", "20"]}
        mb={["10", "20"]}
        display="flex"
        justifyContent="center"
        w="100%"
        id="menu-out"
      >
        <Menu />
      </Box>

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
      <Flex mt="10" mb="10" pl={["0", "20"]} pr={["0", "20"]} pb="20">
        <Carousel />
      </Flex>
    </Flex>
  );
}

{
  /* <Container maxWidth={1480} w="100%" padding={0}>
<Header />


</Container> */
}
