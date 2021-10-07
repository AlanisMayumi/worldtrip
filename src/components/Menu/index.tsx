import { Stack, Box, useBreakpointValue } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  if (isWideVersion)
    return (
      <Stack direction="row" spacing="170">
        <MenuItem imagePath="../icons/cocktail.svg" title="vida noturna" />
        <MenuItem imagePath="../icons/surf.svg" title="praia" />
        <MenuItem imagePath="../icons/building.svg" title="moderno" />
        <MenuItem imagePath="../icons/museum.svg" title="clássico" />
        <MenuItem imagePath="../icons/earth.svg" title="e mais..." />
      </Stack>
    );
  else
    return (
      <Box>
        <MenuItem imagePath="../icons/cocktail.svg" title="vida noturna" />
        <MenuItem imagePath="../icons/surf.svg" title="praia" />
        <MenuItem imagePath="../icons/building.svg" title="moderno" />
        <MenuItem imagePath="../icons/museum.svg" title="clássico" />
        <MenuItem imagePath="../icons/earth.svg" title="e mais..." />
      </Box>
    );
}
