import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Avatar,
  Spacer,
  Center,
} from "@chakra-ui/react";

interface CityCardProps {
  imageUrl: string;
  cityName: string;
  countryName: string;
  flagUrl: string;
}
export function CityCard({
  imageUrl,
  cityName,
  countryName,
  flagUrl,
}: CityCardProps) {
  return (
    <Box borderWidth="1px" borderRadius="lg" w="256px">
      <Image src={imageUrl} alt={cityName} w="256" h="173" />
      <Box p="6">
        <Stack direction="row">
          <Box>
            <Heading fontSize="20px" color="gray.900" mb="4">
              {cityName}
            </Heading>
            <Text color="gray.500" fontSize="16px">
              {countryName}
            </Text>
          </Box>
          <Spacer />
          <Center>
            <Avatar size="sm" src={flagUrl} name={countryName} />
          </Center>
        </Stack>
      </Box>
    </Box>
  );
}
