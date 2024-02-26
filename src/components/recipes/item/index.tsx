import { IRecipeCardProps } from "./recipe-card.type";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "../../cart/icon";

const RecipeCard = ({ recipe, recipeId }: IRecipeCardProps) => {
  let isInCart = true;

  return (
    <>
      <div>
        <div className="overflow-visible">
          <Image
            src="/images/image-illustration.jpg"
            alt="Image illustration"
            className="w-full object-cover h-[200px]"
            width="150"
            height="150"
            priority={false}
          />
        </div>
        <div className="text-small justify-between">
          <b>
            {recipe.name}{" "}
            <Link
              href={{ pathname: "recipes/edit", query: { id: recipeId } }}
            ></Link>
          </b>
          <CartIcon
            setIsInCart={() => {
              console.log("ADD IN CART");
            }}
            isInCart={isInCart}
            recipeId={recipe.id}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
