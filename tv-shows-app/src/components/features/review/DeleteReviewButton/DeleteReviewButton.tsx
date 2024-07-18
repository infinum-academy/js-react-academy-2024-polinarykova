import { swrKeys } from "@/app/fetchers/swrKeys";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  IconButton,
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

interface ITodoListDeleteButtonProps {
  handleDelete: () => void;
}

export function DeleteReviewButton({
  handleDelete,
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
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Delete your review</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              No
            </Button>
            <Button
              _hover={{ bg: "purple.400", color: "white" }}
              onClick={handleDelete}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}