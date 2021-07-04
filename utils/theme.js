import { extendTheme } from "@chakra-ui/react";
// 2. Add your color mode config
const config = {
  initialColorMode: "white",
  useSystemColorMode: false,
};

const colors = {
  primary: {
    100: "#E883ED",
    200: "#F194C8",
    300: "#8E1494",
    400: "#98199F",
  },
  secondary: {
    100: "#FCA685",
    200: "#FAA198",
    300: "#AF1908",
  },
};


const CustomTheme = extendTheme({ colors, config });

export default CustomTheme;
