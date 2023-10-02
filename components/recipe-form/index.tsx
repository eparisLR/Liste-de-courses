import {
  IIngredient,
  IStep,
  RECIPE_TYPE,
} from "@/modules/recipes/recipes.types";
import { Button, Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function RecipeForm() {
  const [ingredients, setIngredients] = useState([] as IIngredient[]);
  const [steps, setSteps] = useState([] as IStep[]);

  return (
    <form>
      <Input
        name="name"
        isRequired
        type="text"
        label="name"
        className="max-w-xs"
        placeholder="Nom de la recette..."
      />
      <div className="flex gap-2">
        {ingredients.map((ingredient, index) => (
          <Chip
            key={index}
            onClose={() =>
              setIngredients(
                ingredients.filter((igd) => igd.name !== ingredient.name)
              )
            }
            variant="flat"
          />
        ))}
      </div>

      <Select
        label="Catégorie de la recette"
        placeholder="Sélectionnez une catégorie de recettes"
      >
        {Object.values(RECIPE_TYPE).map((type) => {
          return (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          );
        })}
      </Select>
      <Button>Enregistrer</Button>
    </form>
  );
}
