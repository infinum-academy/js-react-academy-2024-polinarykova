import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "'Roboto', sans-serif",
  heading: "'Roboto', sans-serif",
  mono: "'Roboto Mono', monospace",
};

const theme = extendTheme({
  fonts,
});

export default theme;
