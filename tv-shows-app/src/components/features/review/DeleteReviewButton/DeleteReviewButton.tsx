import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  ButtonProps,
} from "@chakra-ui/react";

interface ITodoListDeleteButtonProps extends ButtonProps {
  handleDelete: () => void;
}

export function DeleteReviewButton({
  handleDelete,
  isDisabled,
}: ITodoListDeleteButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <DeleteIcon
        onClick={onOpen}
        boxSize="20px"
        alignSelf="center"
        cursor="pointer"
        data-testid="delete-icon"
      ></DeleteIcon>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="purple">
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Delete your review</Text>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" mr={3} onClick={onClose} isDisabled={isDisabled}>
              No
            </Button>
            <Button
              variant={isDisabled ? "disabled" : "secondary"}
              size="sm"
              onClick={handleDelete}
              isDisabled={isDisabled}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
