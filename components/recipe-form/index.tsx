import {
  IIngredient,
  IStep,
  RECIPE_TYPE,
  Recipe,
  SEASONS,
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
  const [recipeSeason, setRecipeSeason] = useState(SEASONS.AUTUMN);
  const handleIngredientsChanges = (ingredients: IIngredient[]) =>
    setIngredients(ingredients);
  const handleStepsChanges = (steps: IStep[]) => setSteps(steps);
  return (
    <>
      <form className="flex flex-col gap-3 w-full p-8">
        <h2>Ajout d&apos;une recette</h2>
        <div className="flex gap-3">
          <Input
            name="recipeName"
            isRequired
            type="text"
            label="Recette"
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
          <Select
            label="Saison de la recette"
            isRequired
            name="recipeSeason"
            placeholder="Sélectionnez une saison"
            onChange={(event) => {
              setRecipeSeason(Object.values(SEASONS)[+event.target.value]);
            }}
          >
            {Object.values(SEASONS).map((season, index) => {
              return (
                <SelectItem key={index} value={season}>
                  {season}
                </SelectItem>
              );
            })}
          </Select>
        </div>
        <div className="flex gap-2 justify-between">
          <IngredientsList
            handleIngredientsChanges={handleIngredientsChanges}
          />
          <StepsList handleStepsChanges={handleStepsChanges} />
        </div>
        <div className="flex flex-row-reverse gap-2 items-center">
          <Button
            onClick={() => {
              let recipeToSave = new Recipe(
                recipeName,
                recipeType,
                ingredients,
                steps,
                SEASONS.WINTER
              );
              saveRecipe(recipeToSave);
            }}
          >
            Enregistrer
          </Button>
          <Link href="/">Annuler</Link>
        </div>
      </form>
    </>
  );
}
