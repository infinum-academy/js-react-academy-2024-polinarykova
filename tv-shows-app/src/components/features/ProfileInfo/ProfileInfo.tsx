import useUserSWR from "@/hooks/useUserSWR";
import { Flex, Text, Image, Button } from "@chakra-ui/react";

export default function ProfileInfo() {
  const { data } = useUserSWR();
  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={5}
      wordBreak="break-word"
      textAlign="center"
    >
      <Text textStyle="title.bold">EMAIL</Text>
      <Text textStyle="subtitle.regular">{data?.user.email}</Text>
      <Image
        src={data?.user.image_url || "/assets/avatar_default.png"}
        marginTop={20}
        borderRadius="100%"
        boxShadow="10px 10px 10px rgba(0,0,0,0.3)"
      />
    </Flex>
  );
}
