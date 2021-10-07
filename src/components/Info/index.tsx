import { Stack, Box, Text, Tooltip, Icon } from "@chakra-ui/react";
import { InfoItem } from "./InfoItem";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface InfoProps {
  paisesNumber: number;
  languagesNumber: number;
  citiesNumber: number;
}

export function Info({
  paisesNumber,
  languagesNumber,
  citiesNumber,
}: InfoProps) {
  return (
    <Stack direction="row" spacing={["5", "16"]} justify="center" w="100%">
      <InfoItem itemNumber={paisesNumber} itemDescription="países" />
      <InfoItem itemNumber={languagesNumber} itemDescription="línguas" />
      <InfoItem
        itemNumber={citiesNumber}
        itemDescription="cidades +100"
        icon={
          <Tooltip label="Mais cidades" fontSize="sm">
            <InfoOutlineIcon w={4} h={4} color="gray.100" />
          </Tooltip>
        }
      />
    </Stack>
  );
}
