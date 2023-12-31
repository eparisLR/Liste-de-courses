import {
  IIngredient,
  IStep,
  Image,
  RECIPE_TYPE,
  Recipe,
  SEASONS,
} from "../../modules/recipes/recipes.types";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import IngredientsList from "../ingredients-list";
import StepsList from "../steps-list";
import { useState } from "react";
import { editRecipe, saveRecipe } from "../../modules/recipes/recipes.service";
import { RecipeFormProps } from "./recipe-form.type";

export default function RecipeForm({ recipe }: RecipeFormProps) {
  const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : [] as IIngredient[]);
  const [steps, setSteps] = useState(recipe ? recipe.steps : [] as IStep[]);
  const [recipeName, setRecipeName] = useState(recipe ? recipe.name : "");
  const [recipeType, setRecipeType] = useState(recipe ? recipe.type : RECIPE_TYPE.ENTREE);
  const [recipeSeason, setRecipeSeason] = useState(recipe ? recipe.season : SEASONS.AUTUMN);
  const handleIngredientsChanges = (ingredients: IIngredient[]) =>
    setIngredients(ingredients);
  const handleStepsChanges = (steps: IStep[]) => setSteps(steps);
  return (
    <>
      <form className="flex flex-col gap-3 w-full p-8">
        <h2>{recipe ? "Edition de la recette" : "Ajout d'une recette"}</h2>
        <div className="flex gap-3">
          <Input
            name="recipeName"
            isRequired
            type="text"
            label="Recette"
            value={recipeName}
            placeholder="Nom de la recette..."
            onChange={(event) => setRecipeName(event.currentTarget.value)}
          />

          <Select
            label="Catégorie de la recette"
            isRequired
            name="recipeType"
            placeholder="Sélectionnez une catégorie de recettes"
            defaultSelectedKeys={[recipeType]}
            onChange={(event) => {
              setRecipeType(Object.values(RECIPE_TYPE)[+event.target.value]);
            }}
          >
            {Object.values(RECIPE_TYPE).map((type) => {
              return (
                <SelectItem key={type} value={type}>
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
            defaultSelectedKeys={[recipeSeason]}
            onChange={(event) => {
              setRecipeSeason(Object.values(SEASONS)[+event.target.value]);
            }}
          >
            {Object.values(SEASONS).map((season) => {
              return (
                <SelectItem key={season} value={season}>
                  {season}
                </SelectItem>
              );
            })}
          </Select>
        </div>
        <div className="flex gap-2 justify-between">
          <IngredientsList
            handleIngredientsChanges={handleIngredientsChanges}
            recipeIngredients={ingredients}
          />
          <StepsList
            handleStepsChanges={handleStepsChanges}
            recipeSteps={steps}
          />
        </div>
        <div className="flex flex-row-reverse gap-2 items-center">
          <Button
            onClick={() => {
              if (recipe) {
                recipe.name = recipeName;
                recipe.type = recipeType;
                recipe.season = recipeSeason;
                recipe.ingredients = ingredients;
                recipe.steps = steps;
                editRecipe(recipe, recipe.id);
              } else {
                let recipeToSave = new Recipe(
                  recipeName,
                  recipeType,
                  ingredients,
                  steps,
                  recipeSeason
                );
                saveRecipe(recipeToSave);
              }
            }}
          >
            Enregistrer
          </Button>
          <Link href="/admin">Annuler</Link>
        </div>
      </form>
    </>
  );
}
