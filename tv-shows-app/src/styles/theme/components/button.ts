import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
  },
  sizes: {
    sm: {
      px: 8,
      py: 4,
      h: "auto",
      w: "50px",
    },
    md: {
      px: 8,
      py: 4,
      h: "auto",
      w: "144px",
    },
  },

  variants: {
    primary: {
      bg: "white",
      color: "purple",

      _hover: {
        bg: "lilac",
        color: "white",
      },
    },

    secondary: {
      bg: "lilac",
      color: "lightPurple",

      _hover: {
        bg: "lightPurple",
        color: "purple",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default Button;
