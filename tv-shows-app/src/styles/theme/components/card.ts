import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    width: "260px",
    height: ["428px", "375px"],
    margin: ["8px", "16px"],
    borderRadius: "modalRadius",
    overflow: "hidden",
    boxShadow: "10px 10px 10px rgba(0,0,0,0.3)",
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
    display: "flex",
    flexDirection: ["row", "column"],
    justifyContent: "space-between",
    padding: "15px",
    color: "lightPurple",
    textStyle: ["title.bold", "subtitle.bold"],
  },
});

export const Card = defineMultiStyleConfig({ baseStyle });
