import { StarIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

interface IStarRatingProps {
  label: string;
  onChange: (clicked: boolean, index: number) => void;
  value: {
    selected: number;
    hovered: number;
  };
}

export default function RatingStars({
  label,
  onChange,
  value,
}: IStarRatingProps) {
  return (
    <Flex flexDirection="row" gap={2}>
      <Text color="white" fontSize={20} marginRight={2}>
        {label}
      </Text>
      {[...Array(5)].map((_, index) => {
        return (
          <StarIcon
            boxSize={30}
            cursor="pointer"
            color={
              value.selected > index || value.hovered > index ? "gold" : "white"
            }
            onClick={() => onChange(true, index + 1)}
            onMouseOver={() => onChange(false, index + 1)}
            onMouseOut={() => onChange(false, 0)}
            key={index}
          ></StarIcon>
        );
      })}
    </Flex>
  );
}
