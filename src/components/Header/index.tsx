import Link from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex align="center">
      {!isWideVersion && (
        <Link href="/" passHref>
          <ChevronLeftIcon aria-label="Open navigation" fontSize="36" pr="4" />
        </Link>
      )}
      <Flex
        as="header"
        w={["80%", "100%"]}
        maxWidth={1480}
        h={["70", "100"]}
        align="center"
        justify="center"
      >
        <Image
          src="/images/logo.svg"
          alt="world trip"
          boxSize={["100px", "170px"]}
        />
      </Flex>
    </Flex>
  );
}
