import {
  Avatar,
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../lib/store";
import { BsCart4 } from "react-icons/bs";

const CartButton = () => {
  const recipesInCart = useAppSelector((state) => state.cart.recipes);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>
        <BsCart4 size={23} />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Recettes sélectionnées
              </ModalHeader>
              <ModalBody>
                {recipesInCart.map((recipe, id) => (
                  <Card key={recipe.name + id}>
                    <CardBody className="flex">
                      <p>{recipe.name}</p>
                    </CardBody>
                  </Card>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartButton;
