import { IIngredient } from "../../modules/recipes/recipes.types";

export interface IngredientsListProps {
  handleIngredientsChanges(ingredients: IIngredient[]): void;
  recipeIngredients: IIngredient[];
}
