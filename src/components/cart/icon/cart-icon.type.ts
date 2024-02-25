import { Dispatch, SetStateAction } from "react";

export interface ICartIconProps {
  isInCart: boolean;
  recipeId: number;
  setIsInCart: Dispatch<SetStateAction<boolean>>;
}
