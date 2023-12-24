import { Dispatch, SetStateAction } from "react";
import { Recipe } from "../../modules/recipes/recipes.types";

export interface ICartIconProps {
  isInCart: boolean;
  recipe: Recipe;
  setIsInCart: Dispatch<SetStateAction<boolean>>;
}
