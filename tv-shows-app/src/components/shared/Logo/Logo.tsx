import { Flex, Text } from "@chakra-ui/react";
import { PiTelevisionSimple } from "react-icons/pi";

export default function Logo({ size }: { size: string }) {
  return (
    <Flex flexDirection="row">
      <PiTelevisionSimple size={size == "small" ? 30 : 50} />
      <Text
        marginLeft={2}
        letterSpacing="wide"
        fontSize={size == "small" ? "xl" : "4xl"}
        fontWeight="bold"
        color="purple.100"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
      >
        TV SHOWS APP
      </Text>
    </Flex>
  );
}
