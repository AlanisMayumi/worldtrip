import {
  Stack,
  Image,
  Text,
  useBreakpointValue,
  Icon,
  Box,
} from "@chakra-ui/react";

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);
interface MenuItemProps {
  imagePath: string;
  title: string;
}
export function MenuItem({ imagePath, title }: MenuItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box w="100%">
      <Stack direction={["row", "column"]} justify="center">
        {isWideVersion ? (
          <Image src={imagePath} alt={title} w="85" h="85" />
        ) : (
          <CircleIcon boxSize={4} color="yellow.800" />
        )}
        <Text fontWeight="600" align="center">
          {title}
        </Text>
      </Stack>
    </Box>
  );
}
