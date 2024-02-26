import {
  IIngredient,
  INGREDIENTS_TYPES,
} from "../../../modules/recipes/recipes.types";
import { IngredientsListProps } from "./ingredients-list.type";

const IngredientsList = ({
  handleIngredientsChanges,
  recipeIngredients,
}: IngredientsListProps) => {
  let ingredients = recipeIngredients ? recipeIngredients : [];
  let ingredientName = "";

  function handleOnAddIngredient(ingredient: IIngredient) {}
  return (
    <div className="flex flex-col gap-2 w-2/4 bg-zinc-100 p-2 rounded">
      <div className="flex gap-2 items-center w-full">
        <input
          name="ingredient"
          type="text"
          onChange={(event) => (ingredientName = event.currentTarget.value)}
        />
        <button
          onClick={() => {
            const updatedIngrdients = [
              ...ingredients,
              {
                name: ingredientName,
                type: INGREDIENTS_TYPES.VEGETABLES,
              } as IIngredient,
            ];
            ingredients = updatedIngrdients;
            handleIngredientsChanges(updatedIngrdients);
            (
              document.querySelector(
                "input[name='ingredient']"
              ) as HTMLInputElement
            ).value = "";
          }}
        >
          Ajouter l&apos;ingredient
        </button>
      </div>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex">
          <span>{ingredient.name}</span>
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;
