import { Flex, Text } from "@chakra-ui/react";
import { PiTelevisionSimple } from "react-icons/pi";

export default function Logo({ size }: { size: "small" | "large" }) {
  return (
    <Flex flexDirection="row">
      <PiTelevisionSimple size={size == "small" ? 30 : 50} />
      <Text
        paddingLeft={3}
        letterSpacing="wide"
        textStyle={size == "small" ? "title.bold" : "headline"}
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
        margin="auto"
      >
        TV SHOWS APP
      </Text>
    </Flex>
  );
}
