import { IIngredient } from "../../../modules/recipes/recipes.types";
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
        <button>Ajouter l&apos;ingredient</button>
      </div>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <div key={index} className="flex">
            <span>{ingredient.name}</span>
          </div>
        ))}
    </div>
  );
};

export default IngredientsList;
