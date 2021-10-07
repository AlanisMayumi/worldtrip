import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface InfoItemProps {
  itemNumber: number;
  itemDescription: string;
  icon?: ReactNode;
}

export function InfoItem({ itemNumber, itemDescription, icon }: InfoItemProps) {
  return (
    <Box fontWeight="600" textAlign={["initial", "center"]}>
      <Text color="yellow.800" fontSize={["24", "48"]}>
        {itemNumber}
      </Text>
      <Text color="gray.900" fontSize={["18", "24"]}>
        {itemDescription}
        <span style={{ paddingLeft: "5px" }}>{icon}</span>
      </Text>
    </Box>
  );
}
