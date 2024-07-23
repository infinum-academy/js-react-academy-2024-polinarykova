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
} from "@chakra-ui/react";
import ShowPickerButtons from "./components/ShowPickerButtons";
import ShowPickerProgress from "./components/ShowPickerProgress";
import ShowPickerStepper from "./components/ShowPickerStepper";

export default function ShowPicker() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Button onClick={onOpen} height="50px">
        Pick a show!
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent gap={10}>
          <ModalBody>
            <Flex marginTop={10} width="100%" gap={30} color="purple">
              <ModalCloseButton onClick={onClose} cursor="pointer" />
              <ShowPickerStepper />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%" gap={10}>
              <ShowPickerProgress />
              <ShowPickerButtons />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
