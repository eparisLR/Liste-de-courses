import {
  IIngredient,
  IStep,
  RECIPE_TYPE,
  Recipe,
} from "@/modules/recipes/recipes.types";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import IngredientsList from "../ingredients-list";
import StepsList from "../steps-list";
import { useState } from "react";
import { saveRecipe } from "@/modules/recipes/recipes.service";

export default function RecipeForm() {
  const [ingredients, setIngredients] = useState([] as IIngredient[]);
  const [steps, setSteps] = useState([] as IStep[]);
  const [recipeName, setRecipeName] = useState("");
  const [recipeType, setRecipeType] = useState(RECIPE_TYPE.ENTREE);
  const handleIngredientsChanges = (ingredients: IIngredient[]) =>
    setIngredients(ingredients);
  const handleStepsChanges = (steps: IStep[]) => setSteps(steps);
  return (
    <form>
      <Input
        name="recipeName"
        isRequired
        type="text"
        label="Recette"
        className="max-w-xs"
        placeholder="Nom de la recette..."
        onChange={(event) => setRecipeName(event.currentTarget.value)}
      />

      <Select
        label="Catégorie de la recette"
        isRequired
        name="recipeType"
        placeholder="Sélectionnez une catégorie de recettes"
        onChange={(event) => {
          setRecipeType(Object.values(RECIPE_TYPE)[+event.target.value]);
        }}
      >
        {Object.values(RECIPE_TYPE).map((type, index) => {
          return (
            <SelectItem key={index} value={type}>
              {type}
            </SelectItem>
          );
        })}
      </Select>
      <IngredientsList handleIngredientsChanges={handleIngredientsChanges} />
      <StepsList handleStepsChanges={handleStepsChanges} />
      <Link href="/">Annuler</Link>
      <Button
        onClick={() => {
          let recipeToSave = new Recipe(
            recipeName,
            recipeType,
            ingredients,
            steps
          );
          saveRecipe(recipeToSave);
        }}
      >
        Enregistrer
      </Button>
    </form>
  );
}
