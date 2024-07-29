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
      color: "white",

      _hover: {
        bg: "lightPurple",
        color: "purple",
      },
    },

    disabled: {
      bg: "white",
      color: "lilac",
      cursor: "auto",
    },

    outline: {
      bg: "white",
      color: "purple",
      border: "2px solid purple",
    },

    selected: {
      bg: "lilac",
      color: "white",
      border: "2px solid lilac",
    },

  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default Button;
