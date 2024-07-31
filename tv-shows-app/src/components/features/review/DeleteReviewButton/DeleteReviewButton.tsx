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
} from "@chakra-ui/react";
import { useState } from "react";

interface ITodoListDeleteButtonProps {
  handleDelete: () => void;
}

export function DeleteReviewButton({
  handleDelete,
}: ITodoListDeleteButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disabled, setDisabled] = useState(false);

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
            <Button
              size="sm"
              mr={3}
              onClick={() => {
                disabled ? undefined : onClose;
              }}
            >
              No
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setDisabled(true);
                handleDelete();
              }}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
