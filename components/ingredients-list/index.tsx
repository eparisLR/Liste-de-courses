import {
  IIngredient,
  INGREDIENTS_TYPES,
} from "@/modules/recipes/recipes.types";
import { Button, Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { IngredientsListProps } from "./ingredients-list.type";
import { AiTwotoneCheckSquare } from "react-icons/ai";

const IngredientsList = ({
  handleIngredientsChanges,
}: IngredientsListProps) => {
  const [ingredients, setIngredients] = useState([] as IIngredient[]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientType, setIngredientType] = useState("");

  function handleOnAddIngredient(ingredient: IIngredient) {}
  return (
    <div className="flex flex-col gap-2 w-2/4 bg-zinc-100 p-2 rounded">
      <div className="flex gap-2 items-center w-full">
        <Input
          name="ingredient"
          type="text"
          label="Ingrédient"
          onChange={(event) => setIngredientName(event.currentTarget.value)}
        />
        <Button
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
        </Button>
      </div>
      {ingredients.map((ingredient, index) => (
        <Chip
          key={index}
          onClose={() => {
            setIngredients(
              ingredients.filter((igd) => igd.name !== ingredient.name)
            );
            handleIngredientsChanges(ingredients);
          }}
          variant="flat"
          className="flex"
          startContent={<AiTwotoneCheckSquare size="10" />}
        >
          <span>{ingredient.name}</span>
        </Chip>
      ))}
    </div>
  );
};

export default IngredientsList;
