import {
  IIngredient,
  INGREDIENTS_TYPES,
  IStep,
  RECIPE_TYPE,
} from "@/modules/recipes/recipes.types";
import { Button, Chip, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function RecipeForm() {
  const [ingredients, setIngredients] = useState([] as IIngredient[]);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientType, setIngredientType] = useState("");
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
      <Link href="/">Annuler</Link>
      <Button>Enregistrer</Button>
    </form>
  );
}
