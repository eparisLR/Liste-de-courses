import {
  IIngredient,
  INGREDIENTS_TYPES,
} from "../../../modules/recipes/recipes.types";
import { useState } from "react";
import { IngredientsListProps } from "./ingredients-list.type";
import { AiTwotoneCheckSquare } from "react-icons/ai";

const IngredientsList = ({
  handleIngredientsChanges,
  recipeIngredients,
}: IngredientsListProps) => {
  const [ingredients, setIngredients] = useState(
    recipeIngredients ? recipeIngredients : []
  );
  const [ingredientName, setIngredientName] = useState("");

  function handleOnAddIngredient(ingredient: IIngredient) {}
  return (
    <div className="flex flex-col gap-2 w-2/4 bg-zinc-100 p-2 rounded">
      <div className="flex gap-2 items-center w-full">
        <input
          name="ingredient"
          type="text"
          onChange={(event) => setIngredientName(event.currentTarget.value)}
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
            setIngredients(updatedIngrdients);
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
