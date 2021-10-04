import { Stack } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <Stack direction="row" spacing="170px">
      <MenuItem imagePath="../icons/cocktail.svg" title="vida noturna" />
      <MenuItem imagePath="../icons/surf.svg" title="praia" />
      <MenuItem imagePath="../icons/building.svg" title="moderno" />
      <MenuItem imagePath="../icons/museum.svg" title="clássico" />
      <MenuItem imagePath="../icons/earth.svg" title="e mais..." />
    </Stack>
  );
}
