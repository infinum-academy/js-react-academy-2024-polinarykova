import { extendTheme } from "@chakra-ui/react";
import radii from "./foundations/radius";
import Button from "./components/button";
import { textStyles } from "./foundations/textStyles";

const colors = {
  lilac: "#8D5CE5",
  lightPurple: "#371687",
  purple: "#1B004C",
  error: "#FF2498",
  white: "#FFFFFF",
};

const fonts = {
  body: "'Roboto', sans-serif",
  heading: "'Roboto', sans-serif",
  mono: "'Roboto Mono', monospace",
};

const theme = extendTheme({
  components: {
    Button,
  },
  styles: {
    global: {
      body: {
        bg: "purple",
        color: "white",
      },
    },
  },
  fonts,
  colors,
  radii,
  textStyles,
});

export default theme;
