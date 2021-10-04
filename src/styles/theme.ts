import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#47585B",
      "100": "#DADADA",
    },
    yellow: {
      "800": "#FFBA08",
    },
    white: {
      "500": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        color: "gray.900",
      },
    },
  },
});
