import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import ShowPickerButtons from "./components/ShowPickerButtons";
import ShowPickerProgress from "./components/ShowPickerProgress";
import ShowPickerStepper from "./components/ShowPickerStepper";

export default function ShowPicker() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      height="fit-content"
      marginBottom={20}
      width="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <Flex
        width="fit-content"
        height="fit-content"
        padding={10}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="lightPurple"
        borderRadius="modalRadius"
      >
        <Text textStyle="title.bold" marginBottom={10}>
          Don't know what to watch tonight?
        </Text>
        <Button onClick={onOpen} height="50px" width="200px">
          Help me pick a show!
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent gap={10}>
          <ModalBody>
            <Flex marginTop={10} width="100%" gap={30} color="purple">
              <ModalCloseButton cursor="pointer" />
              <ShowPickerStepper />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex
              direction="column"
              width="100%"
              gap={5}
              color="purple"
              marginX={{ base: "0px", md: "40px" }}
              marginBottom={5}
            >
              <ShowPickerProgress />
              <ShowPickerButtons />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
