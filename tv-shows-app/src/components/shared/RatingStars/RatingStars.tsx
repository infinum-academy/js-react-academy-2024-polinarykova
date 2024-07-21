import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

interface IStarRatingProps {
  label: string;
  onChange?: (clicked: boolean, index: number) => void;
  value: {
    selected: number;
    hovered: number;
  };
  size: string;
}

export default function RatingStars({
  label,
  onChange,
  value,
  size,
}: IStarRatingProps) {
  return (
    <Flex flexDirection="row" gap={2} alignItems="center">
      <Text fontSize={20} marginRight={2}>
        {label}
      </Text>
      {[...Array(5)].map((_, index) => {
        return (
          <StarIcon
            boxSize={size}
            cursor={onChange ? "pointer" : "auto"}
            color={
              value.selected > index || value.hovered > index ? "gold" : "white"
            }
            onClick={() => onChange && onChange(true, index + 1)}
            onMouseOver={() => onChange && onChange(false, index + 1)}
            onMouseOut={() => onChange && onChange(false, 0)}
            key={index}
          ></StarIcon>
        );
      })}
    </Flex>
  );
}
