import { Stack, Image, Text, Icon } from "@chakra-ui/react";

interface MenuItemProps {
  imagePath: string;
  title: string;
}
export function MenuItem({ imagePath, title }: MenuItemProps) {
  return (
    <Stack direction={["row", "column"]} justify="center">
      <Image src={imagePath} alt={title} />
      <Text fontWeight="600" align="center">{title}</Text>
    </Stack>
  );
}
