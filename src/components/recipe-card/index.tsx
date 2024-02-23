import { IRecipeCardProps } from "./recipe-card.type";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import CartIcon from "../cart-icon";
import { getRecipesFromStorage } from "../../modules/cart/cart.service";
import { useState } from "react";

const RecipeCard = ({ recipe, recipeId }: IRecipeCardProps) => {
  const [isInCart, setIsInCart] = useState<boolean>(
    getRecipesFromStorage().recipeIds.includes(recipeId)
  );

  return (
    <>
      <Card shadow="sm" isPressable className="ldc-card">
        <CardBody className="overflow-visible">
          <Image
            src="/images/image-illustration.jpg"
            alt="Image illustration"
            className="w-full object-cover h-[200px]"
            width="150"
            height="150"
            priority={false}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>
            {recipe.name}{" "}
            <Link
              href={{ pathname: "recipes/edit", query: { id: recipeId } }}
            ></Link>
          </b>
          <CartIcon
            setIsInCart={setIsInCart}
            isInCart={isInCart}
            recipe={recipe}
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default RecipeCard;
