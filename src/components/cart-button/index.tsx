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
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getRecipesFromStorage } from "../../modules/cart/cart.service";
import { Recipe } from "../../modules/recipes/recipes.types";
import { getAllRecipes } from "../../modules/recipes/recipes.service";
import Link from "next/link";

const CartButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    async function fetchData() {
      const res = await getAllRecipes();
      if (res) {
        setRecipes([...res]);
      }
    }
    fetchData();
  }, []);

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
                {recipes
                  .filter((recipe) =>
                    getRecipesFromStorage().recipeIds.includes(recipe.id)
                  )
                  .map((recipe, id) => (
                    <Card key={recipe.name + id}>
                      <CardBody className="flex">
                        <p>{recipe.name}</p>
                      </CardBody>
                    </Card>
                  ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fermer
                </Button>
                <Link href={"recipes/list"} onClick={onClose}>
                  Générer la liste de courses
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartButton;
