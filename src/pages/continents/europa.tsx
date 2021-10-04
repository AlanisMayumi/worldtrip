import Head from "next/head";
import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Header } from "../../components/Header";

export default function Europa() {
  return (
    <>
      <Head>
        <Header />
      </Head>
      <Banner backgroundImage="../images/background.svg" height="320">
        <Flex h="100%">
          <Heading size="lg" fontWeight="normal" color="white.500">
            Europa
          </Heading>
        </Flex>
      </Banner>
      <Flex id="bio"></Flex>
      <Flex id="info"></Flex>
    </>
  );
}
