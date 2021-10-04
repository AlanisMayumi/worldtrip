import Link from "next/link";

import { Text, Flex, Center, Stack } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

interface CarouselItemProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export function CarouselItem({
  image,
  title,
  subtitle,
  link,
}: CarouselItemProps) {
  return (
    <Flex justifyContent="center" h="100%" w="100%" backgroundImage={image}>
      <Center>
        <Stack>
          <Link href={link} passHref>
            <a>
              <Text
                color="white.500"
                textAlign="center"
                fontSize="48px"
                fontWeight="700"
                pb="3"
              >
                {title}
              </Text>
              <Text color="gray.100" textAlign="center" fontSize="24px">
                {subtitle}
              </Text>
            </a>
          </Link>
        </Stack>
      </Center>
    </Flex>
  );
}
