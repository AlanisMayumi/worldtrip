import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface BannerProps {
  backgroundImage: string;
  children: ReactNode;
  height: string[] | string;
}
export function Banner({ backgroundImage, children, height }: BannerProps) {
  return (
    <Box backgroundImage={backgroundImage} height={height} w={"100%"}>
      {children}
    </Box>
  );
}
