import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    width: ["342px", "240px"],
    height: ["428px", "375px"],
    margin: "16px",
    borderRadius: "modalRadius",
    overflow: "hidden",
  },
  body: {
    height: "300px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    overflow: "hidden",
    padding: "0",
  },
  footer: {
    height: "75px",
    display: "flex",
    flexDirection: ["row", "column"],
    justifyContent: "space-between",
    padding: "15px",
  },
});

export const Card = defineMultiStyleConfig({ baseStyle });
